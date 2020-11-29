import React, {useState, useEffect, useImperativeHandle} from 'react'
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const App = function () {
  const [users, setUsers] = useState(null);
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
        .get("/api/users")
        .then((users) => setUsers(users))
        .catch((err) => console.log(err));


  }, []);

  function submitForm(e) {
    if (username === "") {
      alert("Please fill the username field");
      return;
    }
    if (email ==="") {
      alert("Please fill the email field");
      return;
    }
    axios
      .post("/api/users",{
        username: username,
        email: email,
      })
      .then(function () {
        alert("Account created successfully");
        window.location.reload();
      })
      .catch(function () {
        alert("Could not create account");
      });
  }
  return (
    <>
      <h1>My Project</h1>
      {users === null ? (
        <p>Loading...</p>
      ) : users.length === 0 ?(
        <p>No user</p>
      ) : (
        <>
          <h2>Available Users</h2>
          <ol>
            {users.map((user, index) => (
              <li key={index}>
                Name: {user.name} - Email: {user.email}
              </li>
            ))}
          </ol>
        </>
      )}
      <form onSubmit={submitForm}>
        <input 
          onChange={(e) => setusername(e.target.value)}
          type = "text"
          placeholder = "Enter your username"
        />
        <input 
          onChange={(e) = setEmail(e.target.value)}
          type = "text"
          placeholder="Enter your email address"
        />
        <input type="submit"/>
      </form>
    </>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


