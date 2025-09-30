import fs from "node:fs/promises";
import "dotenv/config";
import path from "node:path";

const fileName = process.env.FILENAME;
const filePath = path.join(process.cwd(), fileName);

const text = "Привет, это я, текст :)";

async function fileSettings() {
  try {
    await fs.writeFile(filePath, text, "utf-8");
    console.log(`Файл "${fileName}" создан`);

    const data = await fs.readFile(filePath, "utf-8");
    console.log("Содержание файла :", data);
  } catch (err) {
    console.log("Ошибка работы файла:", err.message);
  }
}

fileSettings();
