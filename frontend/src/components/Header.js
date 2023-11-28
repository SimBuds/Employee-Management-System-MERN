import React from 'react';

function Header() {
  return (
    <header>
        <nav className="header">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/employeeList">Employee List</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;