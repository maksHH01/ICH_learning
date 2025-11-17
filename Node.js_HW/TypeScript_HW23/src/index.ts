// Task 1

function task1(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 done"), 1000)
  );
}

function task2(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 2 done"), 1500)
  );
}

function task3(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 3 done"), 500)
  );
}

async function runSequential() {
  console.log(await task1());
  console.log(await task2());
  console.log(await task3());

  console.log("Все задачи выполнены последовательно!");
}

runSequential();

// Task 2

function processString(str: string): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(str.toUpperCase()), 500)
  );
}

async function processStringsParallel(words: string[]) {
  const result = await Promise.all(words.map((word) => processString(word)));
  console.log("Преобразованные строки:", result);
}

processStringsParallel(["apple", "banana", "orange"]);

//Task 3

function ok1(): Promise<string> {
  return Promise.resolve("OK 1");
}

function ok2(): Promise<string> {
  return Promise.resolve("OK 2");
}

function fail(): Promise<string> {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Ошибка в третьем промисе!"), 1000)
  );
}

async function runWithError() {
  try {
    const results = await Promise.all([ok1(), ok2(), fail()]);
    console.log(results);
  } catch (err) {
    console.error("Произошла ошибка:", err);
  }
}

runWithError();

// Task 4

function delayNumber(n: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`Готово: ${n}`), n));
}

async function runDynamic(numbers: number[]) {
  const results = await Promise.all(numbers.map((n) => delayNumber(n)));
  console.log("Все промисы завершены:", results);
}

runDynamic([200, 1000, 500]);
