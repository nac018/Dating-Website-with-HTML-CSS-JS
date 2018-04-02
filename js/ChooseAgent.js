function directToHome() {
    window.location = "../html/UserProfile.html";
}

function directToChat() {
    window.location = "../html/Chat.html";
}

function directToAgent() {
    window.location = "../html/Agent.html";
}

function directToRequested() {
    window.location = "../html/Requested.html";
}

function AgentReview(rating) {
    this.rating = rating;
}

function loadSelectedAgent() {
    var selAgent = JSON.parse(localStorage.getItem("selectedAgent"));
    document.getElementById("name").innerHTML = selAgent.name;
    document.getElementById("rating").innerHTML = selAgent.stars;
    document.getElementById("location").innerHTML = selAgent.address;
    document.getElementById("agent_photo").src = selAgent.image_url;

    loadReviews(reviews)
}

function loadReviews(reviews) {

    var reviewDiv = document.getElementById("reviews");

    if(reviews == null) {
        return;
    }

    for (var i = 0; i < reviews.length; i++) {
        var review = reviews[i];
        reviewDiv.innerHTML += ' <a href=""><div class="panel"><h3>Review ' +
            (i + 1) + ':</h3><h3>Rating: ' + review.rating + '</h3></div></a>'
    }
}

var review1 = new AgentReview('★★★☆☆');
var review2 = new AgentReview('★★★★★');
var review3 = new AgentReview('★★★★☆');
var review4 = new AgentReview('★★☆☆☆');

var reviews = [review1, review2, review3, review4];

loadSelectedAgent();
