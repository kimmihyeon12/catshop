"use strict";

var express = require("express");

var router = express.Router();

var productController = require("../controller/product.controller"); //카테고리 전체보기 api 👍
//1 강아지용품 2 고양이용품


router.get("/getproducts/:catagory", productController.getproducts); //카테고리 부분보기 api 👍
//1 강아지용품-장난감 2 강아지용품-라이프용품 3 강아지용품-간식
//4 고양이용품-장난감 5 고양이용품-라이프용품 6 고양이용품-간식

router.get("/getsubproducts/:subcatagory", productController.getsubproducts); //상품 상세보기

router.get("/getproduct/:product_id", productController.getproduct);
module.exports = router;