import { Customer, ICustomer } from '../models/customer.model';

const getCustomers = async () => {
  const customer = await Customer.find();
  return customer;
};

const createCustomer = async (data: Partial<ICustomer>) => {
  const customer = new Customer(data);
  return await customer.save();
};

const getCustomerById = async (id: string) => {
  const customer = await Customer.findById(id);
  return customer;
};

const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
  return await Customer.findByIdAndUpdate(id, data, { new: true });
};

const deleteCustomer = async (id: string) => {
  return await Customer.findByIdAndDelete(id);
};

export default {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
