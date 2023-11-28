// src/pages/LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/login', user) // Update with your API endpoint
            .then(response => {
                // Handle login success
            })
            .catch(error => {
                // Handle login errors
            });
    };

    return (
        <div className="PageContent">
            <h2>Login</h2>
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
}

export default LoginPage;
