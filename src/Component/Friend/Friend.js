import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, address, phone, website, id } = props.friend
    const history =useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadious: '10px'
    }
    const url = `/friends/${id}`;

    const handleFriendClick = () => {
      history.push(`/home/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>i am :{name} {id}</h2>
            <h5>class me:{phone}</h5>
            <p>visit me {website}</p>
            <p>address :{address.city}</p>
            <Link to={url}> Vist me</Link>
            <br></br>
            <Link to={url}><button>Visit me</button></Link>
            <button onClick={handleFriendClick} >visit me 2</button>
        </div>
    );
};

export default Friend;