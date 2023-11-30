import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true' // Retrieve the logged-in state from localStorage
    );

    const login = () => {
        localStorage.setItem('isLoggedIn', 'true'); // Set the state in localStorage
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('isLoggedIn'); // Remove the state from localStorage
        setIsLoggedIn(false);
    };

    useEffect(() => {
        // Optional: Sync login state when it changes in other tabs
        const handleStorageChange = () => {
            setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);