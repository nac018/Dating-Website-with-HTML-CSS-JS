function UserSettings(name, language) {
    this.name = name;
    this.language = language;
}

function loadSettings(userSettings) {
    document.getElementById("name").value = userSettings.name;
    if(userSettings.language) {
        document.getElementById("language").value = userSettings.language;
    }
}

var userSettings = new UserSettings("Bob Jones", "eng");
loadSettings(userSettings);