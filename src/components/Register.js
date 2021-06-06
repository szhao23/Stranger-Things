import React, { useEffect, useState} from 'react';
import Axios from 'axios';

export default function Registration() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [loginStatus, setLoginStatus] = useState(""); 
    
    const [token, setToken] = useState("");
    
    const user = {user: 
        {
            username: usernameReg,
            password: passwordReg,
        }
    }

    const register = async () => {
      // Show the Username and Password that is created through registration
      console.log(usernameReg, passwordReg);
    
      let response = await Axios.post("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/users/register", user);
      // Display data inside Response Object
      console.log('This is the response object: ', response);

      const setToken = response.data.data.token
      localStorage.setItem('token', setToken)
      // Display Stored Token
      console.log('Stored token: ', setToken);
  };
  
    

return (
    <div>
      <h1>Registration</h1><br/><br/>
      <div className="registration">
        <label>Username</label> <br/>
        <input type="text" placeholder="username" onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <br/><label>Password</label><br/>
        <input type="text" placeholder="password" onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <br/><br/><button onClick={() => register()}> Register </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}