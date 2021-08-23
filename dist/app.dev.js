"use strict";

require("dotenv").config();

var express = require("express");

var app = express();

var path = require("path");

var pageRouter = require("./src/routers");

var userRouter = require("./src/routers/user.router");

var bodyParser = require("body-parser");

var PORT = 3000; //morgan

var logger = require('morgan');

app.use(logger('dev')); //? ejs 타입의 템플릿 앤진 사용 및 view, static 경로 설정

app.set("views", path.resolve(__dirname, "./public/views"));
app.set("view engine", "ejs");
app.use(express["static"](path.resolve(__dirname, "./public/static"))); //? Use json : req 객체에서 json 타입의 body 받기

app.use(express.json()); //? Use form-urlencoded : req 객체에서 x-www-form-urlencoded 타입의 body 받기

app.use(express.urlencoded({
  extended: true
}));
app.use(userRouter);
app.use(pageRouter);
app.listen(PORT, function () {
  return console.log("server is running on : ".concat(PORT));
});