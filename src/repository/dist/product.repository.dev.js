"use strict";

//database
var mysql = require('mysql'); // mysql 모듈 로드


var conn = {
  // mysql 접속 설정
  host: process.env.DB_MYSQL_HOST,
  port: process.env.DB_MYSQL_POST,
  user: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PW,
  database: process.env.DB_MYSQL_DB_NAME
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성

connection.connect(function () {
  console.log("커넥션 완료!");
}); // DB 

exports.selectAll = function (catagory) {
  console.log(catagory);
  var query = "select p.product_id,product_name,consumer_price,selling_price,i.img_url from (select pr.product_id,product_name,consumer_price,selling_price from (select product_id,p.sub_catagory_id,product_name from products p inner join sub_product_catagory sc on p.sub_catagory_id = sc.sub_catagory_id where catagory_id =".concat(catagory, ") as pr inner join product_detail d on pr.product_id=d.product_id group by product_id) as p left outer join product_img i on p.product_id = i.product_id group by p.product_id;");
  return new Promise(function (resolve, reject) {
    connection.query(query, null, function (err, results, fields) {
      if (err) reject(err);
      resolve(results);
    });
  }).then(function (data) {
    return {
      success: true,
      message: "success",
      data: data
    };
  })["catch"](function (err) {
    return {
      success: false,
      message: "error"
    };
  });
};

exports.selectPartial = function (subcatagory) {
  var query = "select p.product_id,product_name,consumer_price,selling_price,i.img_url from (select pr.product_id,product_name,consumer_price,selling_price from (select product_id,p.sub_catagory_id,product_name from products p inner join sub_product_catagory sc on p.sub_catagory_id = sc.sub_catagory_id where p.sub_catagory_id=".concat(subcatagory, ") as pr inner join product_detail d on pr.product_id=d.product_id group by product_id) as p left outer join product_img i on p.product_id = i.product_id group by p.product_id;");
  return new Promise(function (resolve, reject) {
    connection.query(query, null, function (err, results, fields) {
      if (err) reject(err);
      resolve(results);
    });
  }).then(function (data) {
    return {
      success: true,
      message: "success",
      data: data
    };
  })["catch"](function (err) {
    return {
      success: false,
      message: "error"
    };
  });
};