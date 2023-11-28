// src/pages/SignupPage.js

import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
    const [user, setUser] = useState({ username: '', password: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/signup', user) // Update with your API endpoint
            .then(response => {
                // Handle signup success
            })
            .catch(error => {
                // Handle signup errors
            });
    };

    return (
        <div className="PageContent">
            <h2>Signup</h2>
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
}

export default SignupPage;
