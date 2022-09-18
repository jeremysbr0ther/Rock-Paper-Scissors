// Get input from player
// Find what is computer`s choice
// Compare both and decide the winner
// Then create a loop for 5 rounds
// Break if someone get 3 

let playerSelection = prompt('Plese select one of the following; Rock-Paper-Scissor: ');
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

const rockPaperScissor = ['rock', 'paper', 'scissor'];
function getComputerChoise(){
    let choiceNumber = Math.floor(Math.random() * 3);
    computerChoice = rockPaperScissor[choiceNumber];
}

getComputerChoise();
console.log(computerChoice);

function playRound(playerSelection, computerChoice){
    if (playerSelection === computerChoice) {
        result = 'Lets call it draw.';
        return result;
    }
    else if (playerSelection === 'rock' && computerChoice === 'paper') {
        result = 'You lose! Paper beats rock.';
        return result;
    }
    else if (playerSelection === 'rock' && computerChoice === 'scissor') {
        result = 'You win! Rock beats scissor.';
        return result;
    }
    else if (playerSelection === 'paper' && computerChoice === 'scissor') {
        result = 'You lose! Scissor beats paper.';
        return result;
    }
    else if (playerSelection === 'paper' && computerChoice === 'rock') {
        result = 'You win! Paper beats rock.';
        return result;
    }
    else if (playerSelection === 'scissor' && computerChoice === 'rock') {
        result = 'You lose! Rock beats scissor.';
        return result;
    }
    else if (playerSelection === 'scissor' && computerChoice === 'paper') {
        result = 'You win! Scissor beats paper.';
        return result;
    }
}

console.log(playRound(playerSelection, computerChoice));