// User Login

// Add Event Listener
document.getElementById("log-btn").addEventListener("click", userlogin);

// Add Event Function
function userlogin () {
    // Get Input
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    // Check Info
    if (username === "admin" && password === "1234") {
        alert ("Login Successful");
    } else if (username !== "admin") {
        alert ("Invalid Username");
    } else if (username === "admin" && password !== "1234") {
        alert ("Invalid Password");
    }
}