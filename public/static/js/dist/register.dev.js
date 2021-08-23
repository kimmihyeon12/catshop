"use strict";

var id = document.querySelector(".member_id");
var passwd = document.querySelector(".member_passwd");
var passwdOk = document.querySelector(".member_passwd_ok");
var name = document.querySelector(".member_name");
var phone = document.querySelector(".member_phone");
var email = document.querySelector(".member_email");
var loginBtn = document.querySelector("button");
loginBtn.addEventListener("click", function () {
  console.log("click");
  var req = {
    id: id.value,
    passwd: passwd.value,
    passwdOk: passwdOk.value,
    name: name.value,
    phone: phone.value,
    email: email.value
  };
  console.log(req);
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
});