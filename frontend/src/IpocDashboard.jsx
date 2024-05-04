import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IpocDashboard.css';

function IpocDashboard() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data of IPOC members
    // Example:
    axios.get('http://localhost:3000/ipoc-members')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Error fetching IPOC members:', error);
      });

    // Fetch data of students with CVs and skillsets uploaded
    // Example:
    axios.get('http://localhost:3000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    // Example:
    const data = {
      name: name,
      address: address
    };
    axios.post('http://localhost:3000/ipoc-profile', data)
      .then(response => {
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        alert('An error occurred while updating profile.');
      });
  };

  return (
    <div className="container">
      <h2>IPOC Dashboard</h2>
      <div className="member-info">
        <h3>Member Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="student-info">
        <h3>Student Information</h3>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <p>Name: {student.name}</p>
              <p>CV: <a href={student.cvUrl} target="_blank" rel="noopener noreferrer">Download</a></p>
              <p>Skillset: {student.skillset}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IpocDashboard;