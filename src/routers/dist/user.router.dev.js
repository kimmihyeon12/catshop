"use strict";

var express = require("express");

var router = express.Router();

var userContoller = require("../controller/user.controller"); //login


router.get("/login", function (req, res) {
  res.render("login");
});
router.post("/login", userContoller.login); //register

router.get("/registerform", function (req, res) {
  res.render("registerform");
});
router.post("/registerform", userContoller.register); //check

router.get("/checkId/:id", userContoller.checkId);
router.get("/checkphone/:phone", userContoller.checkPhone);
module.exports = router;