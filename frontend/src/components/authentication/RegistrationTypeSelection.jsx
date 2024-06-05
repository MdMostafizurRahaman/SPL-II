// RegistrationTypeSelection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationTypeSelection() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Choose Registration Type</h2>
                <div className="mb-3">
                    <Link to="/student_register" className="btn btn-primary w-100 rounded-0">
                        Student
                    </Link>
                </div>
                <div className="mb-3">
                    <Link to="/ipoc_register" className="btn btn-primary w-100 rounded-0">
                        IPOC
                    </Link>
                </div>
                <div className="mb-3">
                    <Link to="/company_register" className="btn btn-primary w-100 rounded-0">
                        Company
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegistrationTypeSelection;
