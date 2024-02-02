import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./UserDetails.css";
function UserDetails() {
  const { id } = useParams();
  console.log("This is the id of user", id);

  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  async function fetchUserDetails() {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      console.log("user details fetched", response.data);
      setUserDetails(response.data);
    } catch (error) {
      console.log("user details not fetched", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  function deleteUser() {
    navigate("/home");
    localStorage.removeItem("logged in user");
  }

  if (loading) {
    return (
      <div>
        <h3>Loading ...</h3>
      </div>
    );
  } else if (!userDetails) {
    return (
      <div>
        <h1>Can't found the user</h1>
      </div>
    );
  }

  return (
    <div className="userdetails">
      <h1 className="mainHeadingUserDetails">
        These are the required user details:
      </h1>
      <h4 className="userDetails"> Username:</h4> <p>{userDetails.name}</p>
      <h4 className="userDetails">Email:</h4> <p>{userDetails.email}</p>
      <h4 className="userDetails">Phone:</h4> <p>{userDetails.number}</p>
      <button className="logOutUserDetails" onClick={deleteUser}>
        Log Out
      </button>
    </div>
  );
}

export default UserDetails;
