import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, address, phone, website, id } = props.friend
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadious: '10px'
    }
    const url = `/friends/${id}`;
    return (
        <div style={friendStyle}>
            <h2>i am :{name} {id}</h2>
            <h5>class me:{phone}</h5>
            <p>visit me {website}</p>
            <p>address :{address.city}</p>
            <Link to ={url} > Vist me  </Link>
        </div>
    );
};

export default Friend;