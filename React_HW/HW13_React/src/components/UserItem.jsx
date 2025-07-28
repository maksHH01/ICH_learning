import styles from "../styles/UserItem.module.css";

export default function UserItem({ user }) {
  return (
    <div className={styles.item}>
      <p>{user.name}</p>
    </div>
  );
}
