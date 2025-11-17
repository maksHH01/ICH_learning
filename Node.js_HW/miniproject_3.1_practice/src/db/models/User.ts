import { Schema, model, Document, Types } from "mongoose";

export interface UserDocument extends Document {
  initialBalance: number;
  currentBalance: number;
  transactions: Types.ObjectId[];
}

const UserSchema = new Schema<UserDocument>({
  initialBalance: { type: Number, required: true, min: 0 },
  currentBalance: { type: Number, required: true, min: 0 },
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
});

UserSchema.pre<UserDocument>("save", function (next) {
  if (!this.currentBalance) this.currentBalance = this.initialBalance;
  next();
});

const User = model<UserDocument>("User", UserSchema);
export default User;
