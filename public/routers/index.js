"use strict";

const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("index");
});
router.get("/dog", (req, res)=>{
    res.render("dog");
});
router.get("/cat", (req, res)=>{
    res.render("cat");
});
router.get("/login", (req, res)=>{
    res.render("login");
});

router.post("/login", (req, res)=>{
   console.log(req.body);
});


router.get("/register", (req, res)=>{
    res.render("register");
});
router.get("/sale", (req, res)=>{
    res.render("sale");
});

router.get("/registerform", (req, res)=>{
    res.render("registerform");
});
module.exports = router;

