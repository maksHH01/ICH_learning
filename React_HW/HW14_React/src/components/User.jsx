import React from "react";
import { connect } from "react-redux";

function User(props) {
  return (
    <>
      <h2>Имя пользователя: {props.name}</h2>
      <p>Статус пользователя: {props.status}</p>
    </>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
