"use strict";

var express = require("express");

var router = express.Router();

var userContoller = require("../controller/user.controller");
//login
router.get("/login", function (req, res) {
    res.render("login");
});
router.post("/login", function (req, res) {
    console.log(req.body);
});

//register
router.get("/registerform", function (req, res) {
    res.render("registerform");
});
router.post("/registerform", userContoller.register);
module.exports = router;