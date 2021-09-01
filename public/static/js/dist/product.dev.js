"use strict";

console.log("product js");
var codes = "";
var totalPrice = 0;
var totalCount = 0;
var detailArea = document.querySelector(".detailArea");
window.addEventListener("DOMContentLoaded", function _callee() {
  var originPath, product_id, res, productName, productExplanation, productConsumerPrice, productSellingPrice, shppingMethod, shppingPrice, productImgs, detailName, addPrice, i, _i, _i2, selectOption, items, price, numArray, numArrayCounter, selectContainer, select;

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
            return res;
          }));

        case 4:
          res = _context.sent;
          console.log(res.data.product);
          productName = res.data.product[0].product_name;
          productExplanation = res.data.product[0].product_explanation;
          productConsumerPrice = res.data.product[0].consumer_price;
          productSellingPrice = res.data.product[0].selling_price;
          shppingMethod = res.data.product[0].shpping_method;
          shppingPrice = res.data.product[0].shpping_price;
          productImgs = res.data.product[0].img_url.split(",");
          detailName = [];
          addPrice = [];

          for (i = 0; i < res.data.product.length; i++) {
            detailName[i] = res.data.product[i].product_detail_name;
            addPrice[i] = res.data.product[i].add_price;
          }

          codes += "\n    <div class=\"product-img\">\n        <div class=\"main-img\"><img\n                src=".concat(productImgs[0], "\n                alt=\"main\" class=\"BigImage \"></div>\n        <div class=\"sub-img\">\n            <ul>");

          for (_i = 1; _i < productImgs.length; _i++) {
            codes += "\n                <li class=\"xans-record-\">\n                    <img src=".concat(productImgs[_i], " class=\"ThumbImage\" alt=\"\">\n                </li>\n                ");
          }

          codes += "\n            </ul>\n        </div>\n    </div>";
          codes += "\n    <div class=\"product-info\">\n        <div class=\"title\">\n            <h2>".concat(productName, "</h2>\n        </div>\n        <div class=\"product-detail\">\n            <ul>\n                <li class=\" xans-record-\">\n                    <div class=\"tr\">\uC0C1\uD488\uC124\uBA85</div>\n                    <div class=\"content\">").concat(productExplanation, "</div>\n                </li>\n                <li class=\" xans-record-\">\n                    <div class=\"tr\">\uC18C\uBE44\uC790\uAC00</div>\n                    <div class=\"content\"><strike>").concat(productConsumerPrice, "\uC6D0</strike></div>\n                </li>\n                <li class=\" xans-record-\">\n                    <div class=\"tr\">\uD310\uB9E4\uAC00</div>\n                    <div class=\"celling-price content\">").concat(productSellingPrice, "\uC6D0</div>\n                </li>\n                <li class=\" xans-record-\">\n                    <div class=\"tr\">\uBC30\uC1A1\uBC29\uBC95</div>\n                    <div class=\"content\">").concat(shppingMethod, "</div>\n                </li>\n                <li class=\" xans-record-\">\n                    <div class=\"tr\">\uBC30\uC1A1\uBE44</div>\n                    <div class=\"content\"> <input id=\"delivery_cost_prepaid\" name=\"delivery_cost_prepaid\"\n                            value=\"P\" type=\"hidden\"><strong>").concat(shppingPrice, "\uC6D0</strong> (35,000\uC6D0 \uC774\uC0C1 \uAD6C\uB9E4 \uC2DC \uBB34\uB8CC)</div>\n\n                </li>\n            </ul>\n        </div>\n        <div class=\"shipping\"><i class=\"fas fa-truck-moving\"></i>\n            <p><span>\uC9C0\uAE08</span>\uC8FC\uBB38\uD558\uC2DC\uBA74 <br><strong>8/30(\uC6D4)\uC5D0 \uBC1C\uC1A1</strong>\uB429\uB2C8\uB2E4</p>\n        </div>\n        <div class=\"option\">\n            <tr>\n                <th scope=\"row\">\uAE30\uBCF8</th>\n                <td><select  class=\"option-price\" option_style=\"select\">\n                        <option  value=\"*\" selected=\"true\" link_image=\"\">- [\uD544\uC218] \uC635\uC158\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694 -</option>");

          for (_i2 = 0; _i2 < detailName.length; _i2++) {
            codes += " <option value=".concat(_i2, "  link_image=\"\" data-price=\"").concat(addPrice[_i2], "\" data-detailname=\"").concat(detailName[_i2], "\">").concat(detailName[_i2], " (+").concat(addPrice[_i2], "\uC6D0)</option>");
          }

          codes += "\n                    </select>\n                    <p class=\"value\"></p>\n                </td>\n            </tr>\n        </div>\n        <div class=\"guideArea\">\n\n            <p class=\"info \">(\uCD5C\uC18C\uC8FC\uBB38\uC218\uB7C9 1\uAC1C \uC774\uC0C1<span class=\"\"> / \uCD5C\uB300\uC8FC\uBB38\uC218\uB7C9 100\uAC1C \uC774\uD558</span>)</p>\n\n        </div>\n        <div id=\"items\">\n\n        </div>\n        <div  class=\"totalPrice\">\n            <strong>\uCD1D \uC0C1\uD488\uAE08\uC561</strong>(\uC218\uB7C9) : <span class=\"total\"><strong><em id=\"totalPrice\">0</em>\uC6D0</strong> (0\uAC1C)(\uBC30\uC1A1\uBE44+<p class=\"s-price\" style=\"display:inline-block\">".concat(shppingPrice, "</p>\uC6D0)</span>\n        </div>\n        <div class=\"ec-base-button gColumn\">\n\n            <span class=\"btn-buy\" id=\"btnBuy\">\uBC14\uB85C \uAD6C\uB9E4\uD558\uAE30</span>\n            <span id=\"btnBuy\">\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30</span>\n            <span id=\"btnBuy\">\uAD00\uC2EC\uC0C1\uD488\uB4F1\uB85D</span>\n\n        </div>\n    </div>\n    ");
          detailArea.innerHTML = codes;
          selectOption = document.querySelector(".option-price");
          items = document.querySelector("#items");
          price = document.querySelector("#totalPrice");
          totalPrice += shppingPrice; // 인풋 값 상태

          numArray = [];
          numArrayCounter = -1;
          selectContainer = ["*"];
          select = document.querySelector('.option-price');
          select.addEventListener('change', function () {
            for (var _i3 = 0; _i3 < selectContainer.length; _i3++) {
              if (select.value == selectContainer[_i3]) {
                alert("이미 같은 상품이 존재합니다.");
                return;
              }
            }

            selectContainer.push(select.value);
            datasetPrice = Number(selectOption.options[selectOption.selectedIndex].dataset.price);
            totalPrice += productSellingPrice;
            totalPrice += datasetPrice;
            price.innerText = totalPrice;
            numArray.push(1);
            numArrayCounter++;
            items.innerHTML += "\n        <div class=\"item-container\">\n        <div  style=\"font-size:12px; display:flex; align-items:center; border-top:1px solid lightgrey; padding-bottom:10px\">\n            <div class=\"q-price\" data-datasetprice=".concat(datasetPrice, " style=\"width:300px\"> \n                <p class=\"info\" style=\"font-weight:600; padding:8px 0px\">").concat(productName, "</p>  \n                <p class=\"info\">- ").concat(selectOption.options[selectOption.selectedIndex].dataset.detailname, "(+").concat(datasetPrice, "\uC6D0)</p>\n            </div>\n            <div style=\"display:flex; width:110px; align-items:center;\">\n                <input type=\"text\" style=\"width:30px;\" class=\"option_box1_quantity\" value=\"1\" name=\"quantity_opt[]\" product-no=\"106\">\n                <div class=\"btn-wrap\" style=\" display:flex; flex-direction:column;\">\n                        <img class=\"btn-up\" style=\"width:20px\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif\" id=\"option_box1_up\" class=\"option_box_up\" style=\"display:inline-block;\" alt=\"\uC218\uB7C9\uC99D\uAC00\">\n                        <img class=\"btn-down\" style=\"width:20px\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif\" id=\"option_box1_down\" class=\"option_box_down\" alt=\"\uC218\uB7C9\uAC10\uC18C\">\n                </div>\n                <img class=\"btn-cancel\" style=\"width:10px; height:10px; margin-left:10px;\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif\" alt=\"\uC0AD\uC81C\" id=\"option_box1_del\" class=\"option_box_del\">\n            </div>\n            <div style=\"\">\n                <p class=\"selling-price\" style=\"font-weight:600\" >").concat(productSellingPrice + datasetPrice, "\uC6D0</p>\n            </div>\n        </div>\n        </div>"); //items.style.borderBottom = `1px solid grey`;
            //items.style.margin = `10px`;

            select.value = "*";

            if (totalPrice > 35000) {
              price.innerText = totalPrice - 2500;
              document.querySelector(".s-price").innerText = 0;
            } else {
              price.innerText = totalPrice;
              document.querySelector(".s-price").innerText = 2500;
            }

            var quantitybox = document.querySelectorAll(".option_box1_quantity");
            var sellingPrice = document.querySelectorAll(".selling-price");
            var btnUps = document.querySelectorAll(" .btn-up");
            var btnDowns = document.querySelectorAll(" .btn-down");
            var qPrice = document.querySelectorAll(".q-price");
            var btnCancel = document.querySelectorAll(".btn-cancel");
            var itemContainer = document.querySelectorAll(".item-container");

            var _loop = function _loop(_i4) {
              if (quantitybox[_i4].value === 1) {
                quantitybox[_i4].value = numArray[_i4];
              }

              btnCancel[_i4].addEventListener("click", function () {
                items.removeChild(itemContainer[_i4]);
                totalPrice -= (productSellingPrice + Number(qPrice[_i4].dataset.datasetprice)) * quantitybox[_i4].value;
                price.innerText = price.innerText - (productSellingPrice + Number(qPrice[_i4].dataset.datasetprice)) * quantitybox[_i4].value;
                quantitybox[_i4].value = 1;
                numArray[_i4] = 1;
              });

              btnUps[_i4].addEventListener("click", function () {
                quantitybox[_i4].value = ++numArray[_i4];
                sellingPrice[_i4].innerText = (productSellingPrice + Number(qPrice[_i4].dataset.datasetprice)) * quantitybox[_i4].value + "원"; //최종가격

                totalPrice += productSellingPrice + Number(qPrice[_i4].dataset.datasetprice);

                if (totalPrice > 35000) {
                  price.innerText = totalPrice - 2500;
                  document.querySelector(".s-price").innerText = 0;
                } else {
                  price.innerText = totalPrice;
                  document.querySelector(".s-price").innerText = 2500;
                }
              });

              btnDowns[_i4].addEventListener("click", function () {
                if (quantitybox[_i4].value > 1) {
                  quantitybox[_i4].value--;
                  sellingPrice[_i4].innerText = (productSellingPrice + Number(qPrice[_i4].dataset.datasetprice)) * quantitybox[_i4].value + "원"; //최종가격

                  totalPrice -= productSellingPrice + Number(qPrice[_i4].dataset.datasetprice);

                  if (totalPrice > 35000) {
                    price.innerText = totalPrice - 2500;
                    document.querySelector(".s-price").innerText = 0;
                  } else {
                    price.innerText = totalPrice;
                    document.querySelector(".s-price").innerText = 2500;
                  }
                }
              });
            };

            for (var _i4 = 0; _i4 < itemContainer.length; _i4++) {
              _loop(_i4);
            }
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
});