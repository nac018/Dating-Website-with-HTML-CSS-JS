var existingUsers = JSON.parse(localStorage.getItem("users"));
console.log(existingUsers);

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    validateCredentials(username, password);
}

function validateCredentials(username, password) {
    var userFound = false;

    for (var i = 0; i < existingUsers.length; i++) {
        var currUser = existingUsers[i];
        if (currUser.username.toLowerCase() === username.toLowerCase()) {
            userFound = true;
            if (currUser.password === password) {
                localStorage.setItem("currUser", JSON.stringify(existingUsers[i]));
                toMainScreen(currUser.userType);
            } else {
                window.alert("Incorrect password!");
            }

            return true;
        }
    }

    window.alert("Username not found!");

    return false;
}

function toMainScreen(userType) {
    if(userType === 'agent') {
        window.location = "../html/AgentProfile.html";
    } else {
        window.location = "../html/UserProfile.html";
    }
}
