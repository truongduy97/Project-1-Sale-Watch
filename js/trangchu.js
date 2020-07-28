//animation

var noiBat = document.getElementsByClassName("noibat")[0];
var noibatLeft = document.getElementsByClassName("noibat-left")[0];
var noiBatRight = document.getElementsByClassName("noibat-right")[0];
var animationMoveleft = "move-noibat-right";
var animationMoveright = "move-noibat-left";

function animationScrollIndex() {
  var windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  // console.log(windowTop);

  if (windowTop > noiBat.offsetTop) {
    noibatLeft.classList.add(animationMoveleft);
    noiBatRight.classList.add(animationMoveright);
  } else {
    noibatLeft.classList.remove(animationMoveleft);
    noiBatRight.classList.remove(animationMoveright);
  }
}
window.addEventListener("scroll", function(e) {
  animationScrollIndex();
});

//slider
var slideIndex = 0;
var slides = document.getElementsByClassName("slides");
var nextBtn = document.getElementById("sau");
var prevBtn = document.getElementById("truoc");

function hienThiSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
hienThiSlide();
function hienThiSlideTiepTheo() {
  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  hienThiSlide();
}
function hienThiSlideTruoc() {
  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  hienThiSlide();
}
nextBtn.addEventListener("click", function(e) {
  hienThiSlideTiepTheo();
});
prevBtn.addEventListener("click", function(e) {
  hienThiSlideTruoc();
});

setInterval(hienThiSlideTiepTheo, 6000);

// var slideIndexth=0;
// var slideth =document.getElementsByClassName('slide-th');
// var nextBtnth=document.getElementById("sau1");
// var prevBtnth=document.getElementById("truoc1");
// function hienThiSlideTh(){
//     for(i=0;i<slideth.length;i++)
//     {
//         slideth[i+4].style.display="none";
//     }
//     slideth[slideIndexth+4].style.display="block";

// }
// // hienThiSlideTh();
// function hienThiSlideTiepTheoTh(){
//     if(slideIndexth>=slideth.length-1){
//             slideIndexth=0;
//         }
//         else{
//             slideIndexth++;
//         }
//         hienThiSlideTh();
// }
// nextBtn.addEventListener('click',function(e){
//     hienThiSlideTiepTheoTh();
// })

var kichThuoc = document.getElementsByClassName("thuonghieu")[0].clientWidth;
var chuyenSlide = document.getElementsByClassName("thuonghieu-slide")[0];
var nextBtnth = document.getElementById("nextth");
var prevBtnth = document.getElementById("prevth");
var chuyen = 0;
var max = kichThuoc * 4;
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

nextBtnth.addEventListener("click", function(e) {
  Next();
});
prevBtnth.addEventListener("click", function(e) {
  Back();
});
