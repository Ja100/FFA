const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db')
connectDB();

const app = express();
app.use(
    cors({
        origin: ['http://localhost:5173', 'https://ja100.github.io'],
        credentials: true
    })
);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded( {extended: false}))

app.use('/', require('./Routes/authRoutes'));

app.get('/', (req,res) => {
    res.send('Welcome to the SERVER SIDE.!')
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
});