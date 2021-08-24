"use strict";

var id = document.querySelector(".member_id");
var idMessage = document.querySelector("#id");
var passwd = document.querySelector(".member_passwd");
var passwdMessage = document.querySelector("#passwd");
var passwdOk = document.querySelector(".member_passwd_ok");
var name = document.querySelector(".member_name");
var phone = document.querySelector(".member_phone");
var email = document.querySelector(".member_email");
var loginBtn = document.querySelector("button");
console.log();
id.addEventListener("change", function _callee(event) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/checkId/".concat(id.value)).then(function (res) {
            return res.json();
          }).then(function (res) {
            idMessage.textContent = "".concat(res.data.message, ". ");
          }));

        case 2:
          res = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
passwdOk.addEventListener("change", function _callee2(event) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("비밀번호 검사");

          if (passwd.value === passwdOk.value) {
            console.log("비밀번호 일치");
            passwdMessage.textContent = "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4";
          }

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
loginBtn.addEventListener("click", function _callee3() {
  var req, res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          req = {
            id: id.value,
            passwd: passwd.value,
            passwdOk: passwdOk.value,
            name: name.value,
            phone: phone.value,
            email: email.value
          };
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("/registerform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
          }).then(function (res) {
            return res.json();
          }).then(function (res) {
            console.log("res");
            console.log(res);
            console.log(idMessage);
            console.log(idMessage.textContent);
            idMessage.textContent = "\uC774\uBBF8\uC874\uC7AC\uD558\uB294 \uC544\uC774\uB514 \uC785\uB2C8\uB2E4. (\uC601\uBB38\uC18C\uBB38\uC790/\uC22B\uC790, 4~16\uC790)";
          }));

        case 3:
          res = _context3.sent;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});