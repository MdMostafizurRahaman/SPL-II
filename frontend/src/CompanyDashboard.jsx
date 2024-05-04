import React, { useState } from 'react';
import axios from 'axios';
import './CompanyDashboard.css';

function CompanyDashboard() {
  const [companyName, setCompanyName] = useState('');
  const [internCount, setInternCount] = useState('');
  const [preferenceList, setPreferenceList] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    // Example:
    const data = {
      companyName: companyName,
      internCount: internCount,
      preferenceList: preferenceList.split(',')
    };
    axios.post('http://localhost:3000/company-internship', data)
      .then(response => {
        alert('Internship details submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting internship details:', error);
        alert('An error occurred while submitting internship details.');
      });
  };

  return (
    <div className="container">
      <h2>Company Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Number of Interns:</label>
          <input type="number" value={internCount} onChange={(e) => setInternCount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Preference List (Student IDs separated by comma):</label>
          <input type="text" value={preferenceList} onChange={(e) => setPreferenceList(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CompanyDashboard;