"use strict";

var express = require("express");

var router = express.Router();
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
router.get("/register", function (req, res) {
  res.render("register");
});
module.exports = router;