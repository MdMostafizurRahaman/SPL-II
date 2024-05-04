import React, { useState } from 'react';
import axios from 'axios';
import './StudentDashboard.css';

function StudentDashboard() {
  const [cvFile, setCvFile] = useState(null);
  const [pictureFile, setPictureFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roll, setRoll] = useState('');
  const [address, setAddress] = useState('');
  const [skillsets, setSkillsets] = useState('');
  const [companyPreferences, setCompanyPreferences] = useState([]);

  const handleCvUpload = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handlePictureUpload = (event) => {
    setPictureFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('cv', cvFile);
    formData.append('picture', pictureFile);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('roll', roll);
    formData.append('address', address);
    formData.append('skillsets', skillsets);
    formData.append('companyPreferences', JSON.stringify(companyPreferences));

    try {
      await axios.post('http://localhost:3000/student-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating profile.');
    }
  };

  return (
    <div className="container">
      <h2>Student Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Roll:</label>
          <input type="text" value={roll} onChange={(e) => setRoll(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Skillsets:</label>
          <input type="text" value={skillsets} onChange={(e) => setSkillsets(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Upload CV:</label>
          <input type="file" onChange={handleCvUpload} required />
        </div>
        <div className="form-group">
          <label>Upload Picture:</label>
          <input type="file" onChange={handlePictureUpload} required />
        </div>
        <div className="form-group">
          <label>Company Preferences:</label>
          <input type="text" value={companyPreferences} onChange={(e) => setCompanyPreferences(e.target.value.split(','))} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentDashboard;