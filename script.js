// Get input from player
// Find what is computer`s choice
// Compare both and decide the winner
// Then create a loop for 5 rounds
// Break if someone get 3 

const rockPaperScissor = ['Rock', 'Paper', 'Scissor'];
function getComputerChoise(){
    let choiceNumber = Math.floor(Math.random() * 3);
    computerChoice = rockPaperScissor[choiceNumber];
}

getComputerChoise();
console.log(computerChoice);