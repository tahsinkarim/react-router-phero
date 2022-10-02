import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserInfo.css';

const UserInfo = () => {
    const user = useLoaderData()
    const {name, email, phone, company, address } = user
    return (
        <div className='user-info'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Works at: {company.name}</p>
            <p>Address: {address.street}, {address.city}</p>
        </div>
    );
};

export default UserInfo;