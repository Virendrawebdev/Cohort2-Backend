/*app.js k file alwa api created karne k liye Register api created in this file */

const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const authRouter = express.Router();
const crpto = require('crypto');
/*
  POST /api/auth/register
 */

authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlresdyExists = await userModel.findOne({email})
    if(isUserAlresdyExists){
        return res.status(409).json({
            message: 'User already exists with this email'
        })
    }

    const hash =crpto.createHash("md5").update(password).digest("hex");
   const user= await userModel.create({
    name, email, password:hash
  });

  const token = jwt.sign({
    id:user._id,
    email:user.email
    }, process.env.JWT_SECRET)
    res.cookie('jwt_token', token)
   res.status(201).json({
    message: 'User registered successfully',
    user,
    token
   });
})

/*
POST /api/auth/login
 */
authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordMatched = user.password === crpto.createHash("md5").update(password).digest("hex");
    if(!isPasswordMatched){
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({
        id:user._id,
        email:user.email
    }, process.env.JWT_SECRET)
    res.cookie('jwt_token', token)
    res.status(200).json({
        message: 'Login successful',
        user,
        token
    })
})
module.exports = authRouter;