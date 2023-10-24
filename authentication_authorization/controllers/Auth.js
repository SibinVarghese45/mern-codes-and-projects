const bcrypt = require('bcrypt');
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config();

// signup handler
exports.signup = async (req, res) => {
    try{
        // get data
        const {name, email, password, role} = req.body;
        // check if user exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User ALready exists"
            })
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(e){
            return res.status(500).json({
                success: false,
                message: "Error in hashing Password"
            })
        }

        const user = await User.create({
            name, email, password:hashedPassword, role
        })

        return res.status(200).json({
            success: true,
            message: "User created successfully"
        })

    }catch(e){
        return res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.login = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email, !password){
            return res.status(400).json({
                success: false,
                message: "Please fill in details carefully"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not registered"
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        }

        // verify password and generate jwt token
        if(await bcrypt.compare(password, user.password)){
            // login passowrd match
            let token = jwt.sign(payload, 
                process.env.JWT_SECRET,
                {
                    expiresIn: "2h"
                });

                console.log(token)

                // user.token = token;
                // user.password = undefined;
                console.log(user)

                const options = {
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                }

                res.cookie('token', token, options).status(200).json({
                    success: true,
                    token,
                    user,
                    message: "user logged in successfully"
                })

        }else{
            // password not match
            return res.status(403).json({
                success: false,
                message: "Password incorrect"
            })
        }

    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            success: false,
            message: "Login failed"
        })
    }
}

