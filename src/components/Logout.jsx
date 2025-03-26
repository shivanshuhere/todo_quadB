import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice.js';

const Logout = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.auth.username);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
