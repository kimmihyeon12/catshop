"use strict";

const express = require("express");
const router = express.Router();

//login
router.get("/login", (req, res)=>{
    res.render("login");
});

router.post("/login", (req, res)=>{
   console.log(req.body);
});

module.exports = router;
