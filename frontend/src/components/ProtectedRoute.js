import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { isLoggedIn } = useAuth();

    return (
        <Route 
            {...rest} 
            render={(props) => 
                isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
            }
        />
    );
};

export default ProtectedRoute;
