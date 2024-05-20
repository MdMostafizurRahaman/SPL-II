const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs"); // Add bcrypt for password hashing

const multer = require("multer"); 
const StudentModel = require('./models/Student');
const IpocModel = require('./models/Ipoc');
const CompanyModel = require('./models/Company');
const nodemailer = require('nodemailer'); 
const path = require('path');
const fs = require('fs');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Student");

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
  });
  
  const upload = multer({ storage: storage });

// app.post("/forgot-password", async (req, res) => {
//     const { email } = req.body;
//     try {
//         const user = await StudentModel.findOne({ email });
//         if (user) {
//             // Generate OTP (you need to implement this logic)
//             const OTP = generateOTP(); // Implement this function to generate OTP

//             // Send OTP to the user's email
//             sendOTP(email, OTP); // Implement this function to send OTP via email

//             res.status(200).json("OTP sent to email");
//         } else {
//             res.status(404).json("User not found");
//         }
//     } catch (err) {
//         res.status(500).json(err.message);
//     }
// });

app.post("/forgot-password", upload.single('file'), async (req, res) => {
    const { email } = req.body;
    const file = req.file; // Uploaded file
    try {
        const user = await StudentModel.findOne({ email });
        if (user) {
            // Save file details in the database
            user.file = file.filename; // Assuming 'file' is the field in Student model to store file details
            await user.save();

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
function generateOTP(length = 6) {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


// Helper function to send OTP via email (you need to implement this logic)
function sendOTP(email, OTP) {
    // Implement logic to send OTP via email using nodemailer
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

app.post("/student_login", async (req, res) => {
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

app.post("/ipoc_login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await IpocModel.findOne({ email });
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

app.post("/company_login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await CompanyModel.findOne({ email });
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

app.post('/student_register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash password
        const student = await StudentModel.create({ ...req.body, password: hashedPassword });
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

app.post('/ipoc_register', async (req, res) => {
    try {
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash password
        const ipoc = await IpocModel.create({ ...req.body, password: hashedPassword });
        res.status(201).json(ipoc);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

app.post('/company_register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash password
        const company = await CompanyModel.create({ ...req.body, password: hashedPassword });
        res.status(201).json(company);
    } catch (err) {
        res.status(400).json(err.message);
    }
});



// CV upload
const storage2 = multer.diskStorage({
    destination: 'resumeFolder/',
    filename: (req, file, cb) => {
        const uniqueSuffix = req.body.email;
        const extension = path.extname(file.originalname);
        cb(null, uniqueSuffix + extension);
    },
});

const upload2 = multer({ 'storage': storage2 });

app.post('/resume_upload', upload2.single('resume'), (req, res) => {
    const imageFile = req.file;
    console.log(imageFile)
    res.status(201).json({message: "akbfjfkj"});
})

app.listen(3000, () => {
    console.log("Server is running");
});
