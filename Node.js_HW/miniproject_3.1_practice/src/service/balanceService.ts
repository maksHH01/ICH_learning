import User from "../db/models/User.js";
import type { UserDocument } from "../db/models/User.js";
import Transaction from "../db/models/Transaction.js";
import type { TransactionDocument } from "../db/models/Transaction.js";

export const setBalance = async (
  initialBalance: number
): Promise<UserDocument> => {
  const user = await User.create({
    initialBalance,
    currentBalance: initialBalance,
    transactions: [],
  });
  return user;
};
