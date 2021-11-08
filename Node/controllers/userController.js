const { responseDto ,errorDto }  = require('../utils/responseDto');
const user = require('../model/user');
const {createHashedPassword} = require('../config/encription')

//USER POST
exports.register = async (req, res)=>{
    console.log("== Register ==")
    try{
        const {password, salt} = await createHashedPassword(req.body.password)
        console.log("password : ", password)
        console.log("salt : ", salt)
        // let register = await user.register(req.body);
        responseDto(res, 200, register)
    }catch(err){
        errorDto(res, err)
    }
}

exports.getUser = async (req, res)=>{
    console.log("== GET USER ==")
    try{
        let users = await user.getUser(req, res);
        responseDto(res, 200, users)
    }catch(Error){
        errorDto(res, Error)
    }
}
