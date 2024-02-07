import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

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

      <h3>New User:</h3>
      <button className="homeSignUpButton" onClick={handleSignUp}>
        Sign Up
      </button>
      <h3>User already exist</h3>
      <button className="homeLoginButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Home;
