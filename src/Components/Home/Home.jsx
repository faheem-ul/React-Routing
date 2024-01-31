import React from "react";
import "./Home.css";
function Home() {
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
    </div>
  );
}

export default Home;
