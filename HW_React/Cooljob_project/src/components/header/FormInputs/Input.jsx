import styles from "../../header/FormInputs/style.module.css";

function Input({ src, placeholder, logoStyles }) {
  return (
    <div className={styles.inputStyles}>
      <img
        style={logoStyles ? logoStyles : {}}
        src={src}
        alt="icon"
        className={styles.icon}
      />
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
}

export default Input;
