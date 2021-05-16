const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
var alert = document.getElementById('alert')
let mail= document.getElementById('email')

function notMail() {
    
    if(mail.value.length == 0){
alert.innerHTML = "Please fill in your mail adress"
}
 else if (mail.value.length >= 0) {
    alert.innerHTML = " "
}
}
function regexCheck(){
    if(mail.value.match(regex)){
        alert.innerHTML = " "
    }
    else {
        alert.innerHTML = "Please fill in correct mail adress "
    }
}