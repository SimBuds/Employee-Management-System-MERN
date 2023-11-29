import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeListPage = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/employees');
                setEmployees(response.data);
            } catch (error) {
                setError('Failed to fetch employees.');
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="employee-list-page">
            <h2>Employee List</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.position}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeListPage;
