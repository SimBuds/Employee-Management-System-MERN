import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/login', user)
            .then(response => {
                // Handle login success (e.g., storing token, redirecting)
            })
            .catch(error => {
                // Handle login errors
            });
    };

    return (
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
    );
}

export default LoginForm;