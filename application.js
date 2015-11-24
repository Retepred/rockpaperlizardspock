var choices = ["Rock", "Paper", "Sissors", "Lizard", "Spock"];
function randomWeapon() {
    return choices[Math.floor(Math.random()*choices.length)]
}

$("#Rock").click(function() {
    var computer = randomWeapon();
    if (computer == "Rock") {
       alert("It's a DRAW!!");
    }
    else if (computer == "Paper") {
       alert("The Robot kills you with Paper.");
    }
    else if (computer == "Spock") {
       alert("The Robot kills you with Spock.");
    }
    else if (computer == "Lizard") {
        alert("Your rock kills the Robot's Lizard!")
    }
    else if (computer == "Scissors") {
        alert("Your rock crushes the Robot's Scissors!")
    }
})

$("#Paper").click(function() {
  alert("Well done!")
})

$("#Scissors").click(function() {
  alert("Well done!")
})

$("#Lizard").click(function() {
  alert("Well done!")
})

$("#Spock").click(function() {
  alert("Well done!")
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