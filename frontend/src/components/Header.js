import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth

const Header = () => {
    const { isLoggedIn, logout } = useAuth(); // Use the useAuth hook

    return (
        <header>
            <h1>My Company</h1>
            <nav>
                {!isLoggedIn && <a href="/login">Login</a>}
                {!isLoggedIn && <a href="/signup">Signup</a>}
                {isLoggedIn && <button onClick={logout}>Logout</button>}
            </nav>
        </header>
    );
};

export default Header;
