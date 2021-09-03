"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const pageRouter = require("./src/routers");
const userRouter = require("./src/routers/user.router");
const productRouter = require("./src/routers/product.router");
const bodyParser = require("body-parser");
const session = require('express-session');

const PORT = 3000; 


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
app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(userRouter);
app.use(pageRouter);
app.use(productRouter);

app.listen(PORT, () => console.log(`server is running on : ${PORT}`));