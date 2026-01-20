let passwordField=document.getElementById("passwordField");
let checkBox=document.getElementById("toggleVisibility");
checkBox.onclick=function(){
    if(checkBox.checked){
        passwordField.type="text";
    } else {
        passwordField.type="password";
    }
};