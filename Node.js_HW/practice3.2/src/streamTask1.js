import fs from "node:fs";

const readLargeFileStream = fs.createReadStream("./src/largeFile.txt", "utf-8");

readLargeFileStream.on("data", (chunk) => {
  console.log("Начало чтения:\n", chunk);
});

readLargeFileStream.on("end", () => {
  console.log("Чтение завершено");
});

readLargeFileStream.on("error", (error) => {
  console.log("Ошибка при чтении", error.message);
});
