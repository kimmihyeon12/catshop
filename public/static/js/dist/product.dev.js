"use strict";

console.log("product js");
var codes = "";
var totalPrice = 0;
var totalCount = 0;
var detailArea = document.querySelector(".detailArea");

window.onload = function _callee() {
  var originPath, product_id, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          originPath = window.location.href;
          product_id = originPath.split("product/")[1];
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("/getproduct/".concat(product_id)).then(function (res) {
            return res.json();
          }).then(function (res) {
            console.log(res.data.product);
            var productName = res.data.product[0].product_name;
            var productExplanation = res.data.product[0].product_explanation;
            var productConsumerPrice = res.data.product[0].consumer_price;
            var productSellingPrice = res.data.product[0].selling_price;
            var shppingMethod = res.data.product[0].shpping_method;
            var shppingPrice = res.data.product[0].shpping_price;
            var productImgs = res.data.product[0].img_url.split(",");
            var detailName = [];
            var addPrice = [];

            for (var i = 0; i < res.data.product.length; i++) {
              detailName[i] = res.data.product[i].product_detail_name;
              addPrice[i] = res.data.product[i].add_price;
            }

            codes += "\n            <div class=\"product-img\">\n                <div class=\"main-img\"><img\n                        src=".concat(productImgs[0], "\n                        alt=\"main\" class=\"BigImage \"></div>\n                <div class=\"sub-img\">\n                    <ul>");

            for (var _i = 1; _i < productImgs.length; _i++) {
              codes += "\n                        <li class=\"xans-record-\">\n                            <img src=".concat(productImgs[_i], " class=\"ThumbImage\" alt=\"\">\n                        </li>\n                        ");
            }

            codes += "\n                    </ul>\n                </div>\n            </div>";
            codes += "\n            <div class=\"product-info\">\n                <div class=\"title\">\n                    <h2>".concat(productName, "</h2>\n                </div>\n                <div class=\"product-detail\">\n                    <ul>\n                        <li class=\" xans-record-\">\n                            <div class=\"tr\">\uC0C1\uD488\uC124\uBA85</div>\n                            <div class=\"content\">").concat(productExplanation, "</div>\n                        </li>\n                        <li class=\" xans-record-\">\n                            <div class=\"tr\">\uC18C\uBE44\uC790\uAC00</div>\n                            <div class=\"content\"><strike>").concat(productConsumerPrice, "\uC6D0</strike></div>\n                        </li>\n                        <li class=\" xans-record-\">\n                            <div class=\"tr\">\uD310\uB9E4\uAC00</div>\n                            <div class=\"celling-price content\">").concat(productSellingPrice, "\uC6D0</div>\n                        </li>\n                        <li class=\" xans-record-\">\n                            <div class=\"tr\">\uBC30\uC1A1\uBC29\uBC95</div>\n                            <div class=\"content\">").concat(shppingMethod, "</div>\n                        </li>\n                        <li class=\" xans-record-\">\n                            <div class=\"tr\">\uBC30\uC1A1\uBE44</div>\n                            <div class=\"content\"> <input id=\"delivery_cost_prepaid\" name=\"delivery_cost_prepaid\"\n                                    value=\"P\" type=\"hidden\"><strong>").concat(shppingPrice, "\uC6D0</strong> (35,000\uC6D0 \uC774\uC0C1 \uAD6C\uB9E4 \uC2DC \uBB34\uB8CC)</div>\n\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"shipping\"><i class=\"fas fa-truck-moving\"></i>\n                    <p><span>\uC9C0\uAE08</span>\uC8FC\uBB38\uD558\uC2DC\uBA74 <br><strong>8/30(\uC6D4)\uC5D0 \uBC1C\uC1A1</strong>\uB429\uB2C8\uB2E4</p>\n                </div>\n                <div class=\"option\">\n                    <tr>\n                        <th scope=\"row\">\uAE30\uBCF8</th>\n                        <td><select  class=\"option-price\" option_style=\"select\">\n                                <option  value=\"*\" selected=\"true\" link_image=\"\">- [\uD544\uC218] \uC635\uC158\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694 -</option>");

            for (var _i2 = 0; _i2 < detailName.length; _i2++) {
              codes += " <option value=".concat(_i2, "  link_image=\"\" data-price=\"").concat(addPrice[_i2], "\" data-detailname=\"").concat(detailName[_i2], "\">").concat(detailName[_i2], " (+").concat(addPrice[_i2], "\uC6D0)</option>");
            }

            codes += "\n                            </select>\n                            <p class=\"value\"></p>\n                        </td>\n                    </tr>\n                </div>\n                <div class=\"guideArea\">\n\n                    <p class=\"info \">(\uCD5C\uC18C\uC8FC\uBB38\uC218\uB7C9 1\uAC1C \uC774\uC0C1<span class=\"\"> / \uCD5C\uB300\uC8FC\uBB38\uC218\uB7C9 100\uAC1C \uC774\uD558</span>)</p>\n\n                </div>\n                <div id=\"items\">\n\n                </div>\n                <div  class=\"totalPrice\">\n                    <strong>\uCD1D \uC0C1\uD488\uAE08\uC561</strong>(\uC218\uB7C9) : <span class=\"total\"><strong><em id=\"totalPrice\">0</em></strong> (0\uAC1C)</span>\n                </div>\n                <div class=\"ec-base-button gColumn\">\n\n                    <span class=\"btn-buy\" id=\"btnBuy\">\uBC14\uB85C \uAD6C\uB9E4\uD558\uAE30</span>\n                    <span id=\"btnBuy\">\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30</span>\n                    <span id=\"btnBuy\">\uAD00\uC2EC\uC0C1\uD488\uB4F1\uB85D</span>\n\n                </div>\n            </div>\n            ";
            detailArea.innerHTML = codes;
            var selectOption = document.querySelector(".option-price");
            var items = document.querySelector("#items");
            var price = document.querySelector("#totalPrice");
            totalPrice += shppingPrice;
            totalPrice += productSellingPrice;
            var select = document.querySelector('.option-price');
            select.addEventListener('change', function () {
              datasetPrice = Number(selectOption.options[selectOption.selectedIndex].dataset.price);
              totalPrice += datasetPrice;
              price.innerText = totalPrice;
              items.innerHTML += "\n                <div class=\"item-container\" style=\"font-size:12px; display:flex; align-items:center;border-top:1px solid lightgrey; padding-bottom:10px\">\n                    <div style=\"width:300px\"> \n                        <p class=\"info\" style=\"font-weight:600; padding:8px 0px\">".concat(productName, "</p>  \n                        <p class=\"info\">- ").concat(selectOption.options[selectOption.selectedIndex].dataset.detailname, "(+").concat(datasetPrice, "\uC6D0)</p>\n                    </div>\n                    <div style=\"display:flex; width:110px; align-items:center;\">\n                        <input type=\"text\" style=\"width:30px;\" id=\"option_box1_quantity\" name=\"quantity_opt[]\" value=\"1\" product-no=\"106\">\n                        <div style=\" display:flex; flex-direction:column;\">\n                                <img class=\"btn-up\" style=\"width:20px\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif\" id=\"option_box1_up\" class=\"option_box_up\" style=\"display:inline-block;\" alt=\"\uC218\uB7C9\uC99D\uAC00\">\n                                <img class=\"btn-down\" style=\"width:20px\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif\" id=\"option_box1_down\" class=\"option_box_down\" alt=\"\uC218\uB7C9\uAC10\uC18C\">\n                        </div>\n                        <img style=\"width:10px; height:10px; margin-left:10px;\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif\" alt=\"\uC0AD\uC81C\" id=\"option_box1_del\" class=\"option_box_del\">\n                    </div>\n                    <div style=\"\">\n                        <p id=\"selling-price\" style=\"font-weight:600\">").concat(productSellingPrice + datasetPrice, "\uC6D0</p>\n                    </div>\n                </div>");
              items.style.borderBottom = "1px solid grey";
              items.style.margin = "10px";
              select.value = "*";
              var quantitybox = document.querySelectorAll("#option_box1_quantity");
              var sellingPrice = document.querySelector("#selling-price");
              var btnUps = document.querySelectorAll(".btn-up");
              var btnDowns = document.querySelectorAll(".btn-down");

              var _loop = function _loop(_i3) {
                btnUps[_i3].addEventListener("click", function () {
                  quantitybox[_i3].value++;
                  sellingPrice.innerText = (productSellingPrice + datasetPrice) * quantitybox[_i3].value + "원";
                });
              };

              for (var _i3 = 0; _i3 < btnUps.length; _i3++) {
                _loop(_i3);
              }
            });
          }));

        case 4:
          res = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};