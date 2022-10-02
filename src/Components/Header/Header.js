import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-links'>
            <Link to='/home'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;