/*app.js k file alwa api created karne k liye Register api created in this file */

const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const authRouter = express.Router();
/*
  POST /api/auth/register
 */

authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlresdyExists = await userModel.findOne({email})
    if(isUserAlresdyExists){
        return res.status(400).json({
            message: 'User already exists with this email'
        })
    }
   const user= await userModel.create({
    name, email, password
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
module.exports = authRouter;