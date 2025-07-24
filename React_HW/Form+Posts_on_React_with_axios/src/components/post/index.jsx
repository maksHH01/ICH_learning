import styles from "./styles.module.css";

function Post({ post, onDelete }) {
  return (
    <li className={styles.postItem}>
      <img src={post.avatar} alt="avatar" />
      <div className={styles.infoContainer}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
      <button onClick={() => onDelete(post.id)}>Удалить</button>
    </li>
  );
}

export default Post;
