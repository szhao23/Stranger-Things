import React from 'react';
import Axios from 'axios';
import './Register';
import './Login';
 
function Dashboard(props) {
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  // const info = {user:
  //   {
  //     posts: [],
  //     messages: [],
  //     _id: '',
  //     username: '',
  //   }
  // }

  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJjYzQ1MDRmZGM1MDAwMTcxYTJlY2MiLCJ1c2VybmFtZSI6ImhleXRoZXJlMSIsImlhdCI6MTYyMjk4Mzc2MH0.3f_xMXOTADsFp83nvJ4HqvsGzlEQCdIddPyAfXHqWCw'

  Axios.interceptors.request.use(
    config => {
      config.headers.authorization = `Bearer ${accessToken}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  const getInformation = async () => {
      localStorage.getItem('token');
      let res = await Axios.get("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/users/me")
      console.log('Here is the res object for the info: ', res)

      // Test Routes
      let test = await Axios.get("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/test/me")
      console.log('Test: ', test)

      const messages = res.data.data.messages;
      console.log('Here are my messages: ', messages);

      const posts = res.data.data.posts;
      console.log('Here are my posts: ', posts);

      const id = res.data.data._id;
      console.log('Here is my id: ', id);

      const username = res.data.data.username;
      console.log('Here is my username: ', username);

}

  return (
    <div> 
      <div className= "Show Info"> <h2>Show My Notifications</h2>
        <br></br>
        <input type="button" onClick={() => getInformation()} value= "Show Info"/>
        </div>
      <br></br>
      <h3>Welcome User!</h3>
      <br></br>
      <div className= "Logout">
          <input type="button" onClick={handleLogout} value="Logout" />
      </div>
      </div> 
  );
}
 
export default Dashboard;
