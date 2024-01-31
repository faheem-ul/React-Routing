import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UseParams() {
  const {id}  = useParams();
  const [user, setUser] = useState(null);
//   const manuallyAssignedId = 2;
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  if (!user) {
    return <div><h1>Passing the id in the broweser will show the data of respective user</h1></div>;
  }
  return (
    <div>
        <h1>This data is shown with the help of useParams Hook.</h1>
      <h2>Username: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>   
    </div>
  );
}

export default UseParams;
