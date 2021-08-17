const express = require("express");
const app = express();
const path = require("path");

//? ejs 타입의 템플릿 앤진 사용 및 view, static 경로 설정
app.set("views", path.resolve(__dirname, "./public/views"));
app.set("view engine" , "ejs");
app.use(express.static(path.resolve(__dirname, "./public/static")));


app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/dog", (req, res)=>{
    res.render("dog");
});
app.get("/cat", (req, res)=>{
    res.render("cat");
});
app.get("/login", (req, res)=>{
    res.render("login");
});
app.get("/register", (req, res)=>{
    res.render("register");
});
app.get("/sale", (req, res)=>{
    res.render("sale");
});

const PORT = 3000; 
app.listen(PORT, () => console.log(`server is running on : ${PORT}`));