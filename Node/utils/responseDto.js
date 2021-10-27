const errorDto = (res, err) => {
    
    let ts = new Date();
    let code = !res ? err.code : res.status
    let message = err.message
    let data ={}
    console.error({'TimeStamped': ts, 'status': code, 'msg': message, 'result': data})
}


module.exports = { errorDto } ;