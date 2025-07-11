import styles from "../user/styles.module.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const USERS_URL = "https://randomuser.me/api";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    await axios
      .get(USERS_URL)
      .then((response) => setUser(response.data.results[0]))
      .catch((error) => {
        console.log("Error failed", error);
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <ul>
          <li>
            <img
              className={styles.image}
              src={user.picture.large}
              alt="user picture"
            />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>E-mail: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
          <button onClick={fetchUser}>Load New User</button>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
