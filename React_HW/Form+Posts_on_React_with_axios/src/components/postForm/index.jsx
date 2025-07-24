import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import axios from "axios";
import { BASE_URL } from "../../App";

function PostForm({ onPostCreated }) {
  const { register, handleSubmit, reset } = useForm();

  function postFormSubmit(formData) {
    const postData = {
      title: formData.title,
      text: formData.content,
      avatar: "https://avatars.githubusercontent.com/u/2702935",
    };

    axios
      .post(BASE_URL + "/posts", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("Post has been published successfully");
        onPostCreated && onPostCreated();
        reset();
      })
      .catch(() => {
        console.log("Error occured when published post");
      });
  }

  return (
    <section className={styles.formStyles}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit(postFormSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            {...register("title")}
            type="text"
            id="title"
            placeholder="Enter your title"
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            {...register("content")}
            id="content"
            placeholder="Enter your text"
          ></textarea>
        </div>
        <button type="submit">Public Post</button>
      </form>
    </section>
  );
}

export default PostForm;
