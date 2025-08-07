import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../redux/action";
import styles from "./LoginForm.module.css";

function LoginForm({ login }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    setUserName("");
    setPassword("");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className={styles.button} type="submit">
        Log In
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch(loginAction(username)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
