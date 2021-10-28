const { Connection, ConnectionEnd, ExcuteQuery} = require('../config/dbCon');
const {createUser, SelectAllUser, Register}  = require('../model/query')


//POST USER
const register = async(req, res, err) =>{
    if(err){
        throw new Error(err);
    }
    let query = Register(req.userName , req.password, req.name)
    await ExcuteQuery(query)
    console.log();
 
}

//GET USER
const getUser = async(req, res, err) =>{
    if(err){
        throw new Error(err);
    }
    let query = SelectAllUser;
    let result = await ExcuteQuery(query)
    // console.log(result);
 
}

module.exports = {
    "register" : register,
    "getUser" : getUser,

};