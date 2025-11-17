import { z } from "zod";

export const userFullSchema = z.object({
  initialBalance: z
    .number()
    .min(0, { message: "initialBalance не может быть отрицательным" }),
});

export const transactionSchema = z.object({
  userId: z.string().min(1, { message: "userId обязателен" }),
  amount: z.number().min(0, { message: "amount не может быть отрицательным" }),
});
