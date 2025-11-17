import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

//task 1
console.log(capitalize("hello world"));
console.log(reverseString("TypeScript"));

//task 2
const loan = new Finance.LoanCalculator();
console.log("Ежемесячный платеж:", loan.calculatePayment(100000, 12, 24));

const tax = new Finance.TaxCalculator();
console.log("Налог:", tax.calculateTax(50000, 20));

//task 3
const admin = new UserManagement.Admin.AdminUser(
  "Alice",
  "alice@mail.com",
  false
);

console.log(admin.getInfo());

admin.setSuperAdmin(true);

console.log(admin.getInfo());

//task 4
console.log(generateFibonacci(50));
console.log(generatePrimeNumbers(50));
