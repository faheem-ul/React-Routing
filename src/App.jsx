import React from "react";

import Home from "./Components/Home/Home";
import GetUsers from "./Components/GetUsers/GetUsers";
import UserDetails from "./Components/UserDetails/UserDetails";
import AddUser from "./Components/AddUser/AddUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const linkstyle = {
    color: "red",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
  };
  return (
    <div className="nav">
      <Router>
        <Link to="/home" style={linkstyle}>
          Home Page
        </Link>
        <Link to="/users" style={linkstyle}>
          Users
        </Link>
        <Link to="/adduser" style={linkstyle}>
          Add User
        </Link>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<GetUsers />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/userdetails/:id" element={<UserDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
