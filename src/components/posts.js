import React, {useState} from 'react';
import Axios from 'axios';


function renderPosts() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [author, setAuthor] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    const [editPosts, setEditPosts] = useState([]);


    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJjYzQ1MDRmZGM1MDAwMTcxYTJlY2MiLCJ1c2VybmFtZSI6ImhleXRoZXJlMSIsImlhdCI6MTYyMjk4Mzc2MH0.3f_xMXOTADsFp83nvJ4HqvsGzlEQCdIddPyAfXHqWCw'

    // Axios.interceptors.request.use(
    //     config => {
    //       config.headers.authorization = `Bearer ${accessToken}`;
    //       return config;
    //     },
    //     error => {
    //       return Promise.reject(error);
    //     }
    //   );

    const userPost = {
        title: title,
        description: description,
        price: price,
        author: author,
        location: location,
        willDeliver: willDeliver,
    }

    // console.log('Title: ', title)
    // console.log('Description: ', description)
    // console.log('Price: ', price)
    // console.log('Author: ', author)
    // console.log('Location: ', location)
    // console.log('willDeliver: ', willDeliver)

 
    // title, description, price, author.username, location, willDeliver

    // const addPost = async () => {
    //         localStorage.getItem('token');
    //         let response = await Axios.post("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts", userPost, axiosConfig)
    //         console.log('Add Post Request: ', response);

    //         console.log('userPosts: ', userPost)
    // }

    const addPost = async () => {
        localStorage.getItem('token');
        let response = await fetch("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts", 
        {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                post: userPost
            })
        })

        const data = await response.json()
        console.log('Data: ', data)
        return data
}

    // Unfinished Stuff:
    // editPost()
    // deletePost()
    // Could not finish editPost() because the id kept being undefined 
    // in the fetch link API so I couldn't move forward

    const editPost = async () => {
        localStorage.getItem('token');

        let res = await fetch(`https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts/`, 
        {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    })
    
        // Could not get the id as it kept being undefined
        const data = await res.json()
        const id = data.data.posts

        setEditPosts(id);
        console.log('data: ', data)
        console.log('id: ', id)
        console.log('editPosts: ', editPosts)

        let response = await fetch(`https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts/${id}`, 
        {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            post: userPost
        })
    })
        // const data = await response.json()
        // console.log('Edit postData: ', data)

        // const id = data.data.posts._id
        // console.log('_id: ', id)
}

    const getPost = async () => {
            localStorage.getItem('token');
            let res = await Axios.get("https://strangers-things.herokuapp.com/api/2104-uic-web-ft/posts") 
            console.log('Response Object: ', res)

            const results = res.data.data.posts
            console.log('Posts: ', results)

            setPosts(results);
            console.log('Here', posts);
        }
  
    return (
        <main>
            <div className= "Post Results"> 
                <form> 
                <label htmlFor="header-search">
                    <br></br>
                    <span className="visually-hidden">Create Posts: &nbsp; </span>
                </label>
                    <br></br>
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Post Title"
                        name="title" 
                        onChange ={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Post Description"
                        name="description" 
                        onChange ={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Post Price"
                        name="price"
                        onChange ={(e) => {
                            setPrice(e.target.value);
                        }} 
                    />
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Post Author"
                        name="author" 
                        onChange ={(e) => {
                            setAuthor(e.target.value);
                        }}
                    />
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Post Location"
                        name="location" 
                        onChange ={(e) => {
                            setLocation(e.target.value);
                        }}
                    />
                    <br></br>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="willDeliver: true or false"
                        name="willDeliver" 
                        onChange ={(e) => {
                            setWillDeliver(e.target.value);
                        }}
                    />
                    <br></br>
                    <br></br>
                    <input type="button" onClick={() => addPost()} value= "Add Posts"/>
                    <input type="button" onClick={() => editPost()} value= "Edit Posts"/>
                </form> 
                <br/><br/>
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
                        <br></br>
                    </div>
                ))}
                <input type="button" onClick={() => getPost()} value= "Show Posts"/>
            </div> 
        </main>    
          );
    }


export default renderPosts;