var existingUsers = localStorage.getItem("users");
existingUsers = JSON.parse(existingUsers);

function Agent(username, password, name, age, phone, city, ethnicity, profession, sex, description, experience) {
    this.username = username;
    this.name = name;
    this.password = password;
    this.age = age;
    this.phone = phone;
    this.city = city;
    this.ethnicity = ethnicity;
    this.profession = profession;
    this.sex = sex;
    this.description = description;
    this.experience = experience;
    this.userType = "agent";
}

function onSubmit() {
    // user details
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var profession = document.getElementById("prof").value;
    var sex = document.getElementById("sex").value;
    var description = document.getElementById("description").value;
    var experience = document.getElementById("experience").value;

    var newAgent = new Agent(userName, password, name, age, phone, city, ethnicity, profession, sex, description, experience);

    if(userExists(newAgent)) {
        window.alert("Username already taken!");
    } else {
        existingUsers += newAgent;
        window.alert("Successfully registered account!");
        window.location = "../html/Login.html";
    }
}

/*
 * Iterate over existing users to check if user already exists
 */
function userExists(user) {
    if(existingUsers != null) {
        for(var i = 0; i < existingUsers.length; i++) {
            var currUser = existingUsers[i];
            if(currUser.username.toLowerCase() === user.username.toLowerCase()) {
                return true;
            }
        }

        existingUsers.push((user));
        localStorage.setItem("users", JSON.stringify(existingUsers));

    } else {
        localStorage.setItem("users", JSON.stringify([user]));
    }

    return false;
}
