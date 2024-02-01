import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./GetUsers.css";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:3000/users");
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

  const handleUserClick = (id) => {
    console.log("user clicked", id);
    navigate(`/userdetails/${id}`);
    // console.log(userId);
  };
  if (loading) {
    return (
      <div>
        <h3>Loading ....</h3>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mainheadingUsers">Users from the server are ...</h1>
      <ul className="users">
        {users.map((user, id) => (
          <li key={user.id}>
            <span className="username" onClick={() => handleUserClick(user.id)}>
              {user.name}{" "}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetUsers;
