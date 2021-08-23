"use strict";
 

const id = document.querySelector(".member_id");
const passwd = document.querySelector(".member_passwd");
const passwdOk = document.querySelector(".member_passwd_ok");
const name = document.querySelector(".member_name");
const phone = document.querySelector(".member_phone");
const email = document.querySelector(".member_email");
const loginBtn = document.querySelector("button");
 
loginBtn.addEventListener("click", () => {
    console.log("click");
    const req = {
        id: id.value,
        passwd: passwd.value,
        passwdOk: passwdOk.value,
        name: name.value,
        phone: phone.value,
        email: email.value,
      
    };
console.log(req);
    fetch("/login" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(req),
    });
})