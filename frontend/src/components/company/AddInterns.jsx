import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findCompanyManagerById, addInterns } from '../../api/company.api';
import { Form, Input, DatePicker, Button, message } from 'antd';

const AddInterns = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const managerId = localStorage.getItem('userId');
    try {
      const res = await findCompanyManagerById(managerId); //this is hardcoded company manager id, need to get this when doing authentication
      const comId=res.company._id;

      const response = await addInterns(values, comId);
      console.log('Response:', response);
      navigate('/company-dashboard');
    } catch (error) {
      message.error('Failed to add intern.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      margin: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={{ textAlign: 'center' }}>Add Interns</h1>
        <Form initialValues={{ studentId: id }} onFinish={handleSubmit}>
          <Form.Item
            label='Student ID'
            name='studentId'
            rules={[
              { required: true, message: 'Please enter the student ID!' },
            ]}
          >
            <Input placeholder='Enter Student ID' />
          </Form.Item>
          <Form.Item
            label='Intern Start Date'
            name='startDate'
            rules={[
              { required: true, message: 'Please select the start date!' },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label='Intern End Date'
            name='endDate'
            rules={[
              { required: true, message: 'Please select the start date!' },
            ]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddInterns;