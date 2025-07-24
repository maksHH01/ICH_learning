import styles from "./styles.module.css";
import PostForm from "../postForm";
import PostList from "../postList";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";

function Main() {
  const [posts, setPosts] = useState([]);
  const postListRef = useRef(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(BASE_URL + "/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} />
    </>
  );
}
export default Main;
