import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice.js';
import { Button } from '@mui/material';
import { LogIn } from 'lucide-react';
const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        city: '',
    });
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (formData.username.trim() && formData.city.trim()) {
            dispatch(login(formData));
        }
    };

    return (
        <div className='app-container'>
            <h2>Login</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    className='add-task-input'
                    type="text"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    className='add-task-input'
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                <Button onClick={handleLogin}
                    variant="contained" endIcon={<LogIn />}>Login</Button>
            </div>
        </div>
    );
};

export default Login;
