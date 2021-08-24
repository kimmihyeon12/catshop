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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    if (res.data.success) {
      console.log("이동");
      location.href = "/";
    } else {
      alert(res.data.message.toString());
    }
  });
});