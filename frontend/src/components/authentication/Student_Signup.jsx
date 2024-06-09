import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { studentSignUp } from "../../api/authentication.api";

function StudentSignup() {
    const { type } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roll, setRoll] = useState("");
    const [session, setSession] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        const bsseEmailPattern = /^bsse\d+@iit.du.ac.bd$/;

        if (!name) newErrors.name = "Name is required.";
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!bsseEmailPattern.test(email)) {
            newErrors.email = "Email must be a valid BSSE email (e.g., bsse1316@iit.du.ac.bd).";
        }
        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }
        if (!roll) newErrors.roll = "Roll is required.";
        if (!session) newErrors.session = "Session is required.";
        if (!cgpa) newErrors.cgpa = "CGPA is required.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const data = {
                name,
                email,
                password,
                roll,
                session,
                cgpa
            };
            
            try {
                const response = await studentSignUp(data);
                console.log(response);
                navigate('/login'); // Redirect to login page after successful registration
            } catch (err) {
                console.error(err);
                setErrors({ api: "Failed to register. Please try again." });
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2> Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roll">
                            <strong>Roll</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Roll"
                            autoComplete="off"
                            name="roll"
                            className="form-control rounded-0"
                            onChange={(e) => setRoll(e.target.value)}
                        />
                        {errors.roll && <div className="text-danger">{errors.roll}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="session">
                            <strong>Session</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Session"
                            autoComplete="off"
                            name="session"
                            className="form-control rounded-0"
                            onChange={(e) => setSession(e.target.value)}
                        />
                        {errors.session && <div className="text-danger">{errors.session}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cgpa">
                            <strong>CGPA</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter CGPA"
                            autoComplete="off"
                            name="cgpa"
                            className="form-control rounded-0"
                            onChange={(e) => setCgpa(e.target.value)}
                        />
                        {errors.cgpa && <div className="text-danger">{errors.cgpa}</div>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                {errors.api && <div className="text-danger mt-3">{errors.api}</div>}
                <p>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
                <Link to="/forgot-password" className="btn btn-link">
                    Forgot Password?
                </Link>
            </div>
        </div>
    );
}

export default StudentSignup;
