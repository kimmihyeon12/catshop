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

exports.findId = (id) => {
    const query = `select * from users where user_id='${id}';`

    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            console.log(data.length);
            if (data.length != 0) return {
                success: true,
                message: "아이디가 존재합니다"
            };
            return {
                success: false,
                message: "사용할수 있는 아이디 입니다"
            };
        })
        .catch((err) => {
            return {
                success: false,
                message: "error"
            };
        });
}
exports.findPhone = (phone) => {
    const query = `select * from users where phone_number='${phone}';`
    console.log(query);
    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            if (data.length != 0) return {
                success: true,
                message: "핸드폰번호가 존재합니다"
            };
            return {
                success: false,
                message: "사용하실 수 있는 핸드폰번호 입니다"
            };
        })
        .catch((err) => {
            return {
                success: false,
                message: "error"
            };
        });
}
exports.findEmail = (email) => {
    const query = `select * from users where email='${email}';`
    console.log(query);
    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            if (data.length != 0) return {
                success: true,
                message: "이메일 존재함"
            };
            return {
                success: false,
                message: "사용하실 수 있는 이메일 입니다"
            };
        })
        .catch((err) => {
            return {
                success: false,
                message: "error"
            };
        });
}

exports.findPasswd = (id, passwd) => {
    const query = `select * from users where user_id='${id}' and password='${passwd}';`

    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            if (data.length != 0) return {
                success: true,
                message: "비밀번호 일치"
            };
            return {
                success: false,
                message: "비밀번호 불 일치"
            };
        })
        .catch((err) => {

            return {
                success: false,
                message: "error"
            };
        });
}