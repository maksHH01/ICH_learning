import styles from "../button/style.module.css";

function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

export default Button;
