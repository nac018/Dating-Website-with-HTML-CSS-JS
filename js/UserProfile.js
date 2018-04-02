var currUser = JSON.parse(localStorage.getItem("currUser"));
var existingUsers = JSON.parse(localStorage.getItem("users"));

loadUserData();

function updateUserData() {

    for(var i = 0; i < existingUsers.length; i++) {
        var user = existingUsers[i];
        if(user.username === currUser.username) {
            existingUsers[i]['name'] = document.getElementById("name").value;
            existingUsers[i]['age'] = document.getElementById("age").value;
            existingUsers[i]['phone'] = document.getElementById("phone").value;
            existingUsers[i]['city'] = document.getElementById("city").value;
            existingUsers[i]['ethnicity'] = document.getElementById("ethnicity").value;
            existingUsers[i]['profession'] = document.getElementById("prof").value;
            existingUsers[i]['sex'] = document.getElementById("sex").value;
            existingUsers[i]['aboutMe'] = document.getElementById("about_me").value;

            existingUsers[i]['prefSex'] = document.getElementById("part_sex").value;
            existingUsers[i]['prefAge'] = document.getElementById("part_age").value;
            existingUsers[i]['prefEthnicity'] = document.getElementById("part_ethnicity").value;
            existingUsers[i]['prefDistance'] = document.getElementById("city_dist").value;

            localStorage.setItem("users", JSON.stringify(existingUsers));
            localStorage.setItem("currUser", JSON.stringify(existingUsers[i]));

            return;
        }
    }
}

function loadUserData() {
    document.getElementById("name").value = currUser.name;
    document.getElementById("age").value = currUser.age;
    document.getElementById("phone").value = currUser.phone;
    document.getElementById("city").value = currUser.city;
    document.getElementById("ethnicity").value = currUser.ethnicity;
    document.getElementById("prof").value = currUser.profession;
    document.getElementById("sex").value = currUser.sex;
    document.getElementById("about_me").value = currUser.aboutMe;
    document.getElementById("part_sex").value = currUser.prefSex;
    document.getElementById("part_age").value = currUser.prefAge;
    document.getElementById("part_ethnicity").value = currUser.prefEthnicity;
    document.getElementById("city_dist").value = currUser.prefDistance;
}

