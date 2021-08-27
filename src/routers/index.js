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
router.get("/sale", (req, res)=>{
    res.render("sale");
});
router.get("/product", function (req, res) {
    res.render("product");
  });
router.get("/register", function (req, res) {
    res.render("register");
  });

module.exports = router;

