/**
 * Created by Maithili on 5/5/2016.
 */

function checkConfirmPassword(confirmPassword){
    var Textpassword = document.getElementById('user_pass');
    var ConfPassword = document.getElementById('confirm_pass');
    var password = document.getElementById('user_pass').value;
    var ConfPassVal = document.getElementById('confirm_pass').value;
    var lblPassword = document.getElementById('lblPassword');
    //console.log(confirmPassword + " : " + password);
    if(ConfPassVal=='' || ConfPassVal!=password){
        ConfPassword.style.borderColor ='red';
        ConfPassword.style.borderWidth ='2px';
        lblPassword.innerHTML = "Password does not match!";
    }else{
        ConfPassword.style.borderColor ='green';
        ConfPassword.style.borderWidth ='2px';
        lblPassword.innerHTML = "";
    }

}

//Ajax

var xmlhttpRequest ;

document.getElementById("btnSignup").onclick = handleSubmitButton;

function handleSubmitButton(e){

    console.log("After Submit buttom is clicked. \n Inside handleSubmitButton");
    e.preventDefault();


    var form = document.getElementById("signupForm");

    //var formData = new Object();
    var formData = new FormData(form);

    var name = document.getElementById("name").value;
    var user_Name = document.getElementById("user_Name").value;
    var user_type = document.getElementById("user_type").value;
    var user_description = document.getElementById("user_description").value;
    var user_pass = document.getElementById("user_pass").value;

    xmlhttpRequest = new XMLHttpRequest();
    xmlhttpRequest.onreadystatechange = handleResponse;

    console.log("****"+user_Name);
    var str = "&name="+name+"&user_Name="+user_Name+"&user_type="+user_type+"&user_description="
        +user_description+"&user_pass="+user_pass;

    xmlhttpRequest.open("POST", "/signup");
    xmlhttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlhttpRequest.send(str);
    return false;

}

function handleResponse() {
    console.log("Inside handleResponse: readyState & status is");
    console.log(xmlhttpRequest.readyState+' ' + xmlhttpRequest.status);
    if (xmlhttpRequest.readyState == 4 && xmlhttpRequest.status == 200) {
        document.getElementById("signupForm").reset();
        document.getElementById("saveResult").innerHTML
            = (xmlhttpRequest.responseText +". You can now login.");

        console.log("Form  submitted succesfully.");
    }
    else {
        console.log("Form NOT submitted succesfully.");
    }
}
