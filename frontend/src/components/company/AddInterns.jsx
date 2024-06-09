import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addInterns } from '../../api/company.api';
import { Input, DatePicker, Button } from 'antd';

const AddInterns = () => {
    const [formData, setFormData] = useState({
        studentId: '',
        startDate: null, // Use null for initial state of startDate
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Fetch data or perform initialization based on the id parameter if needed
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDateChange = (date, dateString) => {
        setFormData({
            ...formData,
            startDate: dateString, // Use dateString for the selected date
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await addInterns(formData);
            setResponseMessage('Interns added successfully!');
            console.log('Form Data Submitted:', formData);
            console.log('Response:', response);
        } catch (error) {
            setResponseMessage('Failed to add interns.');
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
            backgroundColor: '#f0f2f5', // Adjust to Ant Design background color
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
        formGroup: {
            marginBottom: '20px',
        },
        label: {
            marginBottom: '8px',
            display: 'block',
            fontWeight: 'bold',
        },
        button: {
            width: '100%',
            marginTop: '10px',
        },
        responseMessage: {
            marginTop: '10px',
            textAlign: 'center',
            color: '#52c41a', // Adjust to Ant Design success color
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={{ textAlign: 'center' }}>Add Interns</h1>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="studentId" style={styles.label}>
                            Student ID:
                        </label>
                        <Input
                            id="studentId"
                            name="studentId"
                            value={id}
                            onChange={handleChange}
                            placeholder="Enter Student ID"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="startDate" style={styles.label}>
                            Start Date:
                        </label>
                        <DatePicker
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleDateChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSubmitting}
                        style={styles.button}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                    {responseMessage && (
                        <div style={styles.responseMessage}>{responseMessage}</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddInterns;
