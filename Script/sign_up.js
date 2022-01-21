document.querySelector("form").addEventListener("submit", formSubmit)
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];

function formSubmit(event)
{
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    
    var userData = {
        emailId: email,
        pass: password,
    };
    console.log(JSON.parse(localStorage.getItem("userDataBase")))
    userStack.push(userData);
    localStorage.setItem("userDataBase", JSON.stringify(userStack));
    alert("Sign Up Succesfull");
    window.location.href = "login.html"
}

