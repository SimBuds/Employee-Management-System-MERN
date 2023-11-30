import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="PageContent">
            <h2>404 - Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFoundPage;