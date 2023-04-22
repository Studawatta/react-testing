import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="wrapper">
      <span className="username">{user.name}</span>
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
          {loading ? 'please wait' : 'Login'}
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
