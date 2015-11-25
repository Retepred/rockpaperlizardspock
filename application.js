var choices = ["Rock", "Paper", "Sissors", "Lizard", "Spock"];
function randomWeapon() {
    return choices[Math.floor(Math.random()*choices.length)]
};

var wins = 0
var losses = 0

document.getElementById("scores").innerHTML = "wins:", wins;
document.getElementById("scores2").innerHTML = "losses:", losses;

function winCounter() {
   wins = wins + 1
};

function lossCounter() {
   losses = losses + 1
};

function finish() {
    alert("Congratulations on beating the game!")
};

function finishLoss() {
    alert("Commiserations on losing like a silly little sausage!")
};

function endgame() {
    if (wins == 5) {
        finish();
    }
    else if (losses == 5) {
        finishLoss();
    }
}

endgame()

$("#Rock").click(function() {
    var computer = randomWeapon();
    if (computer == "Rock") {
        alert("It's a DRAW!!");
    }
    else if (computer == "Paper") {
        lossCounter();
        alert("The Robot kills you with Paper.");
    }
    else if (computer == "Spock") {
        lossCounter();
        alert("The Robot kills you with Spock.");
    }
    else if (computer == "Lizard") {
        winCounter();
        alert("Your rock kills the Robot's Lizard!");
    }
    else if (computer == "Scissors") {
        winCounter();
        alert("Your rock crushes the Robot's Scissors!");
    }
})

$("#Paper").click(function() {
    var computer = randomWeapon();
    if (computer == "Paper") {
       alert("It's a DRAW!!");
    }
    else if (computer == "Rock") {
        winCounter();
        alert("Your Paper wraps harmlessly around the Robot's rock, and yet you win..");
    }
    else if (computer == "Spock") {
        winCounter();
        alert("You disprove Spock with paper..");
    }
    else if (computer == "Lizard") {
        lossCounter();
        alert("The Robot's Lizard eats your paper..");
    }
    else if (computer == "Scissors") {
        lossCounter();
        alert("The Robot's Scissors slice up your silly paper.");
    }
})

$("#Scissors").click(function() {
    var computer = randomWeapon();
    if (computer == "Scissors") {
        alert("It's a DRAW!!");
    }
    else if (computer == "Rock") {
        lossCounter();
        alert("The Robot's rock crushes your silly Scissors..");
    }
    else if (computer == "Spock") {
        lossCounter();
        alert("The Robot's Spock backhands your Scissors into oblivion..");
    }
    else if (computer == "Lizard") {
        winCounter();
        alert("Your Scissors decapitate the Robot's pet Lizard.");
    }
    else if (computer == "Paper") {
        winCounter();
        alert("Your Scissors slice up the Robot's paper.");
    }
})

$("#Lizard").click(function() {
    var computer = randomWeapon();
    if (computer == "Lizard") {
       alert("It's a DRAW!!");
    }
    else if (computer == "Rock") {
        lossCounter();
        alert("The Robot's rock crushes your pet Lizard");
    }
    else if (computer == "Spock") {
        winCounter();
        alert("Your Lizard poisons the Robot's Spock. Hahah inferior Vulcan immune system.");
    }
    else if (computer == "Scissors") {
        lossCounter();
        alert("The Robot's Scissors decapitate your pet Lizard. :(");
    }
    else if (computer == "Paper") {
        winCounter();
        alert("Your pet Lizard Barney gobbles up the Robot's paper.")
    }
})

$("#Spock").click(function() {
    var computer = randomWeapon();
    if (computer == "Spock") {
        alert("It's a DRAW!!");
    }
    else if (computer == "Rock") {
        winCounter();
        alert("Your Spock blasts the Robot's crude Rock into oblivion.");
    }
    else if (computer == "Lizard") {
        lossCounter();
        alert("The Robot's Lizard familiar poisons your Spock. Hahah inferior Vulcan immune system.");
    }
    else if (computer == "Scissors") {
        winCounter();
        alert("You destroy the Robot's silly Scissors with Spocks awesome backhand skills.");
    }
    else if (computer == "Paper") {
        lossCounter();
        alert("The Robot disproves your idea of Spock. You kill yourself.");
    }
})

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock