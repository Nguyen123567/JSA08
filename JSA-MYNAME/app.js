let listUsers = []
let listPasswords = []

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
function signup(){
    let si_username = document.querySelector(".si_username").value;
    let si_password = document.querySelector(".si_password").value;

    listUsers.push(si_username)
    listPasswords.push(si_password)

    localStorage.setItem("listUsers", JSON.stringify(listUsers))
    localStorage.setItem("listPasswords", JSON.stringify(listPasswords))
    window.open('2.html');

 
}

function login(){
    let li_username = document.querySelector(".li_username").value;
    let li_password = document.querySelector(".li_password").value;

    let arrUser = JSON.parse(localStorage.getItem("listUsers"))
    let arrPassword = JSON.parse(localStorage.getItem("listPasswords"))

    for(var i = 0; i<arrUser.length; i++){
        if(li_username === arrUser[i]){
            //kiểm tra tiếp xem pasword cho trùng k
            if(li_password === arrPassword[i]){
                // dang nhap
                // alert("Login sucessfuly!")
                window.open('index.html');
                break;
            }else{
                //bao sai mat khau
                alert("Login fail!")
                break;
            }
        }else{
            if(i == arrUser.length - 1){
                alert("User not found!")
            }
        }
    }
   
}