const userModel =require('../models/user.model')
const crypto =require('crypto')
const jwt =require('jsonwebtoken')
 
 async function loginController(req,res){
    const{email,username,password}=req.body;

    /**
     * username
     * password
     * 
     * email
     * password
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
    const hash =crypto.createHash("sha256").update(password).digest("hex");
    
    const isPasswordValid =hash === user.password;
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
        },
        token:token
    })
}

async function registerController(req,res){
    const {username,email,password,bio,profileImage}=req.body;

    // const isUserExistbyEmail =await userModel.findOne({email});
    // if (isUserExistbyEmail){
    //     return res.status(409).json({
    //         message:"User with this email already exists"
    //     })
    // }

    // const isUserExistbyUsername =await userModel.findOne({username});
    // if (isUserExistbyUsername){
    //     return res.status(409).json({
    //         message:"User with this username already exists"
    //     })
    // } old code version
    // isUserAreadyExist variable is used to check if a user with the same email or username already exists
    //  in the database before allowing the registration of a new user. This is done to prevent duplicate entries
    //  and ensure that each user has a unique email and username in the system. 
    // The $or operator is used in the query to check for either condition (email or username) 
    // in a single database query, improving efficiency and reducing the number of queries needed 
    // to validate the uniqueness of the user's credentials.
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
   
    const hash =crypto.createHash("sha256").update(password).digest("hex");

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
        },
        token:token
    })
    
}

module.exports ={
    loginController,
    registerController
}