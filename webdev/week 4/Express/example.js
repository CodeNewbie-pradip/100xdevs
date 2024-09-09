const express = require('express');
const app = express();

// Middleware to serve static files
app.use(express.static('public'));

// Route for the home page
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

// Route for the about page
app.get('/about', (req, res) => {
    res.send('About Us');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
