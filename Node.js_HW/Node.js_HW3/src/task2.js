import fs from "node:fs/promises";

async function manageFile() {
  try {
    await fs.writeFile("./src/info.txt", "Node.js is awesome!\n");
    console.log("Файл записан!");

    const data = await fs.readFile("./src/info.txt", "utf-8");
    console.log("Файл успешно прочитан");
    console.log(data);
  } catch (error) {
    console.log("Произошла ошибка:", error);
  }
}

manageFile();
