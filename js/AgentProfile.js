var currUser = JSON.parse(localStorage.getItem("currUser"));
var existingUsers = JSON.parse(localStorage.getItem("users"));

loadUserData();

function updateUserData() {

    console.log(currUser);

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
            existingUsers[i]['description'] = document.getElementById("description").value;
            existingUsers[i]['experience'] = document.getElementById("experience").value;

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
    document.getElementById("description").value = currUser.description;
    document.getElementById("experience").value = currUser.experience;
}


