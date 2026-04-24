import { Product, IProduct } from '../models/product.model';

const getProducts = async () => {
  const product = await Product.find();
  return product;
};

const createProduct = async (data: Partial<IProduct>) => {
  const product = new Product(data);
  return await product.save();
};

const getProductById = async (id: string) => {
  return await Product.findById(id);
};

const updateProduct = async (id: string, data: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
