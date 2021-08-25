"use strict";


const id = document.querySelector(".member_id");
const idMessage = document.querySelector("#id");
const passwd = document.querySelector(".member_passwd");
const passwdMessage = document.querySelector("#passwd");
const passwdOk = document.querySelector(".member_passwd_ok");
const name = document.querySelector(".member_name");
const phone = document.querySelector(".member_phone");
const phoneMessage = document.querySelector("#phone");
const email = document.querySelector(".member_email");
const emailMessage = document.querySelector("#email");
const loginBtn = document.querySelector("button");

console.log();

id.addEventListener("change", async (event) => {
    const res = await fetch(`/checkId/${id.value}`)
        .then((res) => res.json())
        .then((res) => {
            res.data.success ? idMessage.style.color = `red` : idMessage.style.color = `black`;
            idMessage.textContent = `${res.data.message}. `;
        })
});

passwdOk.addEventListener("change", async (event) => {
    if (passwd.value === passwdOk.value) {
        passwdMessage.textContent = `비밀번호가 일치합니다`;
        passwdMessage.style.color = `black`;
    } else {
        passwdMessage.textContent = `비밀번호가 일치하지 않습니다`;
        passwdMessage.style.color = `red`;
    }
});


phone.addEventListener("change", async (event) => {
 
    const res = await fetch(`/checkPhone/${phone.value}`)
    .then((res) => res.json())
    .then((res) => {
         res.data.success ? phoneMessage.style.color = `red` : phoneMessage.style.color = `black`;
        phoneMessage.textContent = `${res.data.message}. `;
    })
});

email.addEventListener("change", async (event) => {
 
    const res = await fetch(`/checkEmail/${email.value}`)
    .then((res) => res.json())
    .then((res) => {
         res.data.success ? emailMessage.style.color = `red` : emailMessage.style.color = `black`;
         emailMessage.textContent = `${res.data.message}. `;
    })
});

loginBtn.addEventListener("click", async () => {

    const req = {
        id: id.value,
        passwd: passwd.value,
        passwdOk: passwdOk.value,
        name: name.value,
        phone: phone.value,
        email: email.value,

    };

    const res = await fetch("/registerform", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
  
        if(res.data.success){
            alert("냥품명품에 오신것을 환영합니다");
            location.href="/";
        }else{
            alert(res.data.message.toString())
        }
       
     


    })

})