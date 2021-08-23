"use strict";

const express = require("express");
const router = express.Router();
const userContoller = require("../controller/user.controller");

//login
router.get("/login", (req, res) => {
    res.render("login");
});
router.post("/login", (req, res) => {
    console.log(req.body);
});


//register
router.get("/registerform", (req, res) => {
    res.render("registerform");
});
router.post("/registerform",userContoller.register);


module.exports = router;