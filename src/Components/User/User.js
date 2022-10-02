import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = (props) => {
    const {name, email, address, id} = props.props
    return (
        <div className='user'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Address: {address.street}, {address.city}.</p>
            <Link to={`${id}`}>
                <button className='btn'>More Info</button>
            </Link>
        </div>
    );
};

export default User;