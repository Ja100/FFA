const User = require('../models/user');
const {hashPassword, comparePassword} = require ('../Helper/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('Test is working..!')
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body; //inputs from fields

        if(!name) {
            return res.json({
                error: 'Name is required'
            })
        };
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        }
        if(!email){
            return res.json({
                error: 'Email is required'
            })
        }
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        };

        const hashedPwd = await hashPassword(password)

        //creating the user in Database 
        const user = await User.create({
            name, 
            email, 
            password: hashedPwd
        })
        
        return res.json(user)
        
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!password){
            return res.json({
                error: 'Password is required'
            })
        }
        if(!email){
            return res.json({
                error: 'Email is required'
            })
        }
        
        const userExist = await User.findOne({email})
        if(!userExist) {
            return res.json({
                error: 'User not found with that email'
            })
        }

        const matchPwd = await comparePassword(password, userExist.password);
        if (matchPwd) {
            jwt.sign( 
                {email: userExist.email, id: userExist._id, name: userExist.name}, //data to transmit
                process.env.JWT_SECRET, //SECRET to be used
                {}, //an empty object
                (err, token) => {
                    if(err) throw err;
                    res.cookie('token', token).json(userExist) //setting up a cookie and output a token
                }
            ) 
        } 
        if(!matchPwd) {
            return res.json({
                error: 'Passwords not matched !'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, userExist) => {
            if(err) throw err;
            res.json(userExist)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}