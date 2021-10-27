const errorDto = (res, err) => {
    let ts = new Date();
    let code = !res ? err.code : res.status
    let message = err.message
    let data ={}
    console.error({'TimeStamped': ts, 'status': code, 'msg': message, 'result': data})
}


const errorResponseDto = (res, code, errMsg) =>{
    let ts= new Date()
    console.log(res)
    res.status(code).json({
        TimeStamped: ts,
        status: code, 
        errMsg: errMsg
    })
    
}

const responseDto = (res, code, data) =>{
    let ts = new Date();

    res.status(code).json({
        'TimeStamped': ts,
        'status': code,
        'msg': 'SUCCESS',
        'result': data
    })
}


module.exports = { errorDto, responseDto, errorResponseDto} ;