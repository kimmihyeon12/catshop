"use strict";

const express = require("express");
const router = express.Router();
const userContoller = require("../controller/user.controller");

//login
router.get("/login", (req, res) => {
    if(req.session.userData){
        console.log("유저데이터 있음");
    }
    res.render("login");
    
});
router.post("/login",userContoller.login);

router.get("/logout", (req, res)=>{

    
    req.session.destroy(()=>{
        res.redirect("/");
    });
    
});


//register
router.get("/registerform", (req, res) => {
    res.render("registerform");
});
router.post("/registerform",userContoller.register);

//check
router.get("/checkId/:id",userContoller.checkId);
router.get("/checkphone/:phone",userContoller.checkPhone);
router.get("/checkemail/:email",userContoller.checkEmail);
module.exports = router;