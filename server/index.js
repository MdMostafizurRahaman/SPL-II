const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Add bcrypt for password hashing
const StudentModel = require('./models/Student');
const nodemailer = require('nodemailer'); 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Student");

app.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await StudentModel.findOne({ email });
        if (user) {
            // Generate OTP (you need to implement this logic)
            const OTP = generateOTP(); // Implement this function to generate OTP

            // Send OTP to the user's email
            sendOTP(email, OTP); // Implement this function to send OTP via email

            res.status(200).json("OTP sent to email");
        } else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// Helper function to generate OTP (you need to implement this logic)
function generateOTP() {
    // Implement logic to generate OTP (e.g., using a random number generator)
}

// Helper function to send OTP via email (you need to implement this logic)
function sendOTP(email, OTP) {
    // Implement logic to send OTP via email using nodemailer
    // Example:
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Enter your email address
            pass: 'your-password' // Enter your email password or app-specific password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${OTP}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await StudentModel.findOne({ email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.status(200).json("Success");
            } else {
                res.status(401).json("Invalid email or password");
            }
        } else {
            res.status(404).json("Invalid user");
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash password
        const student = await StudentModel.create({ ...req.body, password: hashedPassword });
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server is running");
});
