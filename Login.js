// src/Login.js
import { response } from 'express';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const LoginData = {
        username: username,
        password: password,
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(LoginData),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            alert('Login successful');
            // Do something after successful login, e.g., redirect to another page   
        } else {

            setErrorMessage(data.message ||
                'Login failed. Please check your credentials');
        }
    })
    .catch((error) => {
        setErrorMessage('An error occured while logging in.');
        console.error('Error', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
 );
};
    
      
export default Login;
