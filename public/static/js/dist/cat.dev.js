"use strict";

var catagory = 2;
var description = document.querySelector(".description");

window.onload = function _callee() {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("dog page");
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("/getproducts/".concat(catagory)).then(function (res) {
            return res.json();
          }).then(function (res) {
            var datas = res.data.products;
            var codes = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = datas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var data = _step.value;
                console.log(data);
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
            console.log(codes);
            description.innerHTML = codes;
          }));

        case 3:
          res = _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};