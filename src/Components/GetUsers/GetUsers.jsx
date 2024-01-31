import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("Users fetched successfully:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <h3>Loading ....</h3>
      </div>
    );
  }

  return (
    <>
      <h1>
        This data is fetched with the help of axios from Json Placeholder
        users's API
      </h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/userdetails/${index}`}>{user.name} </Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GetUsers;
