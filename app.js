"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const pageRouter = require("./src/routers");
const userRouter = require("./src/routers/user.router");
const bodyParser = require("body-parser");
const PORT = 3000; 

//database
const mysql = require('mysql');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: process.env.DB_MYSQL_HOST,
    port: process.env.DB_MYSQL_POST,
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PW,
    database: process.env.DB_MYSQL_DB_NAME
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속
var sql = "select * from user";

connection.query(sql, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});


//morgan
var logger = require('morgan');
app.use(logger('dev'));
//? ejs 타입의 템플릿 앤진 사용 및 view, static 경로 설정
app.set("views", path.resolve(__dirname, "./public/views"));
app.set("view engine" , "ejs");
app.use(express.static(path.resolve(__dirname, "./public/static")));
//? Use json : req 객체에서 json 타입의 body 받기
app.use(express.json());
//? Use form-urlencoded : req 객체에서 x-www-form-urlencoded 타입의 body 받기
app.use(express.urlencoded({
    extended: true,
}));
app.use(userRouter);
app.use(pageRouter);


app.listen(PORT, () => console.log(`server is running on : ${PORT}`));