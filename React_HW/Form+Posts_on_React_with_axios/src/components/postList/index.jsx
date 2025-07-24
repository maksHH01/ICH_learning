import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Post from "../post";
import axios from "axios";
import { BASE_URL } from "../../App";

const postPerPage = 3;

function PostList({ posts: initialPosts }) {
  const [allPosts, setAllPosts] = useState(initialPosts);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(BASE_URL + "/posts");
      setAllPosts(response.data);
      setCurrentPosts(response.data.slice(0, postPerPage));
    } catch (err) {
      setError("Ошибка при загрузке постов");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(allPosts.length / postPerPage);

  const handleNext = () => {
    const nextPage = page + 1;
    const start = nextPage * postPerPage;
    const end = start + postPerPage;
    if (start < allPosts.length) {
      setCurrentPosts(allPosts.slice(start, end));
      setPage(nextPage);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      const prevPage = page - 1;
      const start = prevPage * postPerPage;
      const end = start + postPerPage;
      setCurrentPosts(allPosts.slice(start, end));
      setPage(prevPage);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`);
      const updatedPosts = allPosts.filter((post) => post.id !== id);
      setAllPosts(updatedPosts);
      const start = page * postPerPage;
      const end = start + postPerPage;
      const updatedCurrent = updatedPosts.slice(start, end);
      if (updatedCurrent.length === 0 && page > 0) {
        setPage(page - 1);
        setCurrentPosts(
          updatedPosts.slice(start - postPerPage, end - postPerPage)
        );
      } else {
        setCurrentPosts(updatedCurrent);
      }
    } catch (err) {
      console.error("Ошибка при удалении", err);
    }
  };

  return (
    <section className={styles.postListSection}>
      <h1 className={styles.title}>List Of Posts</h1>

      {loading && <p className={styles.loading}>Загрузка постов...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !currentPosts.length ? (
        <p className={styles.empty}>There are no posts</p>
      ) : (
        <>
          <ul className={styles.postList}>
            {currentPosts.map((post) => (
              <Post key={post.id} post={post} onDelete={handleDelete} />
            ))}
          </ul>

          <div className={styles.pagination}>
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className={styles.pageButton}
            >
              Previous
            </button>
            <span className={styles.pageInfo}>
              Page {page + 1} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className={styles.pageButton}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default PostList;
