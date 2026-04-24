import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const CustomerSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema);
