import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name},{user.mail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
