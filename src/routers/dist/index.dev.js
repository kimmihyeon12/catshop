"use strict";

var express = require("express");

var router = express.Router(); // page(화면) 보기

router.get("/", function (req, res) {
  res.render("index");
});
router.get("/dog", function (req, res) {
  res.render("dog");
});
router.get("/cat", function (req, res) {
  res.render("cat");
});
router.get("/sale", function (req, res) {
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