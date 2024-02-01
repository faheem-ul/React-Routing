import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

function AddUser() {
  const [newUserName, setNewuserName] = useState("");
  const [newUserEmail, setNewuserEmail] = useState("");
  const [newUserPhone, setNewuserPhone] = useState("");
  const navigate = useNavigate();
  // const [newUserId, setNewuserId] = useState("0");

  // async function fetchUserId() {
  //   try {
  //     const response = await axios.get("http://localhost:3000/users");
  //     console.log("Users array fetched successfully:", response.data);
  //     const maxId = response.data.reduce((max, currUser) =>
  //       Math.max(max, parseInt(currUser.id, 10), -1)
  //     );
  //     console.log("this is the max id", maxId);
  //     // setNewuserId(maxId + 1);
  //   } catch (error) {
  //     console.error("Error fetching users array:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchUserId();
  // }, []);

  function handleSubmit() {
    // e.preventDefault();

    const newUser = {
      // id: newUserId,
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
    </div>
  );
}

export default AddUser;
