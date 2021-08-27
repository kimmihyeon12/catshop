"use strict";

var productRepository = require("../repository/product.repository");

exports.getproducts = function _callee(req, res) {
  var catagory, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          catagory = req.params.catagory;
          _context.next = 3;
          return regeneratorRuntime.awrap(productRepository.selectAll(catagory));

        case 3:
          result = _context.sent;

          if (!result.success) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": true,
              "products": result.data
            }
          }));

        case 8:
          return _context.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "products": "error"
            }
          }));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getsubproducts = function _callee2(req, res) {
  var catagory, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          catagory = req.params.catagory;
          _context2.next = 3;
          return regeneratorRuntime.awrap(productRepository.selectPartial(catagory));

        case 3:
          result = _context2.sent;

          if (!result.success) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(200).json({
            data: {
              "success": true,
              "products": result.data
            }
          }));

        case 8:
          return _context2.abrupt("return", res.status(200).json({
            data: {
              "success": false,
              "products": "error"
            }
          }));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
};