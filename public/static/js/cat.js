"use strict";

const catagory = 2;
const description = document.querySelector(".description");

window.onload = async () => {
    console.log("dog page");
    const res = await fetch(`/getproducts/${catagory}`)
        .then((res) => res.json())
        .then((res) => {
            const datas = res.data.products;
            let codes = ``;
            for (let data of datas) {
                console.log(data);
                codes += `<li>
        <img src=${data.img_url}
            id="eListPrdImage51_2" alt="냥냥 펀치 토이볼">
        <h1> ${data.product_name}</h1>
        <ul class="price">
            <li class="discount"> ${data.consumer_price}원</li>
            <li> ${data.selling_price}원</li>
        </ul>
    
        <span class="review">
            리뷰 121
        </span>
    </li>`;
            };
            console.log(codes);

            description.innerHTML = codes;



        });
}