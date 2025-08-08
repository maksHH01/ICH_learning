import React, { useState } from "react";
import actionCreator from "../redux/actions";
import { connect } from "react-redux";

function UserForm(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Пожалуйста, введите имя пользователя");
      return;
    }
    setError("");
    props.setUserInfo({ name, status });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        value={status || ""}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
      />
      <button type="submit">Обновить</button>
    </form>
  );
}

export default connect(null, { setUserInfo: actionCreator })(UserForm);
