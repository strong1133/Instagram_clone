const { Connection, ConnectionEnd, ExcuteQuery} = require('../config/dbCon');
const {createUser, SelectAllUser, Register}  = require('../model/query')


//POST USER
const register = async(req, res, err) =>{
    if(err){
        throw new Error(err);
    }
    let query = Register(req.userName , req.password, req.name)
    await ExcuteQuery(query, (err, result) =>{
        console.log(result.insertId)
    })
    console.log();
 
}

//GET USER
const getUser = async(req, res, err) =>{
    let query = SelectAllUser;
    let data = await ExcuteQuery(query);
    if (data=== Error){
        console.log(data)
        return data;
    }else{
        throw new Error(data)
    }
    
    
 
}

module.exports = {
    "register" : register,
    "getUser" : getUser,

};