"use strict";

var userRepository = require("../repository/user.repository");

exports.register = function _callee(req, res) {
  var _req$body, id, passwd, passwdOk, name, phone, email, vaildId, vaildPhone, vaildEmail, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          _req$body = req.body, id = _req$body.id, passwd = _req$body.passwd, passwdOk = _req$body.passwdOk, name = _req$body.name, phone = _req$body.phone, email = _req$body.email;

          if (!(id == '' || passwd == '' || passwdOk == '' || name == '' || phone == '' || email == '')) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "message": "모든값을 입력해주세요"
            }
          }));

        case 4:
          if (!(passwd != passwdOk)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "message": "아이디 혹은 비밀번호가 일치하지 않습니다"
            }
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(userRepository.findId(id));

        case 8:
          vaildId = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(userRepository.findPhone(phone));

        case 11:
          vaildPhone = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(userRepository.findEmail(email));

        case 14:
          vaildEmail = _context.sent;

          if (!vaildId.success) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "message": "존재하는 아이디 입니다"
            }
          }));

        case 17:
          if (!vaildPhone.success) {
            _context.next = 19;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "message": "존재하는 핸드폰번호 입니다"
            }
          }));

        case 19:
          if (!vaildEmail.success) {
            _context.next = 21;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "message": "존재하는 이메일 입니다"
            }
          }));

        case 21:
          console.log(vaildId);
          _context.next = 24;
          return regeneratorRuntime.awrap(userRepository.saveAll(id, passwd, name, phone, email));

        case 24:
          result = _context.sent;

          if (!result.success) {
            _context.next = 29;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: result
          }));

        case 29:
          return _context.abrupt("return", res.json({
            data: result
          }));

        case 30:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.login = function _callee2(req, res) {
  var _req$body2, id, passwd, vaildId, passwdVerification;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _req$body2 = req.body, id = _req$body2.id, passwd = _req$body2.passwd;
          console.log(id);

          if (!(id == '' || passwd == '')) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", res.json({
            data: {
              "success": false,
              "message": "모든 값을 입력해주세요"
            }
          }));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(userRepository.findId(id));

        case 7:
          vaildId = _context2.sent;

          if (!vaildId.success) {
            _context2.next = 17;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(userRepository.findPasswd(id, passwd));

        case 11:
          passwdVerification = _context2.sent;

          if (!passwdVerification.success) {
            _context2.next = 16;
            break;
          }

          return _context2.abrupt("return", res.json({
            data: passwdVerification
          }));

        case 16:
          return _context2.abrupt("return", res.json({
            data: passwdVerification
          }));

        case 17:
          return _context2.abrupt("return", res.json({
            data: vaildId
          }));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.checkId = function _callee3(req, res) {
  var id, vaildId;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          console.log(id);
          _context3.next = 4;
          return regeneratorRuntime.awrap(userRepository.findId(id));

        case 4:
          vaildId = _context3.sent;
          return _context3.abrupt("return", res.json({
            data: vaildId
          }));

        case 6:
        case "end":
          return _context3.stop();
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