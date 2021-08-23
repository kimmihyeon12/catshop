"use strict";

var id = document.querySelector(".member_id");
var passwd = document.querySelector(".member_passwd");
var passwdOk = document.querySelector(".member_passwd_ok");
var name = document.querySelector(".member_name");
var phone = document.querySelector(".member_phone");
var email = document.querySelector(".member_email");
var loginBtn = document.querySelector("button");
loginBtn.addEventListener("click", function _callee() {
  var req, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = {
            id: id.value,
            passwd: passwd.value,
            passwdOk: passwdOk.value,
            name: name.value,
            phone: phone.value,
            email: email.value
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("/registerform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(req)
          }).then(function (data) {
            return data;
          }).then(function (data) {
            return data.json();
          })["catch"](function (err) {
            throw new Error(err);
          }));

        case 3:
          res = _context.sent;
          console.log(res);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});