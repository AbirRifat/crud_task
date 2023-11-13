function login() {
    var email = document.getElementById("emailField").value;
    var password = document.getElementById("passwordField").value;

    
    if (email === "abirrifat21@gmail.com" && password === "12345") {
       
        window.location.href = "crud.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}


