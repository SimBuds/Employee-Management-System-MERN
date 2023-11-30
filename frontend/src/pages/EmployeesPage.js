import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Fetch employees from the backend
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

    // Navigate to add employee form
    const navigateToAddEmployee = () => {
        navigate('/add-employee');
    };

    // Navigate to edit employee form
    const navigateToEditEmployee = (employeeId) => {
        navigate(`/edit-employee/${employeeId}`);
    };

    // Delete an employee
    const handleDelete = async (employeeId) => {
        try {
            await axios.delete(`http://localhost:5000/api/employees/${employeeId}`);
            setEmployees(employees.filter(emp => emp._id !== employeeId));
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div className="EmployeeList">
            <h2>Employee List</h2>
            <button onClick={navigateToAddEmployee}>Add New Employee</button>
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
                                    <button onClick={() => navigateToEditEmployee(employee._id)}>Edit</button>
                                    <button onClick={() => handleDelete(employee._id)}>Delete</button>
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