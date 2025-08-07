import React from "react";
import { connect } from "react-redux";
import { logOutAction } from "../redux/action";
import styles from "./UserProfile.module.css";

function UserProfile({ user, logout }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Profile</h2>
      <p className={styles.text}>
        You enter like: <strong>{user ? user.userName : "Guest"}</strong>
      </p>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout: logOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
