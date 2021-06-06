import React from 'react';
import Axios from 'axios';


function Posts() {
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

    const getPost = async () => {
        localStorage.getItem('token');
        let res = await Axios.get("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts") 
        console.log('Response Object: ', res)
        const results = res.data.data.posts

        console.log(results)

        const description = res.data.data.posts[0].description
        console.log('Description: ', description)

        //posts(array of objects)
        //  _id(String)
        //  author(object)
        //  description(String)
        //  isAuthor(boolean)
        //  location(string)
        //  message(array of message objects)
        //      fromUser(object)
        //          _id(string)
        //          username(string)
        //      content(string)
        //  price(string)
        //  title(string)
        //  willDeliver(boolean)
        //  active(boolean)
        //  createdAt(String)
        //  updatedAt(string)

    }

    return (
        <main>
            <div className= "Post Results"> <h2>Show Posts</h2> <br/><br/>
                <h1>Posts</h1>
                <input type="button" onClick={() => getPost()} value= "Show Posts"/>
            </div> 
        </main>    
          );
    }

export default Posts;