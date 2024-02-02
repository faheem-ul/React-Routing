import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [signUpUserName, setSignUpUserName] = useState("");
  const [signUpUserEmail, setSignUpUserEmail] = useState("");
  const [signUpUserPassword, setSignUpUserPassword] = useState("");
  const [signUpUserContact, setSignUpUserContact] = useState("");
  const naviagte = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newSignUpUser = {
      name: signUpUserName,
      email: signUpUserEmail,
      password: signUpUserPassword,
      number: signUpUserContact,
    };

    axios
      .post("http://localhost:3000/users", newSignUpUser)
      .then((response) => {
        console.log("new user Signed up successfully", response);
      })
      .catch((error) => {
        console.log("error is signup of new user", error);
      });
    alert("New user Signed up successfully");

    // localStorage.setItem("signupuser", JSON.stringify(newSignUpUser));

    naviagte("/login");
  }
  function handleSignUpNameChange(e) {
    setSignUpUserName(e.target.value);
  }
  function handleSignUpEmailChange(e) {
    setSignUpUserEmail(e.target.value);
  }

  function handleSignUpPasswordChange(e) {
    setSignUpUserPassword(e.target.value);
  }

  function handleSignUpPhone(e) {
    setSignUpUserContact(e.target.value);
  }

  return (
    <div className="signup">
      <h1 className="mainSignupHeading">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={handleSignUpNameChange}
        />
        <input
          type="email"
          placeholder="Enter Valid Email"
          onChange={handleSignUpEmailChange}
        />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={handleSignUpPasswordChange}
        />

        <input
          type="Number"
          placeholder="Enter you number"
          onChange={handleSignUpPhone}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
