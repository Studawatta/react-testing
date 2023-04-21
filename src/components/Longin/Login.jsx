import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    try {
    } catch {
      setError(true);
    }
  };

  console.log(`user = ${username}`);
  return (
    <div className="wrapper">
      <form className="container">
        <input
          type="text"
          className="formInput"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="formInput"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          disabled={!username || !password}
          className="formButton"
          onClick={handleClick}
        >
          Login
        </button>
      </form>
      <span
        data-testid="error"
        className="errmsg"
        style={{ visibility: error ? 'visible' : 'hidden' }}
      >
        Something went wrong!
      </span>
    </div>
  );
};

export default Login;
