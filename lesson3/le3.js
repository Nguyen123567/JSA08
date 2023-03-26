var index = 0;
var slides = document.getElementsByClassName("picture")

const container = document.getElementById("container")
const login = document.getElementById("login")
const signup = document.getElementById("signup")

const su_user = document.getElementById("su_user")
const su_pass = document.getElementById("su_pass")
const su_rppass = document.getElementById("su_rppass")
const li_user = document.getElementById("li_user")
const li_pass = document.getElementById("li_pass")
var user = "";
var pass = "";

slides[0].style.display = "block"



function showSlideAuto() { //slideshow banner
    setInterval(function () {
        index++;
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }

        if (index > 2) {
            index = 0;
        }
        slides[index].style.display = "block"
    }, 2000)
}


function showMessage() {
    var cf_dathang = confirm("Xác nhận đặt hàng!")
    if (cf_dathang == true) {
        alert("Đặt đồ thành công!")
    } else {
        alert("Đã hủy yêu cầu!")
    }
}


function showLogin() {
    login.style.display = "flex"
    container.style.display = "none"
    signup.style.display = "none"
}
function showSignup() {
    login.style.display = "none"
    container.style.display = "none"
    signup.style.display = "flex"
}

function showcontainer() {
    login.style.display = "none"
    container.style.display = "block"
    signup.style.display = "none"
}

function handleSignUp() {
    user = su_user.value;
    pass = su_pass.value;
    alert("Dky TC")
    showLogin()
    console.log(user);
    console.log(pass);
}

function handleLogIn() {
    if (li_user.value == user && li_pass.value == pass) {
        alert("Đăng nhập thành công")
        showcontainer() 
    }
    else {
        alert("Đăng nhập thất bại!")
    }
}


showSlideAuto()
