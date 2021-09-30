import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [posts,setPost] =useState([])

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>res.json())
       .then(data=>setPost(data))
    },[])
    return (
        <div>
            {
                posts.map(post=><Post
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;