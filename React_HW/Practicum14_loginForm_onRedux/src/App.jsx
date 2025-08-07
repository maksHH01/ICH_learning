import "./App.css";
import LoginForm from "./components/loginForm";
import React from "react";
import { connect } from "react-redux";
import UserProfile from "./components/UserProfile";

function App({ isAuthenticated }) {
  return <div>{isAuthenticated ? <UserProfile /> : <LoginForm />}</div>;
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App);
