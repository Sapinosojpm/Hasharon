const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public'

// Connect to MongoDB Atlas
const mongoURI = "mongodb+srv://sapinosomille:johnpaul360@cluster0.3lelv.mongodb.net/signupHasharon?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log('Error:', err));

// Routes
app.use('/', authRoutes);

// Serve the Dashboard Page from the 'public/dashboard' folder
app.get('/dashboard', (req, res) => {
    const dashboardPath = path.join(__dirname, 'public', 'dashboard', 'dashboard.html');
    console.log('Serving file from:', dashboardPath);  // Log the path for debugging
    res.sendFile(dashboardPath); // Serve the dashboard.html from the 'public/dashboard' folder
});

// Example of a protected route (optional)
app.get('/protected-dashboard', (req, res) => {
    // Example of authentication check - replace with actual logic
    if (req.isAuthenticated()) {
        const protectedDashboardPath = path.join(__dirname, 'public', 'dashboard', 'dashboard.html');
        console.log('Serving protected dashboard from:', protectedDashboardPath); // Log the path for debugging
        res.sendFile(protectedDashboardPath);  // Serve the protected dashboard
    } else {
        res.redirect('/login');  // Redirect to login page if not authenticated
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
