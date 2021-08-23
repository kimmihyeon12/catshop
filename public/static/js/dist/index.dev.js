"use strict";

console.log("index.js");
var catagory = document.querySelector(".catagory-wrap");
var topBanner = document.querySelector(".top-banner");
var sliderContainer = document.querySelector(".slider-container");
var slideWidth = window.innerWidth;
var sliderlength = document.querySelectorAll('.slider-container img').length;
var count = 0;
var index = 0;
var pageicon = document.querySelectorAll(".pagination span");
document.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY >= 60) {
    catagory.style.position = "fixed";
    topBanner.style.height = "0px";
    catagory.style.backgroundColor = "white";
    catagory.style.borderBottom = "1px lightgrey solid";
  } else {
    catagory.style.position = "unset";
    topBanner.style.height = "50px";
    catagory.style.backgroundColor = "transparent";
    catagory.style.borderBottom = "1px transparent solid";
  }
});
setInterval(function () {
  console.log(index);

  for (var i = 0; i < pageicon.length; i++) {
    if (i == index) {
      console.log(index);
      pageicon[i].style.width = "20px";
      pageicon[i].style.backgroundColor = "black";
    } else {
      pageicon[i].style.width = "8px";
      pageicon[i].style.backgroundColor = "#676363";
    }
  }

  count++;
  index++;

  if (index == 3) {
    index = 0;
  }

  sliderContainer.style.transform = "translate3d(-" + slideWidth * count + "px, 0px, 0px)";

  if (count == 2) {
    count = -1;
  }
}, 3000);