import { body, validationResult } from "express-validator";

const validate =(req, res, next) =>{
            const errors =validationResult(req)

            if(errors.isEmpty()){
              return  next()
            }

            res.status(400).json({
                errors:errors.array()
            })
        }

export const registerValidator = [
        body("username").isString().withMessage("username should be string"),
        body("email").isEmail().withMessage("email should be valid email address"),
        body("password").custom((value)=> {
            if(value.length < 6){
                throw new Error ("Password should be atlest 6 character long")
            }
            const passwordRegex =/^(?=.*[A-Z])(?=.*\d).+$/
            if(!passwordRegex.test(value)){
                throw new Error("password should contain at least one  uppercase letter and one number")
            }
            return true
        }).withMessage("password should be atleat 6 characters long and contain at least one uppercase and one number"),
        validate

    ]