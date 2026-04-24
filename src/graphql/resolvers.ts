import productController from '../controllers/product.controller';
import customerController from '../controllers/customer.controller';
import orderController from '../controllers/order.controller';
import { IProduct } from '../models/product.model';
import { ICustomer } from '../models/customer.model';
import { IOrder } from '../models/order.model';

// Finish the resolvers
export const resolvers = {
  Query: {
    products: async () => await productController.getProducts(),
    customers: async () => await customerController.getCustomers(),
    orders: async () => await orderController.getOrders(),
    getProductById: async (_: unknown, { id }: { id: string }) =>
      await productController.getProductById(id),
    getCustomerById: async (_: unknown, { id }: { id: string }) =>
      await customerController.getCustomerById(id),
  },
  Product: {
    customers: async (parent: { id: string }) => {
      const orders = await orderController.getOrders();
      const filtered = orders.filter(
        (order) => order.productId.toString() === parent.id,
      );
      return Promise.all(
        filtered.map((order) =>
          customerController.getCustomerById(order.customerId.toString()),
        ),
      );
    },
  },
  Customer: {
    products: async (parent: { id: string }) => {
      const orders = await orderController.getOrders();
      const filtered = orders.filter(
        (order) => order.customerId.toString() === parent.id,
      );
      return Promise.all(
        filtered.map((order) =>
          productController.getProductById(order.productId.toString()),
        ),
      );
    },
  },
  Order: {
    product: async (parent: any) =>
      await productController.getProductById(
        parent.productId as unknown as string,
      ),
    customer: async (parent: any) =>
      await customerController.getCustomerById(
        parent.customerId as unknown as string,
      ),
  },
  Mutation: {
    addProduct: async (_: unknown, { productName, productPrice }: IProduct) =>
      await productController.createProduct({ productName, productPrice }),
    editProduct: async (
      _: unknown,
      { id, productName, productPrice }: IProduct,
    ) =>
      await productController.updateProduct(id, { productName, productPrice }),
    removeProduct: async (_: unknown, { id }: { id: string }) => {
      const result = await productController.deleteProduct(id);
      return !!result;
    },

    addCustomer: async (
      _: unknown,
      { firstName, lastName, email }: ICustomer,
    ) =>
      await customerController.createCustomer({ firstName, lastName, email }),
    editCustomer: async (
      _: unknown,
      { id, firstName, lastName, email }: ICustomer,
    ) =>
      await customerController.updateCustomer(id, {
        firstName,
        lastName,
        email,
      }),
    removeCustomer: async (_: unknown, { id }: { id: string }) =>
      await customerController.deleteCustomer(id),

    addOrder: async (_: unknown, { productId, customerId }: IOrder) =>
      await orderController.createOrder(
        productId.toString(),
        customerId.toString(),
      ),

    editOrder: async (_: unknown, { id, productId, customerId }: IOrder) =>
      await orderController.updateOrder(id, { productId, customerId }),

    removeOrder: async (_: unknown, { id }: { id: string }) => {
      const deleted = await orderController.deleteOrder(id);
      return !!deleted;
    },
  },
};
