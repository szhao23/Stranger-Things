import React, { Component, useEffect, useState} from 'react';
import Axios from 'axios';
import {Redirect, Route, useHistory} from 'react-router-dom';
import './Register';

export default function login() {

    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const [loginStatus, setLoginStatus] = useState(""); 
    const [token, setToken] = useState("");

    const user = {user: 
        {
            username: usernameLogin,
            password: passwordLogin,
        }
    }

    let history = useHistory();

    const login = async () => {
      // Show the Username and Password that is created through registration
      console.log('Username: ', usernameLogin, 'Password: ', passwordLogin);
      
      // Axios.post Request to fetch the data inside the API
      let response = await Axios.post("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/users/login", user)
      console.log('Here is the result object: ', response);

      // Get Stored Token
      localStorage.getItem('token');

      if (history) {
        history.push('/');
      }
        
  };

  return (
    <div>
      <h1>Login</h1><br/><br/>
      <div className="login">
        <label>Username</label> <br/>
        <input type="text" placeholder="username" onChange={(e) => {
              setUsernameLogin(e.target.value);
            }}
        />

        <br/><label>Password</label><br/>
        <input type="text" placeholder="password" onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
        />
        <br/><br/><button onClick={() => login()}> Login </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}




