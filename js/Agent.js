function directToHome() {
    window.location = "../html/UserProfile.html";
}

function directToChat() {
    window.location = "../html/Chat.html";
}

function directToChooseAgent(selectButton) {
    window.location = "../html/ChooseAgent.html";

    var agentRightMostPanel = selectButton.parentNode.parentNode;
    var agentContainer = agentRightMostPanel.parentNode;
    var agentIndex = Array.prototype.indexOf.call(agentContainer.children, agentRightMostPanel);
    var selectedAgent = agents[agentIndex];

    localStorage.setItem("selectedAgent", JSON.stringify(selectedAgent));
}

function loadAgents(agents) {
    for (var i = 0; i < agents.length; i++) {
        var agt = agents[i];

        document.getElementById("agentContainer").innerHTML +=
            '<div class="agent">' +
                '<div class="agent_left_panel">' +
                    '<img class="agent_photo" src="' + agt.image_url + '" alt="">' +
                '</div>' +
            '<div class="agent_right_panel">' +
                '<h3>' + agt.name + '</h3>' +
                '<p>' + agt.stars + '</p>' +
                '<h5>' + agt.address + '</h5>' +
            '</div>' +
            '<div class="agent_rightmost_panel">' +
                '<button type="reset" style="width: 35px; height: 35px; margin-top: 55px; font-weight: bold" onclick="directToChooseAgent(this)">></button>' +
            '</div>' +
            '</div>';
    }
}

function UniqueAgent(name, stars, address, image_url) {
    this.name = name;
    this.stars = stars;
    this.address = address;
    this.image_url = image_url;
}

var agent1 = new UniqueAgent("John", "★★★☆☆", "San Mateo, CA", "../resources/default_Profile.jpg");
var agent2 = new UniqueAgent("Reggin", "★★★★☆", "Oakland, CA", "../resources/default_Profile.jpg");
var agent3 = new UniqueAgent("Claire", "★★☆☆☆", "San Francisco, CA", "../resources/default_Profile.jpg");
var agent4 = new UniqueAgent("Isaac", "★★★★★", "San Diego, CA", "../resources/default_Profile.jpg");

var agents = [agent1, agent2, agent3, agent4];

loadAgents(agents);
