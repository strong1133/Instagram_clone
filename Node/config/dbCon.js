const mysql = require('mysql');
const { errorDto }  = require('../utils/responseDto');

// DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'strong1133',
    password: '12343',
    database: 'test01'
});

// DB 접속
const Connection = async (res) =>{
    await conn.connect(function(err){
        if(err) return errorDto(res, err)
        console.log("DB 연결 성공")
    })

}

// DB 접속 종료
const ConnectionEnd = async (res) => {
    await conn.end(function(err){
        if(err) return errorDto(res, err)
        console.log("DB 연결 종료 성공")
    })
}

module.exports = { Connection, ConnectionEnd } ;

