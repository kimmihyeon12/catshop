"use strict";

console.log("product js");
var codes = "";
var totalPrice = 0;
var totalCount = 0;
var detailArea = document.querySelector(".detailArea");
window.addEventListener("DOMContentLoaded", function _callee2() {
  var originPath, product_id, res, productName, productExplanation, productConsumerPrice, productSellingPrice, shppingMethod, shppingPrice, productImgs, resRequest, detailName, addPrice, i, _i, _i2, btnBuy, selectOption, items, price, quantitybox, numArray, numArrayCounter, selectContainer, selectvalue, select;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          originPath = window.location.href;
          product_id = originPath.split("product/")[1];
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("/getproduct/".concat(product_id)).then(function (res) {
            return res.json();
          }).then(function (res) {
            return res;
          }));

        case 4:
          res = _context2.sent;
          console.log(res.data.product);
          productName = res.data.product[0].product_name;
          productExplanation = res.data.product[0].product_explanation;
          productConsumerPrice = res.data.product[0].consumer_price;
          productSellingPrice = res.data.product[0].selling_price;
          shppingMethod = res.data.product[0].shpping_method;
          shppingPrice = res.data.product[0].shpping_price;
          productImgs = res.data.product[0].img_url.split(","); //order로 전송되는 데이터

          resRequest = [];
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
          btnBuy = document.querySelector(".btn-buy");
          selectOption = document.querySelector(".option-price");
          items = document.querySelector("#items");
          price = document.querySelector("#totalPrice");
          totalPrice += shppingPrice; // 인풋 값 상태

          numArray = [];
          numArrayCounter = -1;
          selectContainer = ["*"];
          selectvalue = [];
          select = document.querySelector('.option-price');
          btnBuy.addEventListener('click', function _callee() {
            var form, _i3, datas, key, input;

            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("form");
                    form = document.createElement("form");

                    for (_i3 = 0; _i3 < resRequest.length; _i3++) {
                      resRequest[_i3].totalPrice = totalPrice;
                      if (quantitybox[_i3] != null) resRequest[_i3].quantity = quantitybox[_i3].value;
                      datas = resRequest[_i3]; //order page로 data 보내기

                      form.setAttribute("method", "post");
                      form.setAttribute("action", "/order");

                      for (key in datas) {
                        input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        input.setAttribute("name", key);
                        input.setAttribute("value", datas[key]);
                        form.appendChild(input);
                      }
                    }

                    document.body.appendChild(form);
                    console.log(form);
                    form.submit();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          select.addEventListener('change', function () {
            for (var _i4 = 0; _i4 < selectContainer.length; _i4++) {
              if (select.value == selectContainer[_i4]) {
                alert("이미 같은 상품이 존재합니다.");
                return;
              }
            }

            selectContainer.push(select.value);
            datasetPrice = Number(selectOption.options[selectOption.selectedIndex].dataset.price);
            totalPrice += productSellingPrice;
            totalPrice += datasetPrice;
            price.innerText = totalPrice;
            resRequest.push(res.data.product[select.value]);
            console.log(resRequest);
            console.log("res.data.product");
            console.log(res.data.product);
            numArray.push(1);
            numArrayCounter++;
            items.innerHTML += "\n        <div class=\"item-container\">\n            <div  style=\"font-size:12px; display:flex; align-items:center; border-top:1px solid lightgrey; padding-bottom:10px\">\n                <div class=\"q-price\" data-datasetprice=".concat(datasetPrice, " style=\"width:300px\"> \n                    <p class=\"info\" style=\"font-weight:600; padding:8px 0px\">").concat(productName, "</p>  \n                    <p class=\"info\">- ").concat(selectOption.options[selectOption.selectedIndex].dataset.detailname, "(+").concat(datasetPrice, "\uC6D0)</p>\n                </div>\n                <div style=\"display:flex; width:110px; align-items:center;\">\n                    <input type=\"text\" style=\"width:30px;\" class=\"option_box1_quantity\" value=\"1\" name=\"quantity_opt[]\" product-no=\"106\">\n                    <div class=\"btn-wrap\" style=\" display:flex; flex-direction:column;\">\n                            <img class=\"btn-up\" style=\"width:20px\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif\" id=\"option_box1_up\" class=\"option_box_up\" style=\"display:inline-block;\" alt=\"\uC218\uB7C9\uC99D\uAC00\">\n                            <img class=\"btn-down\" style=\"width:20px\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif\" id=\"option_box1_down\" class=\"option_box_down\" alt=\"\uC218\uB7C9\uAC10\uC18C\">\n                    </div>\n                    <img class=\"btn-cancel\" style=\"width:10px; height:10px; margin-left:10px;\" src=\"//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif\" alt=\"\uC0AD\uC81C\" id=\"option_box1_del\" class=\"option_box_del\">\n                </div>\n                <div style=\"\">\n                    <p class=\"selling-price\" style=\"font-weight:600\" >").concat(productSellingPrice + datasetPrice, "\uC6D0</p>\n                </div>\n            </div>\n        </div>"); //items.style.borderBottom = `1px solid grey`;
            //items.style.margin = `10px`;

            select.value = "*";

            if (totalPrice > 35000) {
              price.innerText = totalPrice - 2500;
              document.querySelector(".s-price").innerText = 0;
            } else {
              price.innerText = totalPrice;
              document.querySelector(".s-price").innerText = 2500;
            }

            var sellingPrice = document.querySelectorAll(".selling-price");
            var btnUps = document.querySelectorAll(" .btn-up");
            var btnDowns = document.querySelectorAll(" .btn-down");
            var qPrice = document.querySelectorAll(".q-price");
            var btnCancel = document.querySelectorAll(".btn-cancel");
            var itemContainer = document.querySelectorAll(".item-container");
            quantitybox = document.querySelectorAll(".option_box1_quantity");

            var _loop = function _loop(_i5) {
              if (selectvalue[_i5] == null) {
                selectvalue[_i5] = 1;
              }

              quantitybox[_i5].value = selectvalue[_i5];

              btnCancel[_i5].addEventListener("click", function () {
                items.removeChild(itemContainer[_i5]);
                totalPrice -= (productSellingPrice + Number(qPrice[_i5].dataset.datasetprice)) * quantitybox[_i5].value;
                price.innerText = price.innerText - (productSellingPrice + Number(qPrice[_i5].dataset.datasetprice)) * quantitybox[_i5].value;
                quantitybox[_i5].value = 1;
                selectvalue[_i5] = null;
                selectContainer.pop(select.value);
              });

              btnUps[_i5].addEventListener("click", function () {
                quantitybox[_i5].value++;
                selectvalue[_i5]++;
                sellingPrice[_i5].innerText = (productSellingPrice + Number(qPrice[_i5].dataset.datasetprice)) * quantitybox[_i5].value + "원"; //최종가격

                totalPrice += productSellingPrice + Number(qPrice[_i5].dataset.datasetprice);

                if (totalPrice > 35000) {
                  price.innerText = totalPrice - 2500;
                  document.querySelector(".s-price").innerText = 0;
                } else {
                  price.innerText = totalPrice;
                  document.querySelector(".s-price").innerText = 2500;
                }
              });

              btnDowns[_i5].addEventListener("click", function () {
                if (quantitybox[_i5].value > 1) {
                  quantitybox[_i5].value--;
                  selectvalue[_i5]--;
                  sellingPrice[_i5].innerText = (productSellingPrice + Number(qPrice[_i5].dataset.datasetprice)) * quantitybox[_i5].value + "원"; //최종가격

                  totalPrice -= productSellingPrice + Number(qPrice[_i5].dataset.datasetprice);

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

            for (var _i5 = 0; _i5 < itemContainer.length; _i5++) {
              _loop(_i5);
            }
          });

        case 36:
        case "end":
          return _context2.stop();
      }
    }
  });
});