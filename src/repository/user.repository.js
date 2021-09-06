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
    const query = `insert into users values(null,'${id}','${passwd}','${name}','${phone}','${email}',now(),now(),1);`;
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
    const checkId = CheckId(id);
    if (!checkId) return {
        success: true,
        message: "아이디 형식을 확인해주세요"
    };
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
                message: "database error"
            };
        });
}
exports.findPhone = (phone) => {
    const query = `select * from users where phone_number='${phone}';`
    const checkphone = CheckPhone(phone);
    if (!checkphone) return {
        success: true,
        message: "핸드폰번호 형식을 확인해주세요"
    };
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
    const checkEmail = CheckEmail(email);
    if (!checkEmail) return {
        success: true,
        message: "이메일 형식을 확인해주세요"
    };
    return new Promise(function (resolve, reject) {
            connection.query(query, null, function (err, results, fields) {
                if (err) reject(err);
                resolve(results);
            })
        })
        .then((data) => {
            if (data.length != 0) return {
                success: true,
                message: "존재하는 이메일 입니다"
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
                data: {
                    "id": data[0].id,
                    "user_id": data[0].user_id
                },
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

function CheckEmail(e) {

    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(e)) {
        return false;
    } else {
        return true;
    }
}

function CheckPhone(p) {

    p = p.split('-').join('');

    var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;

    return regPhone.test(p);

}

function CheckId(i) {
    var regId = /^[a-z0-9]{4,16}$/;
    return regId.test(i);
}