import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red'
    }
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} to="/PNF">PNF</NavLink>
            <NavLink activeStyle={activeStyle} to="/friends">friend</NavLink>
        </nav>
    );
};

export default Header;