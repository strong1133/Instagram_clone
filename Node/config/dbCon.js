const mysql = require('mysql');

// DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'strong1133',
    password: '1234',
    database: 'test01'
});

// DB 접속
const Connection = async () =>{
    await conn.connect(function(err){
        if(err) return console.error("연결실패 사유 : ", err.message)
        console.log("연결 성공")
    })

}

// DB 접속 종료
const ConnectionEnd = async () => {
    await conn.end(function(err){
        if(err) return console.error("연결 종료 실패 사유 : ", err.message)
        console.log("연결 종료 성공")
    })
}

module.exports = { Connection, ConnectionEnd } ;

