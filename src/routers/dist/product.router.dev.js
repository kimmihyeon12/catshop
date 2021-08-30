"use strict";

var express = require("express");
var router = express.Router();
var productController = require("../controller/product.controller");

// 카테고리 전체보기
console.log("product router");
router.get("/getproducts/:catagory", productController.getproducts);
module.exports = router;