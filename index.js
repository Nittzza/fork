var currentRoom = "start";
var commands = ["go", "pickup", "inventory", "talk"];
var inventory = ["butterflies", "glitters", "lipstick"];

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}

function showHelp() {
    $('#game-text').append("<p> Here are the possible commands:</p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function showInventory() {
    if (inventory.length === 0) {
        $('#game-text').append("<p> You are not carrying anything! </p>");
        return;
    }
    $('#game-text').append("<p> Here is your inventory:</p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function playerInput(input) {
    // Split input into words
    var words = input.split(" ");

    // Check if the first word is a valid command
    var command = words[0];
    if (commands.includes(command)) {
        switch (command) {
            case "go":
                // If "go" is the command, check for the direction
                var dir = words[1];
                changeRoom(dir);
                break;
            case "help":
                showHelp();
                break;
            case "inventory":
                showInventory();
                break;
            default:
                $('#game-text').append("<p>Invalid command!</p>");
        }
    } else {
        // If the first word is not a command, treat it as a direction and try to change the room
        changeRoom(command);
    }
}

// Handle submit button click
$("#submit-btn").click(function () {
    var value = $('#user-input').val().toLowerCase();
    $('#user-input').val("");
    playerInput(value);
});
 // Handle Enter key press
 $("#user-input").keypress(function (e) {
    if (e.which === 13) {  // 13 is the Enter key code
        var value = $('#user-input').val().toLowerCase();
        $('#user-input').val("");
        playerInput(value);
    }
});


$(document).ready(function () {
    $('#game-text').append("<p>" + rooms.start.description + "</p>");
});
