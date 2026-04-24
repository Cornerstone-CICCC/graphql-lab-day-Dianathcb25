import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  productName: string;
  productPrice: number;
}

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
