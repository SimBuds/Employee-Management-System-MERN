import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('/api/login', user);
            response.data && 
            login(); // Update auth state
            navigate('/employees'); // Redirect after login
        } catch (error) {
            // Handle errors (show message to user)
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
