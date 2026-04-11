import axios from "axios";

const authapiinstance = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    wuithCredentials:true,
})

export async function register({email, contact, password, fullname}){

    const response  =await authapiinstance.post("/register",{
        email,
        contact,
        password,
        fullname,
        isSeller
    })
    return response.data
}