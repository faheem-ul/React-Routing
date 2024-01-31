import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  console.log("This is the id of user", id);

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUserDetails() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
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
    <div>
      <h1>These are the required user details</h1>
      <h2>Username: {userDetails.name}</h2>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>
    </div>
  );
}

export default UserDetails;
