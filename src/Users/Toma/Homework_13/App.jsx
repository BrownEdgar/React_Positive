import React, { useState } from 'react';
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target
    const user = {
      id: Date.now(),
      username: username.value,
      password: password.value
    };

    setUsers([...users, user]);
    e.target.reset();
  };

  const checkUser = (e) => {
    e.preventDefault();
    const checkUsername = e.target.checkUsername.value;

    const userExists = users.some((user) => user.username === checkUsername);
    alert(`${checkUsername} ${!userExists && 'does not'} exist in the list.`);

    e.target.reset();
  };

  return (
    <div className="App">
      <div className='App-content'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" required />
          <input type="submit" value="Add" />
        </form>
        <p>
          {JSON.stringify(users)}
        </p>
      </div>
      <div className='App-cont'>

        <form onSubmit={checkUser}>
          <label htmlFor="checkUsername">Check Username</label>
          <input type="text" id="checkUsername" required />
          <input type="submit" value="Check" />
        </form>
      </div>
    </div>
  );
}