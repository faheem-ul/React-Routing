import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [Users, SetUsers] = useState([]);
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  function handleLoginEmail(e) {
    // e.preventDefault();
    setLoginEmail(e.target.value);
  }

  function handleLoginPassword(e) {
    // e.preventDefault();
    setLoginPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("these are users", Users);

    Users.find((user) => {
      if (user.email === LoginEmail && user.password === LoginPassword) {
        console.log("login successful");
        localStorage.setItem("logged in user", JSON.stringify(user));
        navigate("/users");
      } else {
        console.log("login unsuccessful");
      }
    });
  }

  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:3000/users");
      //   console.log("Users fetched successfully:", response.data);
      SetUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    // SetUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="login">
      <h1 className="loginHeading">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email"
          onChange={handleLoginEmail}
        />
        <input
          type="text"
          placeholder="enter password"
          onChange={handleLoginPassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
