// Task 1 :

const sumEvenNumbers = (arr: number[]): number => {
  return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
};

const nums = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(nums));

// Task 2 :

interface StringToBooleanFunction {
  (input: string): boolean;
}

const isEmpty: StringToBooleanFunction = (str) => str === "";

console.log(isEmpty(""));
console.log(isEmpty("Hello"));

// Task 3 :

type CompareStrings = (a: string, b: string) => boolean;

const areStringsEqual: CompareStrings = (str1, str2) => str1 === str2;

console.log(areStringsEqual("Hello", "Hello"));
console.log(areStringsEqual("Hello", "World"));

// Task 4 :

function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));
console.log(getLastElement([]));

// Task 5 :

function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}

console.log(makeTriple(1, 2, 3));
console.log(makeTriple("a", "b", "c"));
console.log(makeTriple(true, false, true));
