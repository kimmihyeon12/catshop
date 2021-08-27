"use strict";

var catagory = 1;
var description = document.querySelector(".description");
var toy = document.querySelector("#toy");
var life = document.querySelector("#life");
var snack = document.querySelector("#snack");
var codes = "";

window.onload = function _callee() {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/getproducts/".concat(catagory)).then(function (res) {
            return res.json();
          }).then(function (res) {
            var datas = res.data.products;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = datas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var data = _step.value;
                codes += "<li>\n        <img src=".concat(data.img_url, "\n            id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n        <h1> ").concat(data.product_name, "</h1>\n        <ul class=\"price\">\n            <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n            <li> ").concat(data.selling_price, "\uC6D0</li>\n        </ul>\n    \n        <span class=\"review\">\n            \uB9AC\uBDF0 121\n        </span>\n    </li>");
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            ;
            description.innerHTML = codes;
          }));

        case 2:
          res = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

toy.addEventListener("click", function _callee2() {
  var res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("toy click");
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch("/getproducts/".concat(2)).then(function (res) {
            return res.json();
          }).then(function (res) {
            description.innerHTML = "";
            codes = '';
            var datas = res.data.products;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = datas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var data = _step2.value;
                codes += "<li>\n    <img src=".concat(data.img_url, "\n        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n    <h1> ").concat(data.product_name, "</h1>\n    <ul class=\"price\">\n        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n        <li> ").concat(data.selling_price, "\uC6D0</li>\n    </ul>\n\n    <span class=\"review\">\n        \uB9AC\uBDF0 121\n    </span>\n</li>");
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            ;
            description.innerHTML = codes;
          }));

        case 3:
          res = _context2.sent;

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});