import fs from "node:fs";

fs.mkdir("myFolder", (error) => {
  if (error) {
    return console.log("Ошибка при создании каталога", error);
  }
  console.log("Каталог успешно создан");
});

fs.rmdir("myFolder", (error) => {
  if (error) {
    return console.log("Ошибка при удалении директории", error);
  }
  console.log("Директория успешно удалена");
});
