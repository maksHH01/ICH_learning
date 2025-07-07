import styles from "../header/style.module.css";

function NavList({ title, style }) {
  return (
    <li>
      <a href="#" style={style}>
        {title}
      </a>
    </li>
  );
}

export default NavList;
