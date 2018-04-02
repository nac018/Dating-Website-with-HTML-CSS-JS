function directToHome() {
    window.location = "../html/UserProfile.html";
}

function directToChat() {
    window.location = "../html/Chat.html";
}

function directToMatched() {
    window.location = "../html/Matched.html";
}


function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function popup(popupDiv) {

    var list = popupDiv.firstElementChild;
    var popup = list.children[1];

    popup.classList.toggle("show");
}

function loadClients(clients) {
    for (var i = 0; i < clients.length; i++) {
        var clt = clients[i];

        document.getElementById("client").innerHTML += '<div class="popup" onclick="popup(this)">' +
            '<li>' +
            '<a href = "#"><span>' + clt.name + '</span><button class="reset" type="reset" style="" onclick="directToMatched()">></button></a>' +
            '<span class="popuptext" id="myPopup">' + clt.sex + '<br/' + clt.age + '>' + clt.ethnicity + '<br> ' + clt.phone + '</br></span>' +
            '</li>' +
            '</div>';
    }
}


function UniqueClient(name, sex, age, ethnicity, phone) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.ethnicity = ethnicity;
    this.phone = phone;
}

var client1 = new UniqueClient("Bill", "Sexuality: M", "Age: 28", "Ethnicity: Asian", "Phone: (111)111-1111");
var client2 = new UniqueClient("Rachel", "Sexuality: F", "Age: 23", "Ethnicity: White", "Phone: (222)222-2222");
var client3 = new UniqueClient("Jenn", "Sexuality: F", "Age: 33", "Ethnicity: Asian", "Phone: (333)333-3333");
var client4 = new UniqueClient("Jordan", "Sexuality: M", "Age: 20", "Ethnicity: African American", "Phone: (444)444-4444");
var client5 = new UniqueClient("Aviana", "Sexuality: F", "Age: 22", "Ethnicity: Latino", "Phone: (555)555-5555");

loadClients([client1, client2, client3, client4, client5]);