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
                codes += "<li class=\"li-item\" data-pid=\"".concat(data.product_id, "\">\n        <img src=").concat(data.img_url, "\n             alt=\"item\">\n        <h1> ").concat(data.product_name, "</h1>\n        <ul class=\"price\">\n            <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n            <li> ").concat(data.selling_price, "\uC6D0</li>\n        </ul>\n    \n        <span class=\"review\">\n            \uB9AC\uBDF0 121\n        </span>\n    </li>");
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
            description.innerHTML = codes; // console.log(codes);

            var selectItems = document.querySelectorAll(".li-item");
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop = function _loop() {
                var selectItem = _step2.value;
                selectItem.addEventListener("click", function () {
                  location.href = "/product/".concat(selectItem.dataset.pid);
                });
              };

              for (var _iterator2 = selectItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                _loop();
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
          return regeneratorRuntime.awrap(fetch("/getsubproducts/".concat(1)).then(function (res) {
            return res.json();
          }).then(function (res) {
            description.innerHTML = "";
            codes = '';
            var datas = res.data.products;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = datas[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var data = _step3.value;
                codes += "<li>\n    <img src=".concat(data.img_url, "\n        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n    <h1> ").concat(data.product_name, "</h1>\n    <ul class=\"price\">\n        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n        <li> ").concat(data.selling_price, "\uC6D0</li>\n    </ul>\n\n    <span class=\"review\">\n        \uB9AC\uBDF0 121\n    </span>\n</li>");
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
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
life.addEventListener("click", function _callee3() {
  var res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("toy click");
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch("/getsubproducts/".concat(2)).then(function (res) {
            return res.json();
          }).then(function (res) {
            description.innerHTML = "";
            codes = '';
            var datas = res.data.products;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = datas[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var data = _step4.value;
                codes += "<li>\n    <img src=".concat(data.img_url, "\n        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n    <h1> ").concat(data.product_name, "</h1>\n    <ul class=\"price\">\n        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n        <li> ").concat(data.selling_price, "\uC6D0</li>\n    </ul>\n\n    <span class=\"review\">\n        \uB9AC\uBDF0 121\n    </span>\n</li>");
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            ;
            description.innerHTML = codes;
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
snack.addEventListener("click", function _callee4() {
  var res;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("toy click");
          _context4.next = 3;
          return regeneratorRuntime.awrap(fetch("/getsubproducts/".concat(3)).then(function (res) {
            return res.json();
          }).then(function (res) {
            description.innerHTML = "";
            codes = '';
            var datas = res.data.products;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = datas[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var data = _step5.value;
                codes += "<li>\n    <img src=".concat(data.img_url, "\n        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n    <h1> ").concat(data.product_name, "</h1>\n    <ul class=\"price\">\n        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n        <li> ").concat(data.selling_price, "\uC6D0</li>\n    </ul>\n\n    <span class=\"review\">\n        \uB9AC\uBDF0 121\n    </span>\n</li>");
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            ;
            description.innerHTML = codes;
          }));

        case 3:
          res = _context4.sent;

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});