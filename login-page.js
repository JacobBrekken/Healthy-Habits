const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "test@unt.edu" && password === "CSCE3220"){
        alert("You have Successfully Logged in.")
        window.location.href = "./WorkoutsPageDesktop.html";
    }
    else if(username === "test@yahoo.com" && password === "1234"){
        alert("You have Successfully Logged in.")
        window.location.href = "./WorkoutsPageDesktop.html";
    }
    else{
        loginErrorMsg.style.opacity = 1;
    }
})