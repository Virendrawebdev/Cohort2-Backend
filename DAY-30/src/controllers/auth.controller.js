export async function registerUser(req, res, next){
   try{
    throw new Error("user already exists, with same email");
   }catch(err){
    err.status =409
    next(err)
   }
}