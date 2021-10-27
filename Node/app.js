const express = require("express")
const path = require("path")

// express server 선언
const app = express();
const port = 3000;

//view 파일 설정
app.set("views", path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set("view engine", 'html')

// public
app.use("/public", express.static(__dirname+'/public'));

//json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우터 연결
const router = require("./routes/index");
app.use(router);

const Connection = require('./config/dbCon');
Connection();

app.listen(port, function(){
    console.log("서버 포트는 "+ port)
})