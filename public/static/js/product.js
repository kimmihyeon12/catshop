console.log("product js");
let codes = ``;
let totalPrice = 0;
let totalCount = 0;
const detailArea = document.querySelector(".detailArea");
window.onload = async () => {
    const originPath = window.location.href;
    const product_id = originPath.split("product/")[1];
    const res = await fetch(`/getproduct/${product_id}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res.data.product);
         
            const productName = res.data.product[0].product_name;
            const productExplanation = res.data.product[0].product_explanation;
            const productConsumerPrice = res.data.product[0].consumer_price;
            const productSellingPrice = res.data.product[0].selling_price;
            const shppingMethod = res.data.product[0].shpping_method;
            const shppingPrice = res.data.product[0].shpping_price;
            const productImgs = res.data.product[0].img_url.split(",");
            
            
            let detailName = [];
            let addPrice = [];
            for (let i = 0; i < res.data.product.length; i++) {
                detailName[i] = res.data.product[i].product_detail_name;
                addPrice[i] = res.data.product[i].add_price;
            }

            codes += `
            <div class="product-img">
                <div class="main-img"><img
                        src=${productImgs[0]}
                        alt="main" class="BigImage "></div>
                <div class="sub-img">
                    <ul>`
            for (let i = 1; i < productImgs.length; i++) {
                codes += `
                        <li class="xans-record-">
                            <img src=${productImgs[i]} class="ThumbImage" alt="">
                        </li>
                        `
            }
            codes += `
                    </ul>
                </div>
            </div>`
            codes += `
            <div class="product-info">
                <div class="title">
                    <h2>${productName}</h2>
                </div>
                <div class="product-detail">
                    <ul>
                        <li class=" xans-record-">
                            <div class="tr">상품설명</div>
                            <div class="content">${productExplanation}</div>
                        </li>
                        <li class=" xans-record-">
                            <div class="tr">소비자가</div>
                            <div class="content"><strike>${productConsumerPrice}원</strike></div>
                        </li>
                        <li class=" xans-record-">
                            <div class="tr">판매가</div>
                            <div class="celling-price content">${productSellingPrice}원</div>
                        </li>
                        <li class=" xans-record-">
                            <div class="tr">배송방법</div>
                            <div class="content">${shppingMethod}</div>
                        </li>
                        <li class=" xans-record-">
                            <div class="tr">배송비</div>
                            <div class="content"> <input id="delivery_cost_prepaid" name="delivery_cost_prepaid"
                                    value="P" type="hidden"><strong>${shppingPrice}원</strong> (35,000원 이상 구매 시 무료)</div>

                        </li>
                    </ul>
                </div>
                <div class="shipping"><i class="fas fa-truck-moving"></i>
                    <p><span>지금</span>주문하시면 <br><strong>8/30(월)에 발송</strong>됩니다</p>
                </div>
                <div class="option">
                    <tr>
                        <th scope="row">기본</th>
                        <td><select  class="option-price" option_style="select">
                                <option  value="*" selected="true" link_image="">- [필수] 옵션을 선택해 주세요 -</option>`

            for (let i = 0; i < detailName.length; i++) {
                codes += ` <option value=${i}  link_image="" data-price="${addPrice[i]}" data-detailname="${detailName[i]}">${detailName[i]} (+${addPrice[i]}원)</option>`
            }
            codes += `
                            </select>
                            <p class="value"></p>
                        </td>
                    </tr>
                </div>
                <div class="guideArea">

                    <p class="info ">(최소주문수량 1개 이상<span class=""> / 최대주문수량 100개 이하</span>)</p>

                </div>
                <div id="items">

                </div>
                <div  class="totalPrice">
                    <strong>총 상품금액</strong>(수량) : <span class="total"><strong><em id="totalPrice">0</em></strong> (0개)</span>
                </div>
                <div class="ec-base-button gColumn">

                    <span class="btn-buy" id="btnBuy">바로 구매하기</span>
                    <span id="btnBuy">장바구니 담기</span>
                    <span id="btnBuy">관심상품등록</span>

                </div>
            </div>
            `



            detailArea.innerHTML = codes;
            const selectOption = document.querySelector(".option-price");
            const items = document.querySelector("#items");
            const price = document.querySelector("#totalPrice");
            totalPrice += shppingPrice;
            totalPrice += productSellingPrice;

            const select = document.querySelector('.option-price');
            select.addEventListener('change', function () {
                

                datasetPrice =  Number(selectOption.options[selectOption.selectedIndex].dataset.price);
                totalPrice+=datasetPrice;
                price.innerText =totalPrice;
                items.innerHTML += `
                <div class="item-container" style="font-size:12px; display:flex; align-items:center;border-top:1px solid lightgrey; padding-bottom:10px">
                    <div style="width:300px"> 
                        <p class="info" style="font-weight:600; padding:8px 0px">${productName}</p>  
                        <p class="info">- ${selectOption.options[selectOption.selectedIndex].dataset.detailname}(+${datasetPrice}원)</p>
                    </div>
                    <div style="display:flex; width:110px; align-items:center;">
                        <input type="text" style="width:30px;" id="option_box1_quantity" name="quantity_opt[]" value="1" product-no="106">
                        <div style=" display:flex; flex-direction:column;">
                                <img class="btn-up" style="width:20px" src="//img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif" id="option_box1_up" class="option_box_up" style="display:inline-block;" alt="수량증가">
                                <img class="btn-down" style="width:20px" src="//img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif" id="option_box1_down" class="option_box_down" alt="수량감소">
                        </div>
                        <img style="width:10px; height:10px; margin-left:10px;" src="//img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" alt="삭제" id="option_box1_del" class="option_box_del">
                    </div>
                    <div style="">
                        <p id="selling-price" style="font-weight:600">${productSellingPrice+datasetPrice}원</p>
                    </div>
                </div>`;
                items.style.borderBottom=`1px solid grey`;
                items.style.margin=`10px`;
                select.value = "*";
                const quantitybox = document.querySelectorAll("#option_box1_quantity");
                const sellingPrice = document.querySelector("#selling-price");
                const btnUps = document.querySelectorAll(".btn-up");
                const btnDowns = document.querySelectorAll(".btn-down");
                for(let i=0; i<btnUps.length; i++){
                    btnUps[i].addEventListener("click",()=>{
                        quantitybox[i].value++;
                        sellingPrice.innerText=(productSellingPrice+datasetPrice)*(quantitybox[i].value)+"원";
                    })
                }
                
              
                

            

            });

        });
}