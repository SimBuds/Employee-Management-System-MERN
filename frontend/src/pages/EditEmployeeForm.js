import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployeeForm = () => {
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
                setEmployee(response.data);
            } catch (error) {
                console.error('Error fetching employee:', error);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/employees/${id}`, employee);
            setSuccessMessage('Employee updated successfully!');
            navigate('/employees');
        } catch (error) {
            console.error('Error updating employee:', error);
            setSuccessMessage('Failed to update employee.');
        }
    };

    return (
        <div>
            <h1>Edit Employee</h1>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={employee.firstName}
                    onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    value={employee.lastName}
                    onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    value={employee.email}
                    onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                    placeholder="Email"
                    required
                />
                <button type="submit">Update Employee</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default EditEmployeeForm;