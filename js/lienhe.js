var fullname = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var address = document.getElementById("address");
var message = document.getElementById("message");

var submitLienhe = document.getElementById("submit");
var erroName = document.getElementById("err-name");
var erroPhone = document.getElementById("err-phone");
var erroEmail = document.getElementById("err-email");
var erroAddress = document.getElementById("err-address");
var erroMessage = document.getElementById("err-message");

// console.log(name123.value);
function validation() {
  // console.log(name123.value);
  // alert(name123.value);

  //name
  if (fullname.value === "") {
    erroName.innerHTML = "Họ và tên không được bỏ trống";
    fullname.style.border = "1.5px solid #e74c3c";
  } else if (fullname.value.length < 5) {
    erroName.innerHTML = "Họ và tên phải lớn hơn 5 kí tự";
    fullname.style.border = "1.5px solid #e74c3c";
  } else {
    erroName.innerHTML = "";
    fullname.style.border = "1.5px solid #2ecc71";
  }

  //phone
  if (isNaN(phone.value) || phone.value.length != 10) {
    erroPhone.textContent = "Số điện thoại không không hợp lệ";
    phone.style.border = "1.5px solid #e74c3c";
  } else {
    erroPhone.textContent = "";
    phone.style.border = "1.5px solid #2ecc71";
  }

  //email
  if (email.value === "") {
    erroEmail.textContent = "Email không được bỏ trống";
    email.style.border = "1.5px solid #e74c3c";
  } else if (emailvalidate(email.value)) {
    erroEmail.textContent = "";
    email.style.border = "1.5px solid #2ecc71";
  } else {
    erroEmail.textContent = "Email không hợp lệ";
    email.style.border = "1.5px solid #e74c3c";
  }

  //address
  if (address.value === "") {
    erroAddress.textContent = "Địa chỉ không được bỏ trống";
    address.style.border = "1.5px solid #e74c3c";
  } else if (address.value.length <= 10) {
    erroAddress.textContent = "Địa chỉ phải lớn hơn 10 kí tự";
    address.style.border = "1.5px solid #e74c3c";
  } else {
    erroAddress.textContent = "";
    address.style.border = "1.5px solid #2ecc71";
  }

  //mesage
  if (message.value === "") {
    erroMessage.textContent = "Lời nhắn không được bỏ trống";
    message.style.border = "1.5px solid #e74c3c";
  } else if (message.value.length <= 10) {
    erroMessage.textContent = "Lời nhắn phải lớn hơn 10 kí tự";
    message.style.border = "1.5px solid #e74c3c";
  } else {
    erroMessage.textContent = "";
    message.style.border = "1.5px solid #2ecc71";
  }
}
submitLienhe.addEventListener("click", function(e) {
  validation();
});

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
