// Finish the resolvers
export const resolvers = {
  Query: {
    products: () => {},
    customers: () => {},
    orders: () => {},
    getProductById: () => {},
    getCustomerById: () => {},
  },
  Product: {
    customers: () => {}
  },
  Customer: {
    products: () => {}
  },
  Order: {
    product: () => {},
    customer: () => {}
  },
  Mutation: {
    addProduct: () => {},
    editProduct: () => {},
    removeProduct: () => {},

    addCustomer: () => {},
    editCustomer: () => {},
    removeCustomer: () => {},

    addOrder: () => {},
    editOrder: () => {},
    removeOrder: () => {}
  }
}
