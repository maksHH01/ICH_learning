import fs from "node:fs/promises";

async function manageDirectory() {
  try {
    await fs.mkdir("myFolder");
    console.log("Каталог успешно создан");

    await fs.rmdir("myFolder");
    console.log("Директория успешно удалена");
  } catch (error) {
    console.log("Произошла ошибка:", error);
  }
}

manageDirectory();
