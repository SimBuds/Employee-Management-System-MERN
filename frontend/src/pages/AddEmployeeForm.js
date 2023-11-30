import React, { useState } from 'react';
import axios from 'axios';

const AddEmployeeForm = ({ onEmployeeAdded }) => {
    const [newEmployee, setNewEmployee] = useState({ firstName: '', lastName: '', email: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/employees', newEmployee);
            onEmployeeAdded(response.data.employee); // Notify the parent component
            setNewEmployee({ firstName: '', lastName: '', email: '' }); // Reset form
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={newEmployee.firstName}
                onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
                placeholder="First Name"
            />
            <input
                type="text"
                value={newEmployee.lastName}
                onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
                placeholder="Last Name"
            />
            <input
                type="email"
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                placeholder="Email"
            />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployeeForm;