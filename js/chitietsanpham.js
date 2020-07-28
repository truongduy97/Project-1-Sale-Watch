// var kichThuoc = document.getElementsByClassName("imgchitietsp")[0].clientWidth;
var kichThuoc = 600;
var chuyenSlide = document.getElementsByClassName("slidechitiet")[0];
var nextBtnsp = document.getElementById("sau");
var prevBtnsp = document.getElementById("truoc");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var chuyen = 0;
var max = kichThuoc * 2;
console.log(kichThuoc);
function Next() {
  if (chuyen < max) {
    chuyen += kichThuoc;
  } else {
    chuyen = 0;
  }

  chuyenSlide.style.marginLeft = "-" + chuyen + "px";
}

function Back() {
  if (chuyen === 0) {
    chuyen = max;
  } else {
    chuyen -= kichThuoc;
  }
  chuyenSlide.style.marginLeft = "-" + chuyen + "px";
}

function optionFunc() {
  let i = Number(this.getAttribute("option-index"));
  chuyen = i + 1;
  chuyenSlide.style.marginLeft = "-" + chuyen + "px";
}

nextBtnsp.addEventListener("click", function(e) {
  Next();
});
prevBtnsp.addEventListener("click", function(e) {
  Back();
});
option1.addEventListener("click", function(e) {
  chuyenSlide.style.marginLeft = "-" + 0 + "px";
});
option2.addEventListener("click", function(e) {
  chuyenSlide.style.marginLeft = "-" + 600 + "px";
});
option3.addEventListener("click", function(e) {
  chuyenSlide.style.marginLeft = "-" + 1200 + "px";
});
