var existingUsers = localStorage.getItem("users");
existingUsers = JSON.parse(existingUsers);

/*
 * User Object
 */
function User(username, password, name, age, phone, city, ethnicity, profession, sex, aboutMe, prefSex, prefAge, prefEthnicity, prefDistance) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.city = city;
    this.ethnicity = ethnicity;
    this.profession = profession;
    this.sex = sex;
    this.aboutMe = aboutMe;
    this.prefSex = prefSex;
    this.prefAge = prefAge;
    this.prefEthnicity = prefEthnicity;
    this.prefDistance = prefDistance;
    this.userType = "user";
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
    var aboutMe = document.getElementById("about_me").value;

    // partner details
    var prefSex = document.getElementById("part_sex").value;
    var prefAge = document.getElementById("part_age").value;
    var prefEthnicity = document.getElementById("part_ethnicity").value;
    var prefDistance = document.getElementById("city_dist").value;

    var newUser = new User(userName, password, name, age, phone, city, ethnicity, profession, sex, aboutMe, prefSex, prefAge, prefEthnicity, prefDistance);

    if(userExists(newUser)) {
        window.alert("Username already taken!");
    } else {
        existingUsers += newUser;
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
