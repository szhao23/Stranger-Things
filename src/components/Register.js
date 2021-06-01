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
        console.log(usernameReg, passwordReg);
        // Axios(
        //     "https://strangers-things.herokuapp.com/api/2104-uic-web-ft/users/register", {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             user: {
        //                 username: usernameReg,
        //                 password: passwordReg,
        //             }
        //         })
        //     }).then(response => response.json()).then(result => {
        //         console.log(result);
        //     }).catch(console.error);
        let response = await Axios.post("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/users/register", 
        user)
        console.log('Here is the response object: ', response);

        const userToken = response.data.data.token
        const setToken = userToken;
        localStorage.setItem('token', setToken)

        console.log('Stored token: ', setToken);
    };
    

return (
    <div>
      <h1>Registration</h1><br/><br/>
      <div className="registration">
        <label>Username</label> <br/>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <br/><label>Password</label><br/>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <br/><br/><button onClick={() => register()}> Register </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}