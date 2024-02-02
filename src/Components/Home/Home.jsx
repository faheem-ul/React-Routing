import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate = useNavigate();

  function navigateSignUp() {
    navigate("/signup");
  }

  function navigateLogin() {
    navigate("/login");
  }

  return (
    <div className="homePage">
      <h1 className="mainHeading">Welcome to Our Website</h1>
      <h2 className="sub-mainHeading">
        This is home page. You can go through the navbar to see the users. By
        clicking on any user, you'll be displayed with the details.
      </h2>
      <p className="homePara">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        non, doloremque quod nesciunt quidem perspiciatis similique atque
        eveniet optio necessitatibus libero quisquam totam explicabo incidunt
        deserunt autem unde. Perspiciatis, fugiat?
      </p>

      <h4 className="signupHeading">
        Don't have an account :{" "}
        <span onClick={navigateSignUp} className="signuplink">
          Sign Up
        </span>
      </h4>

      <button className="loginButton" onClick={navigateLogin}>
        Login
      </button>
    </div>
  );
}

export default Home;
