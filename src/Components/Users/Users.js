import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData()
    return (
        <div className='users'>
            {
                users.map(user => <User key={user.id} props={user}></User>)
            }
        </div>
    );
};

export default Users;