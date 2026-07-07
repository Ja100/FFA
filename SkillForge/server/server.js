const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

const connectDB = require('./config/db')
connectDB();

const app = express();
const corsOptions = {
    origin: [
        'http://localhost:5173', // for local development
        'https://ffa-navy.vercel.app/'], // for vercel
        credentials: true, //For passing cookies / tokens when needed
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded( {extended: false}))

app.use('/', require('./Routes/authRoutes'));

app.get('/', (req,res) => {
    res.send('Welcome to the SERVER SIDE.!')
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
});