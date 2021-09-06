"use strict";

var express = require("express");

var router = express.Router();

var userContoller = require("../controller/user.controller"); //login


router.get("/login", function (req, res) {
  if (req.session.userData) {
    console.log("유저데이터 있음");
  }

  res.render("login");
});
router.post("/login", userContoller.login);
router.get("/logout", function (req, res) {
  req.session.destroy(function () {
    res.redirect("/");
  });
}); //register

router.get("/registerform", function (req, res) {
  res.render("registerform");
});
router.post("/registerform", userContoller.register); //check

router.get("/checkId/:id", userContoller.checkId);
router.get("/checkphone/:phone", userContoller.checkPhone);
router.get("/checkemail/:email", userContoller.checkEmail);
module.exports = router;