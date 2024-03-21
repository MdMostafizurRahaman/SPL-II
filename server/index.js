const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt"); // Add bcrypt for password hashing
const StudentModel = require('./models/Student');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Student");

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
