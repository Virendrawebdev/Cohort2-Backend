import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI isnot defined in environemnt variables")
}
if (!process.env.JWT_SECRET){
    throw new Error("JWT_SECRET isnot defined in environemnt variables")
}

export const config ={
   MONGO_URI:process.env.MONGO_URI,
   JWT_SECRET:process.env.JWT_SECRET
}