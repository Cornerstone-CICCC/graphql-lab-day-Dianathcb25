import { Order, IOrder } from '../models/order.model';

const getOrders = async () => {
  const order = await Order.find();
  return order;
};

const createOrder = async (productId: string, customerId: string) => {
  const order = new Order({ productId, customerId });
  return await order.save();
};

const updateOrder = async (id: string, data: Partial<IOrder>) => {
  return await Order.findByIdAndUpdate(id, data, { new: true });
};

const deleteOrder = async (id: string) => {
  return await Order.findByIdAndDelete(id);
};

export default {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
