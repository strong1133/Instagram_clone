const mysql = require('mysql');



const Connection = async () =>{

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'strong1133',
        password: '1234',
        database: 'test01'
    });

    await conn.connect(function(err){
        if(err) return console.error("연결실패 사유 : ", err.message)
        
        console.log("연결 성공")
    })
   
}

module.exports = Connection;

