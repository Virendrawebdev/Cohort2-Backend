import { Router } from "express";
import { registerUser } from "./src/controllers/auth.controller.js";
import { registerValidator } from "./src/validation/auth.validator.js";

const authRouter =Router()

/**
 * /api/auth/register 
 */
authRouter.post("/register",registerValidator,registerUser )



export default authRouter