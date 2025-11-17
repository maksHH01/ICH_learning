import type { Request, Response } from "express";
import * as balanceService from "../service/balanceService.js";

export const setBalanceController = async (req: Request, res: Response) => {
  try {
    const { initialBalance } = req.body;
    const user = await balanceService.setBalance(initialBalance);
    res.status(201).json({ message: "Баланс установлен", user });
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};
