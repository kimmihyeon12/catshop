"use strict";
 

const id = document.querySelector(".member_id");
const passwd = document.querySelector(".member_passwd");
const loginBtn = document.querySelector("button");
 
loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        passwd: passwd.value
    };
   
    fetch("/login" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(req),
    }).then((res)=> res.json()).then((res)=>{
        if(res.data.success){
            console.log("이동")
            location.href="/";
        }else{
            alert(res.data.message.toString())
        }
 

    })
})