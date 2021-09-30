import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title,id} =props.post
    return (
        <div>
            <h1>title:{title}</h1>
            <Link to={`/post/${id}`}>post detail</Link>
        </div>
    );
};

export default Post;