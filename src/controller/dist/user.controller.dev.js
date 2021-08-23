"use strict";

var userRepository = require("../repository/user.repository");

exports.register = function _callee(req, res) {
  var _req$body, id, passwd, passwdOk, name, phone, email, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          _req$body = req.body, id = _req$body.id, passwd = _req$body.passwd, passwdOk = _req$body.passwdOk, name = _req$body.name, phone = _req$body.phone, email = _req$body.email;
          _context.next = 4;
          return regeneratorRuntime.awrap(userRepository.saveAll(id, passwd, name, phone, email));

        case 4:
          result = _context.sent;
          result.success ? res.status(200).json({
            data: result
          }) : res.status(500).json({
            message: result.message
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // es6 
// import export 

/**
 * export const ex;
 * 
 * export default ex;
 */