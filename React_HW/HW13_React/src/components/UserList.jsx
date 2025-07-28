import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import UserItem from "./UserItem";

// function UserList({ users, filter, setFilter }) {
//   const filteredUsers = users.filter((user) =>
//     user?.name?.toLowerCase().includes(filter.toLowerCase())
//   );

//   const handleSetExampleFilter = () => {
//     setFilter("a");
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <button onClick={handleSetExampleFilter}>Filter</button>
//       <div>
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => <UserItem key={user.id} user={user} />)
//         ) : (
//           <p>No users found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   users: state.users,
//   filter: state.filter,
// });

// export default connect(mapStateToProps, { setFilter })(UserList);

import styles from "../styles/UserList.module.css";

function UserList({ users, filter, setFilter }) {
  const filteredUsers = users.filter((user) =>
    user?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSetExampleFilter = () => {
    setFilter("a");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User List</h2>
      <button onClick={handleSetExampleFilter} className={styles.button}>
        Filter: contains "a"
      </button>
      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserItem key={user.id} user={user} />)
        ) : (
          <p className={styles.noUsers}>No users found</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(UserList);
