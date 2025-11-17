export namespace Finance {
  export class LoanCalculator {
    calculatePayment(
      amount: number,
      annualRate: number,
      months: number
    ): number {
      const r = annualRate / 12 / 100;
      return (amount * r) / (1 - Math.pow(1 + r, -months));
    }
  }

  export class TaxCalculator {
    calculateTax(income: number, taxRate: number): number {
      return income * (taxRate / 100);
    }
  }
}
