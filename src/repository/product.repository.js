//database
const mysql = require('mysql'); // mysql 모듈 로드


const conn = { // mysql 접속 설정
    host: process.env.DB_MYSQL_HOST,
    port: process.env.DB_MYSQL_POST,
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PW,
    database: process.env.DB_MYSQL_DB_NAME
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(() => {
    console.log("커넥션 완료!");
}); // DB 

exports.selectAll = (catagory) => {
    const query = `select p.product_id,product_name,consumer_price,selling_price,i.img_url from (select pr.product_id,product_name,consumer_price,selling_price from (select product_id,p.sub_catagory_id,product_name from products p inner join sub_product_catagory sc on p.sub_catagory_id = sc.sub_catagory_id where catagory_id =${catagory}) as pr inner join product_detail d on pr.product_id=d.product_id group by product_id) as p left outer join product_img i on p.product_id = i.product_id group by p.product_id;`;
    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            return {
                success: true,
                message: "success",
                data: data
            };
        })
        .catch((err) => {
            return {
                success: false,
                message: "error"
            };
        });
}
exports.selectOne = (product_id) => {
    
    const query = `select  p.product_id ,product_name,product_explanation,additional_component_products,img_url,product_detail_name,consumer_price,selling_price,add_price,product_quantity,shpping_method,shpping_price from (select p.product_id, shpping_id,product_name,product_explanation,additional_component_products,img_url,d.product_detail_name,consumer_price,selling_price,add_price,product_quantity from (select p.product_id,shpping_id,product_name,product_explanation,additional_component_products,GROUP_CONCAT(img_url) img_url from products p left outer join product_img i on p.product_id = i.product_id where p.product_id=${product_id} group by p.product_id ) p inner join product_detail d on p.product_id = d.product_id) p inner join product_shipping s on p.shpping_id=s.shpping_id;`;
    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            return {
                success: true,
                message: "success",
                data: data
            };
        })
        .catch((err) => {
            return {
                success: false,
                message: "error"
            };
        });
}

exports.selectPartial = (subcatagory) => {
    const query = `select p.product_id,product_name,consumer_price,selling_price,i.img_url from (select pr.product_id,product_name,consumer_price,selling_price from (select product_id,p.sub_catagory_id,product_name from products p inner join sub_product_catagory sc on p.sub_catagory_id = sc.sub_catagory_id where p.sub_catagory_id=${subcatagory}) as pr inner join product_detail d on pr.product_id=d.product_id group by product_id) as p left outer join product_img i on p.product_id = i.product_id group by p.product_id;`;
    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            return {
                success: true,
                message: "success",
                data: data
            };
        })
        .catch((err) => {
            return {
                success: false,
                message: "error"
            };
        });
}