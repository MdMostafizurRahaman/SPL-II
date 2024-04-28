import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from React Router
import uploadImage from './Upload_2.png'; // Importing the background image

const { Dragger } = Upload;

const uploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const UploadComponent = () => (
  <div style={{ backgroundImage: `url(${uploadImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text" style={{ color: 'black' }}>Click or drag file to this area to upload</p>
        <p className="ant-upload-hint" style={{ color: 'black' }}>
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
      {/* Navigation links */}
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default UploadComponent;
