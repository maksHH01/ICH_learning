import React from "react";
import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Max",
    age: "30",
    bio: "Software Developer",
  },
  {
    id: 2,
    name: "Alice",
    age: "27",
    bio: "QA Tester",
  },
  {
    id: 3,
    name: "john",
    age: "25",
    bio: "UI/UX Designer",
  },
];

function Users() {
  return (
    <div>
      <h1>Users:</h1>
      {users.map((user) => (
        <li>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default Users;
