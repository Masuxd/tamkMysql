import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch departments
    axios.get('http://localhost:3000/departments')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the departments!', error);
      });

    // Fetch employees
    axios.get('http://localhost:3000/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {departments.map(department => (
          <li key={department.department_id}>{department.name}</li>
        ))}
      </ul>

      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.fname} {employee.lname} - {employee.salary}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
