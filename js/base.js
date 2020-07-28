//animation
var boxsp = document.getElementsByClassName("boxsp");
var animationSp = "boxsp-move";

function animationScroll() {
  var windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  for (i = 0; i < boxsp.length; i++) {
    if (windowTop > boxsp[i].offsetTop) {
      boxsp[i].classList.add(animationSp);
    } else {
      boxsp[i].classList.remove(animationSp);
    }
  }
}

//nav scroll
var nav = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function(e) {
  var scrollY = document.documentElement.scrollTop;

  var goUp = document.getElementsByClassName("go-up")[0];

  animationScroll();

  if (window.pageYOffset > 170) {
    nav.style.position = "fixed";
    nav.style.top = "0px";
  } else {
    nav.style.position = "absolute";
    nav.style.top = "170px";
  }
  if (scrollY >= 500) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
});

//validation Dangki
var emailDangki = document.getElementById("email-dangki");
var passDangki = document.getElementById("password-dangki");
var nhaplaipasDangki = document.getElementById("nhaplaipass-dangki");
var dangkiSubmit = document.getElementById("dangki-submit");
var errEmailDangki = document.getElementById("err-email-dangki");
var errPasDangki = document.getElementById("err-password-dangki");
var errNhaplai = document.getElementById("err-nhaplaipass");

dangkiSubmit.addEventListener("click", function(e) {
  validationDangki();
});
function validationDangki() {
  if (emailDangki.value === "") {
    errEmailDangki.textContent = "Email không được bỏ trống";
    emailDangki.style.border = "1.5px solid #e74c3c";
  } else if (emailvalidate(emailDangki.value)) {
    errEmailDangki.textContent = "";
    emailDangki.style.border = "1.5px solid #2ecc71";
  } else {
    errEmailDangki.textContent = "Email không hợp lệ";
    emailDangki.style.border = "1.5px solid #e74c3c";
  }

  if (passDangki.value === "") {
    errPasDangki.textContent = "Password không được bỏ trống";
    passDangki.style.border = "1.5px solid #e74c3c";
  } else if (passwordvalidate(passDangki.value)) {
    errPasDangki.textContent = "";
    passDangki.style.border = "1.5px solid #2ecc71";
  } else {
    errPasDangki.textContent = "Password không hợp lệ";
    passDangki.style.border = "1.5px solid #e74c3c";
  }

  if (nhaplaipasDangki.value === "") {
    errNhaplai.textContent = "Password không được bỏ trống";
    nhaplaipasDangki.style.border = "1.5px solid #e74c3c";
  } else if (passDangki.value === nhaplaipasDangki.value) {
    errNhaplai.textContent = "";
    nhaplaipasDangki.style.border = "1.5px solid #2ecc71";
  } else {
    errNhaplai.textContent = "Password không trùng khớp";
    nhaplaipasDangki.style.border = "1.5px solid #e74c3c";
  }
}
function emailvalidate(email) {
  var count = 0;
  var pos = 0;
  for (i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      count++;
      pos = i;
    }
  }
  return count === 1 && pos !== 0 && pos !== email.length - 1;
}
function passwordvalidate(pass) {
  if (pass.length >= 6) {
    for (i = 0; i < pass.length; i++) {
      if (pass[i] >= "A" && pass[i] <= "Z") {
        return true;
      }
    }
  }
  return false;
}
//validation Dangnhap
var emailDangnhap = document.getElementById("email-dangnhap");
var passDangnhap = document.getElementById("password-dangnhap");
var dangnhapSubmit = document.getElementById("dangnhap-submit");
var errEmailDangnhap = document.getElementById("err-email-dangnhap");
var errPasDangnhap = document.getElementById("err-password-dangnhap");

dangnhapSubmit.addEventListener("click", function(e) {
  validationDangnhap();
});
function validationDangnhap() {
  if (emailDangnhap.value === "") {
    errEmailDangnhap.textContent = "Email không được bỏ trống";
    emailDangnhap.style.border = "1.5px solid #e74c3c";
  } else if (emailvalidate(emailDangnhap.value)) {
    errEmailDangnhap.textContent = "";
    emailDangnhap.style.border = "1.5px solid #2ecc71";
  } else {
    errEmailDangnhap.textContent = "Email không hợp lệ";
    emailDangnhap.style.border = "1.5px solid #e74c3c";
  }

  if (passDangnhap.value === "") {
    errPasDangnhap.textContent = "Password không được bỏ trống";
    passDangnhap.style.border = "1.5px solid #e74c3c";
  } else if (passwordvalidate(passDangnhap.value)) {
    errPasDangnhap.textContent = "";
    passDangnhap.style.border = "1.5px solid #2ecc71";
  } else {
    errPasDangnhap.textContent = "Password không hợp lệ";
    passDangnhap.style.border = "1.5px solid #e74c3c";
  }
}

//dang nhap dang ki
var dangnhap = document.getElementById("dangnhap");
var dangki = document.getElementById("dangki");

var modaldangnhap = document.getElementById("modal-dangnhap");
var modaldangki = document.getElementById("modal-dangki");
var close = document.getElementsByClassName("close");
var trolai = document.getElementsByClassName("btn-trolai");
var formswitch = document.getElementsByClassName("form-switch");

dangnhap.addEventListener("click", function(e) {
  modaldangnhap.style.display = "block";
  nav.style.position = "static";
});

dangki.addEventListener("click", function(e) {
  modaldangki.style.display = "block";
  nav.style.position = "static";
});

formswitch[1].addEventListener("click", function(e) {
  modaldangnhap.style.display = "none";
  modaldangki.style.display = "block";
});

formswitch[0].addEventListener("click", function(e) {
  modaldangki.style.display = "none";
  modaldangnhap.style.display = "block";
});

close[1].addEventListener("click", function(e) {
  modaldangnhap.style.display = "none";
});

close[0].addEventListener("click", function(e) {
  modaldangki.style.display = "none";
});

trolai[0].addEventListener("click", function(e) {
  modaldangki.style.display = "none";
});
trolai[1].addEventListener("click", function(e) {
  modaldangnhap.style.display = "none";
});
