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
}); // DB 접속

exports.saveAll = (id, passwd, name, phone, email) => {
    const query = `insert into users values(null,'${id}','${passwd}','${name}','${phone}','${email}','2021-08-23','2021-08-23');`;
    return new Promise(function (resolve, reject) {
        connection.query(query, null, function (err, results, fields) {
            if (err) reject(err);
            resolve(results);
        })
    })
    .then((data) => {
        console.log(data);
        return { success: true, message: "success", data: data };
    })
    .catch((err) => {
        console.log(err);
        return { success: false, message: "error"};
    });
}