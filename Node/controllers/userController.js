const { responseDto ,errorDto }  = require('../utils/responseDto');
const user = require('../model/user');

//USER POST
exports.register = async (req, res)=>{
    console.log("== Register ==")
    try{
        let register = await user.register(req.body);
        responseDto(res, 200, register)
    }catch(err){
        errorDto(res, err)
    }
}
