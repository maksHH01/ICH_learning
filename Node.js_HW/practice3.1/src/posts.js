import fs from "node:fs/promises";
import axios from "axios";

const postInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

const postPath = "./posts.txt";

async function getPosts() {
  try {
    const response = await postInstance.get("/");
    return response.data;
  } catch (error) {
    console.log("Error failed", error.message);
  }
}

const posts = await getPosts();

if (!posts) {
  console.log("Неудалось получить посты");
} else {
  await fs.writeFile("./posts.txt", JSON.stringify(posts));

  const text = await fs.readFile(postPath, "utf-8");
  console.log(text);
}
