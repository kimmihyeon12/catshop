"use strict";

var express = require("express");

var router = express.Router();

var orderController = require("../controller/order.controller"); // page(화면) 보기


router.get("/", function (req, res) {
  console.log(req.session.userData);
  res.render("index", {
    userData: req.session.userData
  });
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
router.post("/order", orderController.getorderinfo);
module.exports = router;