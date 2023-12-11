const express = require('express');
const jwt = require('jsonwebtoken');
const  User  = require('../data/schemas/user');
const jwtSecret = process.env.JWT_SECRET;

const authRouter = express.Router();

authRouter.post('/register',(req,res) => {
    const email = req.body.email;
    const data = req.body;
    console.log(req.body)
    // * Make sure request has the email
    if(!email) {
        return res.status(400).json({ error: { register: "Email not recieved"}});
    }
    User.findOne({email: email})
    // * If the user is found, return an error because there is already a user registered
    .then((user) => {
        if (user) {
            return res.status(400).json({ error: { email: "Email already registered"}})
        }
        const newUser = new User({
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            role: data.role
          })
          
        newUser.save()
            .then((createdUser => {
                return res.status(201).json({
                    token: createdUser.generateJWT(), 
                    user: {
                        email: createdUser.email,
                        name: createdUser.name, 
                        id: createdUser._id,
                        role: createdUser.role
                    },
                })
            }))
            .catch((err) => {
                return res.status(500).json( { error: { firstName: "Error creating new User :("}})
            })
    })
    .catch((err) => {
        return res.status(500).json( { error: { firstName: "Error creating new User :("}})
    })
});


authRouter.post('/login', async (req,res) => {
    const { email, password } = req.body
    // * Validate, email and password were provided in the request
    if ( !email || !password) {
        return res.status(400).json( { error: { login: "Missing email or password"}})
    }
    User.findOne({ email })
    .then((foundUser) => {
        // * Validate user email is already registered
        if (!foundUser) {
            return res.status(400).json( { error: { email: "User not found, please Register"}})
        }
        // * Validate password with bcrypt library
         if (!foundUser.comparePassword(password)) {
       // if (foundUser.password !== password) {
            return res.status(400).json( { error: { password: "Invalid Password"}})
        }
        // * if everything is ok, return the new token and user data
        return res.status(200).json({
            token: foundUser.generateJWT(), 
            user: {
                 email: foundUser.email,
                 name: foundUser.name,
                 id: foundUser._id,
                 role: foundUser.role
            },
        })
    })
    .catch((err) => {
        return res.status(500).json( { error: { register: "Error Login in :(", error: err.message}})
    })
});
