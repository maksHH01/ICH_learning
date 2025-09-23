import fs from "node:fs/promises";

export async function logMessage(message) {
  const log = `${message}\n`;

  try {
    await fs.appendFile("log.txt", log);
    console.log("Сообщение записано в log.txt");
  } catch (error) {
    console.log("Ошибка при записи в лог:", error);
  }
}
