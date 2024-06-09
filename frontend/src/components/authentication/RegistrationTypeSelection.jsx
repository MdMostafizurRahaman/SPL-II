import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import 'tailwindcss/tailwind.css';

const { Option } = Select;

function RegistrationTypeSelection() {
    const [registrationType, setRegistrationType] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (value) => {
        setRegistrationType(value);
    };

    const handleProceed = () => {
        if (registrationType) {
            navigate(`/${registrationType}_register`);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-1/3">
                <h2 className="text-center mb-4">Choose Registration Type</h2>
                <Select
                    className="w-full"
                    placeholder="Select a registration type"
                    onChange={handleSelectChange}
                    size="large"
                >
                    <Option value="student">Student</Option>
                    <Option value="ipoc">IPOC</Option>
                    <Option value="company">Company</Option>
                </Select>
                <div className="mt-4">
                    <button
                        onClick={handleProceed}
                        className="btn btn-primary w-full rounded-0"
                        disabled={!registrationType}
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationTypeSelection;
