"use strict";
const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
console.log("product router");
router.get("/getproducts/:catagory",productController.getproducts);

module.exports = router;