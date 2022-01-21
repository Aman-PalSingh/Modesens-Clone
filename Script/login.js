var count = 0;
document.querySelector("form").addEventListener("submit", login)
var users = JSON.parse(localStorage.getItem("userDataBase"))
function login(event)
{
    
    var flag = false;
    event.preventDefault();
     var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    console.log(email,password)
    for (var i = 0; i < users.length; i++)
    {
        if (users[i].emailId == email && users[i].pass == password)
        {
            flag = true;
            var lgUser = users[i].emailId;
            localStorage.setItem("loggedUser", lgUser);
        }
    }
    if (flag == true)
    {   alert("Login Sucessful")
        window.location.href = "home.html";
    } else {
        if (count == 0) {
            count++;       
            var msg = document.createElement("p");
            msg.textContent = "Invalid Credentials"
            document.querySelector(".msg").append(msg);
        }
    }
}