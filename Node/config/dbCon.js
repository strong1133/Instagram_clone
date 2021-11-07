const mysql = require('mysql');
const { errorDto, errorResponseDto }  = require('../utils/responseDto');
const {createUser} = require('../model/query')

// DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'strong1133',
    password: 'djaak455',
    database: 'seokblog'
});

// DB 접속
const Connection = async (res) =>{
    await conn.connect(function(err){
        if(err) return errorDto(res, err)
        console.log("DB 연결 성공")
    })
}

// 쿼리 실행
const ExcuteQuery = async (req, res) =>{
    return new Promise((resolve, reject)=>{
        conn.query(req, (err, row)=>{
            if (err){
                console.log("에러발생!")
         
                reject(err)
            }else{
                console.log("쿼리 성공")

                resolve(row);
            }
        })
    })
}

// DB 접속 종료
const ConnectionEnd = async (res) => {
    await conn.end(function(err){
        if(err) return errorDto(res, err)
        console.log("DB 연결 종료 성공")
    })
}

module.exports = { Connection, ConnectionEnd , ExcuteQuery} ;

