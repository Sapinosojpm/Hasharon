const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const path = require('path');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to MongoDB
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.send('Signup successful! <a href="/">Login here</a>');
    } catch (err) {
        res.status(400).send('Error: Username or Email already exists');
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user in MongoDB
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send('Invalid username or password');
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid username or password');
        }

        // Serve welcome page
        res.sendFile(path.join(__dirname,'../public/Homepage.html'));
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
