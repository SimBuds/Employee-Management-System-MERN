import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = () => {
    const [newEmployee, setNewEmployee] = useState({ firstName: '', lastName: '', email: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/employees', newEmployee);
            setSuccessMessage('Employee added successfully!');
            navigate('/employees'); // Navigate to the employee list after successful addition
        } catch (error) {
            console.error('Error adding employee:', error);
            setSuccessMessage('Failed to add employee.'); // Display error message
        }
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newEmployee.firstName}
                    onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    value={newEmployee.lastName}
                    onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    placeholder="Email"
                    required
                />
                <button type="submit">Add Employee</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default AddEmployeeForm;