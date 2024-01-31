import axios from "axios";
import React, { useState } from "react";

function AddUser() {
  const [newUserName, setNewuserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: newUserName,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        console.log("new user added:", response);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }

  function handleChange(e) {
    setNewuserName(e.target.value);
  }

  return (
    <div>
      <h1>
        A new user can been added bu submitting the form, which can be viewed in
        the console section.
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
