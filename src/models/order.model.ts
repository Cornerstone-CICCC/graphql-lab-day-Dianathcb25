import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IOrder extends Document {
  id: string;
  productId: mongoose.Types.ObjectId;
  customerId: mongoose.Types.ObjectId;
}

const OrderSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
