import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { useCallback } from "react";
import { useMemo } from "react";

const userList = [
  { id: 1, name: "Аня" },
  { id: 2, name: "Борис" },
  { id: 3, name: "Виктор" },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((filterText) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, []);

  const filteredList = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredList} />
    </>
  );
}
export default App;
