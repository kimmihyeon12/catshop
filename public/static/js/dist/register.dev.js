"use strict";

var id = document.querySelector(".member_id");
var idMessage = document.querySelector("#id");
var passwd = document.querySelector(".member_passwd");
var passwdMessage = document.querySelector("#passwd");
var passwdOk = document.querySelector(".member_passwd_ok");
var name = document.querySelector(".member_name");
var phone = document.querySelector(".member_phone");
var phoneMessage = document.querySelector("#phone");
var email = document.querySelector(".member_email");
var emailMessage = document.querySelector("#email");
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
            res.data.success ? idMessage.style.color = "red" : idMessage.style.color = "black";
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
          if (passwd.value === passwdOk.value) {
            passwdMessage.textContent = "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD569\uB2C8\uB2E4";
            passwdMessage.style.color = "black";
          } else {
            passwdMessage.textContent = "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4";
            passwdMessage.style.color = "red";
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
phone.addEventListener("change", function _callee3(event) {
  var res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("/checkPhone/".concat(phone.value)).then(function (res) {
            return res.json();
          }).then(function (res) {
            res.data.success ? phoneMessage.style.color = "red" : phoneMessage.style.color = "black";
            phoneMessage.textContent = "".concat(res.data.message, ". ");
          }));

        case 2:
          res = _context3.sent;

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
});
email.addEventListener("change", function _callee4(event) {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch("/checkEmail/".concat(email.value)).then(function (res) {
            return res.json();
          }).then(function (res) {
            res.data.success ? emailMessage.style.color = "red" : emailMessage.style.color = "black";
            emailMessage.textContent = "".concat(res.data.message, ". ");
          }));

        case 2:
          res = _context4.sent;

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
});
loginBtn.addEventListener("click", function _callee5() {
  var req, res;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          req = {
            id: id.value,
            passwd: passwd.value,
            passwdOk: passwdOk.value,
            name: name.value,
            phone: phone.value,
            email: email.value
          };
          _context5.next = 3;
          return regeneratorRuntime.awrap(fetch("/registerform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
          }).then(function (res) {
            return res.json();
          }).then(function (res) {
            if (res.data.success) {
              alert("냥품명품에 오신것을 환영합니다");
              location.href = "/";
            } else {
              alert(res.data.message.toString());
            }
          }));

        case 3:
          res = _context5.sent;

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});