"use strict";

const catagory = 2;
const description = document.querySelector(".description");
let codes = ``;
window.onload = async () => {
    const res = await fetch(`/getproducts/${catagory}`)
        .then((res) => res.json())
        .then((res) => {
            const datas = res.data.products;
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

toy.addEventListener("click",async ()=>{
    console.log("toy click");
    const res = await fetch(`/getsubproducts/${4}`)
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
});
life.addEventListener("click",async ()=>{
    console.log("toy click");
    const res = await fetch(`/getsubproducts/${5}`)
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
snack.addEventListener("click",async ()=>{
    console.log("toy click");
    const res = await fetch(`/getsubproducts/${6}`)
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