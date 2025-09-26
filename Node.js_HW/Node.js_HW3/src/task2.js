import fs from "node:fs";

fs.writeFile("./src/info.txt", "Node.js is awesome!\n", (error) => {
  if (error) {
    return console.log("Запись в файл не удалась!", error);
  }
  console.log("Файл записан!");
});

fs.readFile("./src/info.txt", "utf-8", (error, data) => {
  if (error) {
    return console.log("Неудалось прочитать файл", error);
  }
  console.log("Файл успешно прочитан");
  console.log(data);
});
