import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('/api/signup', user);
            navigate('/login'); // Redirect to login after signup
        } catch (error) {
            // Handle errors (show message to user)
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="form">
            <h2>Signup</h2>
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;
