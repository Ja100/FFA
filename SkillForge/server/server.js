const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Cleanly load environment variables early

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Database Connection
const connectDB = require('./config/db');
connectDB();

// 2. CORS Configuration (Fixed trailing slash typo here!)
const corsOptions = {
    origin: [
        'http://localhost:5173',          // Local development frontend
        'https://ffa-navy.vercel.app'     // REMOVED the trailing slash here!
    ], 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Expanded standard methods
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// 3. Request Parsers Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// 4. Application Routes
app.use('/', require('./Routes/authRoutes'));

// 5. Root Fallback Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the SERVER SIDE.!');
});

// 6. Server Activation
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});