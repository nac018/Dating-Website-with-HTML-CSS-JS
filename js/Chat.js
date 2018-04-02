function Message(text, timestamp, photoUrl, user_type) {
    this.text = text;
    this.timestamp = timestamp;
    this.photoUrl = photoUrl;
    this.user_type = user_type;
}

function Friend(name, image_url, messageHistory) {
    this.name = name;
    this.image_url = image_url;
    this.messageHistory = messageHistory;
}

function loadChatHistory(history) {
    for (var i = 0; i < history.length; i++) {
        populateChat(history[i]);
    }
}

function populateChat(message) {
    var messageHTML;

    if (message.user_type === "friendMessage") {
        messageHTML = '<div class="friend_message"><img class="profile_photo" src="' + message.photoUrl + '" alt="Avatar">' +
            '<p class="left">' + message.text + '</p><span class="time-right">' + message.timestamp + '</span></div>';
    } else {
        messageHTML = '<div class="user_message"><img class="profile_photo_right" src="' + message.photoUrl + '" alt="Avatar">' +
            '<p class="right">' + message.text + '</p><span class="time-left">' + message.timestamp + '</span></div>';
    }

    document.getElementById("chat").innerHTML += messageHTML;
}

function sendMessage(event) {

    var time = new Date();

    var chatBox = document.getElementById("chat_text");
    var message = new Message(chatBox.value, time.toLocaleTimeString(), "../resources/hummingbird.png", "userMessage");

    // if the enter key was pressed
    if (event.keyCode === 13 && chatBox.value !== '') {
        populateChat(message);
        chatBox.value = "";
    }
}

function loadFriendsList(friends) {
    for (var i = 0; i < friends.length; i++) {
        var friend = friends[i];

        document.getElementById("friend_panel").innerHTML += '<div class="user_select" onclick="loadChat(this)"><img class="profile_photo" src="' + friend.image_url +
            '" alt="profile_photo" ><p class="friend_name">' + friend.name + '</p></div>';
    }
}

function loadChat(div) {
    //find the first instance of a paragraph (contains the person's name).
    var friendName = div.getElementsByTagName('p')[0].innerHTML;
    document.getElementById("friend_name").innerHTML = friendName;

    // TODO: if actually implementing, query for chats with the friend and populate the chat.
}

// old chat from history
var firstMessage = new Message("Hi, my name is John!", "11:00:02 AM", "../resources/hummingbird.png", "userMessage");
var secondMessage = new Message("Hello there, my name is Bob! How can I help you?", "11:01:00 AM", "../resources/hummingbird.png", "friendMessage");

var firstFriend = new Friend("Tom Jones", 'https://media.istockphoto.com/photos/feeling-great-about-my-corporate-choices-picture-id507296326');
var secondFriend = new Friend("Johnny Bravo", 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3946332.jpg');
var thirdFriend = new Friend("Anthony Lee", 'http://www.recyclesourcellc.com/images/stockp.png');
var fourthFriend = new Friend("Johnson Johnson", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrAvPUbN63ARQ9l-Z5GaFkRTKv8ZK15n5Q-SNF77SFedahHon');

loadChatHistory([firstMessage, secondMessage]);
loadFriendsList([firstFriend, secondFriend, thirdFriend, fourthFriend]);

