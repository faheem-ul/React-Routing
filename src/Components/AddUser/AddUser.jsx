import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

function AddUser() {
  const [newUserName, setNewuserName] = useState("");
  const [newUserEmail, setNewuserEmail] = useState("");
  const [newUserPhone, setNewuserPhone] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    // e.preventDefault();

    const newUser = {
      name: newUserName,
      email: newUserEmail,
      number: newUserPhone,
    };

    axios
      .post("http://localhost:3000/users", newUser)
      .then((response) => {
        console.log("new user added:", response);
      })
      .catch((error) => {
        console.error("error:", error);
      });
    alert("New user added successfully");
    navigate("/home");
  }

  function handleNameChange(e) {
    setNewuserName(e.target.value);
  }
  function handleEmailChange(e) {
    setNewuserEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setNewuserPhone(e.target.value);
  }

  function deleteUser() {
    localStorage.removeItem("logged in user");
    navigate("/home");
  }

  return (
    <div className="adduser">
      <h1 className="mainheading">
        A new user can been added by submitting the form.
      </h1>
      <form className="userforms" onSubmit={handleSubmit}>
        <input
          type="text"
          // value={""}
          placeholder="Name of new user"
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email of new user"
          // value={""}
          onChange={handleEmailChange}
        />
        <input
          type="number"
          placeholder="Contact number of new user"
          // value={""}
          onChange={handlePhoneChange}
        />
        <button type="submit">Add User</button>
      </form>
      <button className="logoutAddUser" onClick={deleteUser}>
        Log Out
      </button>
    </div>
  );
}

export default AddUser;
