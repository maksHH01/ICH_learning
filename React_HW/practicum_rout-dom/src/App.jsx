import React from "react";
import { RouterProvider, useFormAction } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
