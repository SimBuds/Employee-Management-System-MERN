import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth

const Header = () => {
    const { isLoggedIn, logout } = useAuth(); // Use the useAuth hook

    return (
        <header>
            <nav>
                <a href="/">Home</a>
                {!isLoggedIn && <a href="/login">Login</a>}
                {!isLoggedIn && <a href="/signup">Signup</a>}
                {isLoggedIn && <a href="/employees">Employees</a>}
                {isLoggedIn && <button onClick={logout}>Logout</button>}
            </nav>
        </header>
    );
};

export default Header;
