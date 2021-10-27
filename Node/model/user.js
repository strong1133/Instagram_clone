const { Connection, ConnectionEnd, ExcuteQuery} = require('../config/dbCon');
const {createUser, SelectAllUser, Register}  = require('../model/query')


//POST USER
const register = async(req, res, err) =>{

    if(err){
        throw new Error(err);
    }

    let query = Register(req.userName , req.password, req.name)
    let result = await ExcuteQuery(query);

    // console.log(res)
    
    if(!result){
        throw new Error(result)
    }
    return result
}

module.exports = {"register" : register};