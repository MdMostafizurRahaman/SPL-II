// import React, { useState } from 'react';
// import { InboxOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import uploadImage from './Upload_2.png'; // Importing the background image

// const { Dragger } = Upload;

// const uploadProps = {
//   name: 'file',
//   multiple: true,
//   action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };

// const UploadComponent = () => (
//   <div style={{ backgroundImage: `url(${uploadImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//     <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
//       <Dragger {...uploadProps}>
//         <p className="ant-upload-drag-icon">
//           <InboxOutlined />
//         </p>
//         <p className="ant-upload-text" style={{ color: 'black' }}>Click or drag file to this area to upload</p>
//         <p className="ant-upload-hint" style={{ color: 'black' }}>
//           Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//           banned files.
//         </p>
//       </Dragger>
//       {/* Navigation links */}
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/login">Login</Link></li>
//         </ul>
//       </nav>
//     </div>
//   </div>
// );

// export default UploadComponent;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

export default function UploadComponent() {
  const [resume, setResume] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const submit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData();
    formData.append('email', email);
    formData.append('resume', resume);

    axios.post('http://localhost:3000/resume_upload', formData)
      .then(result => {
        console.log(result.data);
        if (result.data) {
          console.log("Success!!!!");
          navigate('/Stu_dashboard'); // Navigate to the student dashboard after successful upload
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form id="regForm" className="row g-3 needs-validation" onSubmit={submit}>
        <input
          required
          type="file"
          accept="application/pdf"
          name="resume" // Ensure the name matches the expected field
          className="form-control"
          id="resume"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <br />
        <input
          required
          type="email"
          name="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit" // Set button type to "submit"
          style={{ width: "400px", height: "100px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
