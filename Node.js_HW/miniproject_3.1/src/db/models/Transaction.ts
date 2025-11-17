import { Schema, model, Document } from "mongoose";

export interface TransactionDocument extends Document {
  type: "income" | "expense";
  amount: number;
  date: Date;
}

const TransactionSchema = new Schema<TransactionDocument>({
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = model("Transaction", TransactionSchema);
export default Transaction;
