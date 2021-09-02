"use strict";

var catagory = 1;
var description = document.querySelector(".description");
var toy = document.querySelector("#toy");
var life = document.querySelector("#life");
var snack = document.querySelector("#snack");
var codes = "";

window.onload = function _callee() {
  var res, datas, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, data, selectItems, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _loop, _iterator2, _step2;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/getproducts/".concat(catagory)).then(function (res) {
            return res.json();
          }).then(function (res) {
            return res;
          }));

        case 2:
          res = _context.sent;
          datas = res.data.products;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 7;

          for (_iterator = datas[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            data = _step.value;
            codes += "\n            <li class=\"li-item\" data-pid=\"".concat(data.product_id, "\">\n                <img src=").concat(data.img_url, " alt=\"item\">\n                <h1> ").concat(data.product_name, "</h1>\n                <ul class=\"price\">\n                    <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n                    <li> ").concat(data.selling_price, "\uC6D0</li>\n                </ul>\n                <span class=\"review\">\n                    \uB9AC\uBDF0 121\n                </span>\n            </li>");
          }

          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 15:
          _context.prev = 15;
          _context.prev = 16;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 18:
          _context.prev = 18;

          if (!_didIteratorError) {
            _context.next = 21;
            break;
          }

          throw _iteratorError;

        case 21:
          return _context.finish(18);

        case 22:
          return _context.finish(15);

        case 23:
          ;
          description.innerHTML = codes;
          selectItems = document.querySelectorAll(".li-item");
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 29;

          _loop = function _loop() {
            var selectItem = _step2.value;
            selectItem.addEventListener("click", function () {
              location.href = "/product/".concat(selectItem.dataset.pid);
            });
          };

          for (_iterator2 = selectItems[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop();
          }

          _context.next = 38;
          break;

        case 34:
          _context.prev = 34;
          _context.t1 = _context["catch"](29);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t1;

        case 38:
          _context.prev = 38;
          _context.prev = 39;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 41:
          _context.prev = 41;

          if (!_didIteratorError2) {
            _context.next = 44;
            break;
          }

          throw _iteratorError2;

        case 44:
          return _context.finish(41);

        case 45:
          return _context.finish(38);

        case 46:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 11, 15, 23], [16,, 18, 22], [29, 34, 38, 46], [39,, 41, 45]]);
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
                codes += "\n                <li class=\"li-item\" data-pid=\"".concat(data.product_id, "\">\n                    <img src=").concat(data.img_url, "\n                        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n                    <h1> ").concat(data.product_name, "</h1>\n                    <ul class=\"price\">\n                        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n                        <li> ").concat(data.selling_price, "\uC6D0</li>\n                    </ul>\n                    <span class=\"review\">\n                        \uB9AC\uBDF0 121\n                    </span>\n                </li>");
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
            var selectItems = document.querySelectorAll(".li-item");
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              var _loop2 = function _loop2() {
                var selectItem = _step4.value;
                selectItem.addEventListener("click", function () {
                  location.href = "/product/".concat(selectItem.dataset.pid);
                });
              };

              for (var _iterator4 = selectItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                _loop2();
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
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = datas[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var data = _step5.value;
                codes += "\n                <li class=\"li-item\" data-pid=\"".concat(data.product_id, "\">\n                    <img src=").concat(data.img_url, "\n                        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n                    <h1> ").concat(data.product_name, "</h1>\n                    <ul class=\"price\">\n                        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n                        <li> ").concat(data.selling_price, "\uC6D0</li>\n                    </ul>\n                    <span class=\"review\">\n                        \uB9AC\uBDF0 121\n                    </span>\n                </li>");
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
            var selectItems = document.querySelectorAll(".li-item");
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              var _loop3 = function _loop3() {
                var selectItem = _step6.value;
                selectItem.addEventListener("click", function () {
                  location.href = "/product/".concat(selectItem.dataset.pid);
                });
              };

              for (var _iterator6 = selectItems[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                _loop3();
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
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
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = datas[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var data = _step7.value;
                codes += " \n                <li class=\"li-item\" data-pid=\"".concat(data.product_id, "\">\n                    <img src=").concat(data.img_url, "\n                        id=\"eListPrdImage51_2\" alt=\"\uB0E5\uB0E5 \uD380\uCE58 \uD1A0\uC774\uBCFC\">\n                    <h1> ").concat(data.product_name, "</h1>\n                    <ul class=\"price\">\n                        <li class=\"discount\"> ").concat(data.consumer_price, "\uC6D0</li>\n                        <li> ").concat(data.selling_price, "\uC6D0</li>\n                    </ul>\n                    <span class=\"review\">\n                        \uB9AC\uBDF0 121\n                    </span>\n                </li>");
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }

            ;
            description.innerHTML = codes;
            var selectItems = document.querySelectorAll(".li-item");
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              var _loop4 = function _loop4() {
                var selectItem = _step8.value;
                selectItem.addEventListener("click", function () {
                  location.href = "/product/".concat(selectItem.dataset.pid);
                });
              };

              for (var _iterator8 = selectItems[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                _loop4();
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                  _iterator8["return"]();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
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