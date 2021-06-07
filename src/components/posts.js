import React, {useState} from 'react';
import Axios from 'axios';



function renderPosts() {
    const [posts, setPosts] = useState([]);

    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJjYzQ1MDRmZGM1MDAwMTcxYTJlY2MiLCJ1c2VybmFtZSI6ImhleXRoZXJlMSIsImlhdCI6MTYyMjk4Mzc2MH0.3f_xMXOTADsFp83nvJ4HqvsGzlEQCdIddPyAfXHqWCw'

    // Axios.interceptors.request.use(
    //     config => {
    //       config.headers.authorization = `Bearer ${accessToken}`;
    //       return config;
    //     },
    //     error => {
    //       return Promise.reject(error);
    //     }
    //   );
 
    const getPost = async () => {
            localStorage.getItem('token');
            let res = await Axios.get("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts") 
            console.log('Response Object: ', res)

            const results = res.data.data.posts
            console.log('Posts: ', results)

            setPosts(results);
            console.log('Here', posts);
        }

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
    
    return (
        <main>
            <div className= "Post Results"> 
                <form action='/posts' method="get"> 
                <label htmlFor="header-search">
                    <br></br>
                    <span className="visually-hidden">Create Posts: &nbsp; </span>
                </label>
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Create Posts Here"
                        name="post" 
                    />
                <button type="submit">Add Post</button></form> <br/><br/>
            </div>

            <div>
                {posts.map((post, idx) => (
                   <div key={idx}> 
                        <h3>Title: {post.title}</h3>
                        <h3>Description: {post.description}</h3>
                        <br></br>
                        <p> Price: {post.price}</p>
                        <p> Author: {post.author.username}</p>
                        <p> Location: {post.location}</p>
                        <p> WillDeliver: {post.willDeliver}</p>
                    </div>
                ))}
                <input type="button" onClick={() => getPost()} value= "Show Posts"/>
            </div> 
        </main>    
          );
    }


export default renderPosts;