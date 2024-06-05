import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Ipoc_signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registrationType, setRegistrationType] = useState("student"); 
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handlesSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            axios.post('http://localhost:3000/ipoc_register', { name, email, password })
                .then(result => {
                    console.log(result.data);
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Ipoc Register</h2>
                <form onSubmit={handlesSubmit}>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
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
