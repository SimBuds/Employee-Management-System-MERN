import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await axios.post('http://localhost:5000/api/user/login', user);
            login(); // Update auth state
            navigate('/employees'); // Redirect after login
        } catch (error) {
            if (error.response && error.response.data) {
                // Display server-provided error message
                setError(error.response.data.message);
            } else {
                // Generic error message for other types of errors
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="Form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        maxLength="100"
                    />
                </label>
                <label> Password:
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        maxLength="100"
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
