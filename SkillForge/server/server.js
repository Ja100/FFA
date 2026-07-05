const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv').config();

const connectDB = require('./config/db')
connectDB();

const app = express();
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
);

//middleware
app.use(express.json());

app.use('/', require('./Routes/authRoutes'));

app.get('/', (req,res) => {
    res.send('Welcome to the SERVER SIDE.!')
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
});