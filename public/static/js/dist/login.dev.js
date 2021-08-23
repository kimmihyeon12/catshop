"use strict";

var id = document.querySelector(".member_id");
var passwd = document.querySelector(".member_passwd");
var loginBtn = document.querySelector("button");
loginBtn.addEventListener("click", function () {
  var req = {
    id: id.value,
    passwd: passwd.value
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  });
});