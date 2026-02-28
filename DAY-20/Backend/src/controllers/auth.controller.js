const userModel =require('../models/user.model')
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')
 
 
async function registerController(req,res){
    const {username,email,password,bio,profileImage}=req.body;

    const isUserAreadyExist =await userModel.findOne({
        $or:[{email},
            {username}
        ]
    });
    if (isUserAreadyExist){
        return res.status(409).json({
            message:"User already exists" + (isUserAreadyExist.email ==
            email ? "Email already exists" : "username already exists")
        })
    }
   
    // const hash =crypto.createHash("sha256").update(password).digest("hex");

    const hash =await bcrypt.hash(password,10);

    const user =await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImage
    })

   
    const token =jwt.sign({
        id:user._id,
        email:user.email,
        username:user.username
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })

    
    res.cookie("token", token)
    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
    
}

async function loginController(req,res){
    const{email,username,password}=req.body;

    /**
     * username
     * password
     * 
     * email
     * password
     */

    /**
    {user:undefined, email:test@test.com, password:test
    }=req.body
     */
    const user =await userModel.findOne({
        $or:[
            {email:email},
            {username:username}
        ]
    })
    if (!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    // const hash =crypto.createHash("sha256").update(password).digest("hex");
    
    const isPasswordValid =await bcrypt.compare(password,user.password);
    if (!isPasswordValid){
        return res.status(401).json({
            message:"password invalid"
        })
    }
    const token =jwt.sign({
        id:user._id,
        email:user.email,
        username:user.username
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
    res.cookie("token", token)
    res.status(200).json({
        message:"User logged in successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

async function getMeController(req,res){
    const userId =req.user.id

    const user = await userModel.findById(userId)

    res.status(200).json({
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports ={
    registerController,
    loginController,
    getMeController
}