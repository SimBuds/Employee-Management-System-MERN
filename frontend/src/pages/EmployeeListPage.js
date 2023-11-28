import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('/api/employees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="EmployeeList">
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee._id}> {/* Assuming each employee has a unique _id */}
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;