const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// API Endpoint for the contact form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real application, you would:
    // 1. Validate the input
    // 2. Send an email using nodemailer or a service like SendGrid
    // 3. Save to a database like MongoDB or PostgreSQL
    
    console.log(`New contact message received:`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Send a success response
    res.status(200).json({ success: true, message: "Message received successfully!" });
});

// Fallback route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`To see your portfolio, open a browser and go to http://localhost:${PORT}`);
});
