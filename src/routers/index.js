"use strict";

const express = require("express");
const router = express.Router();

// page(화면) 보기
router.get("/", (req, res)=>{
    res.render("index");
});
router.get("/dog", (req, res)=>{
    res.render("dog");
});
router.get("/cat", (req, res)=>{
    res.render("cat");
});
router.get("/sale", (req, res)=>{
    res.render("sale");
});
router.get("/product/:product_id", function (req, res) {
    res.render("product");
});
router.get("/register", function (req, res) {
    res.render("register");
});
router.get("/order", function (req, res) {
    res.render("order");
});

module.exports = router;

