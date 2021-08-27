"use strict";

const catagory = 1;
const description = document.querySelector(".description");
const toy = document.querySelector("#toy");
const life = document.querySelector("#life");
const snack = document.querySelector("#snack");
let codes = ``;
window.onload = async () => {
    const res = await fetch(`/getproducts/${catagory}`)
        .then((res) => res.json())
        .then((res) => {
            const datas = res.data.products;
            for (let data of datas) {
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
            description.innerHTML = codes;
        });   
}
toy.addEventListener("click",async ()=>{
    console.log("toy click");
    const res = await fetch(`/getproducts/${2}`)
    .then((res) => res.json())
    .then((res) => {
        description.innerHTML = ``;
        codes ='';
        const datas = res.data.products;
        for (let data of datas) {
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
        description.innerHTML = codes;
    });
})