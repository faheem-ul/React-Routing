import React from "react";

// import PostAPI from "./Components/PostAPI/PostAPI";
import Home from "./Components/Home/Home";
import GetUsers from "./Components/GetUsers/GetUsers";
import UserDetails from "./Components/UserDetails/UserDetails";
import AddUser from "./Components/AddUser/AddUser";
// import UseParams from "./Components/Useparams/UseParams";
// import UseParamsPost from "./Components/UseparamsPost/UseParamsPost";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const linkstyle = {
    color: "red",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px",
  };
  return (
    <>
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
        {/* <Link to="/useparams" style={linkstyle}>
          Use Params
        </Link> */}
        {/* <Link to="/useParamsPost">Use Params Post</Link> */}
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<GetUsers />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          {/* <Route path="/useparams" element={<UseParams />}></Route> */}
          <Route path="/userdetails/:id" element={<UserDetails />}></Route>
          {/* <Route path="/useParamsPost/:id" element={<UseParamsPost />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
