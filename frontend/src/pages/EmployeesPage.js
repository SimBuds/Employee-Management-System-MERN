import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddEmployeeForm from './AddEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch employees.');
            }
        };

        fetchEmployees();
    }, []);

    const handleEmployeeDeleted = (deletedEmployee) => {
        setEmployees(employees.filter(emp => emp._id !== deletedEmployee._id));
    };

    return (
        <div className="EmployeeList">
            <h2>Employee List</h2>
            <button onClick={AddEmployeeForm}>Add New Employee</button>
            {error && <p>{error}</p>}
            {employees.length === 0 && !error && <p>No employees found.</p>}
            {employees.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee._id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={EditEmployeeForm}>Edit</button>
                                    <button onClick={handleEmployeeDeleted}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
};

export default EmployeesPage;