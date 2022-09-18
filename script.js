// Get input from player
// Find what is computer`s choice
// Compare both and decide the winner
// Then create a loop for 5 rounds
// Break if someone get 3



let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerChoice){
    if (playerSelection === computerChoice) {
        result = 'Lets call it draw.';
        return result;
    }
    else if (playerSelection === 'rock' && computerChoice === 'paper') {
        result = 'You lose! Paper beats rock.';
        computerScore++;
        return result;
    }
    else if (playerSelection === 'rock' && computerChoice === 'scissor') {
        result = 'You win! Rock beats scissor.';
        playerScore++;
        return result;
    }
    else if (playerSelection === 'paper' && computerChoice === 'scissor') {
        result = 'You lose! Scissor beats paper.';
        computerScore++;
        return result;
    }
    else if (playerSelection === 'paper' && computerChoice === 'rock') {
        result = 'You win! Paper beats rock.';
        playerScore++;
        return result;
    }
    else if (playerSelection === 'scissor' && computerChoice === 'rock') {
        result = 'You lose! Rock beats scissor.';
        computerScore++;
        return result;
    }
    else if (playerSelection === 'scissor' && computerChoice === 'paper') {
        result = 'You win! Scissor beats paper.';
        playerScore++;
        return result;
    }
}


function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Plese enter one of the following; Rock-Paper-Scissor: ');
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);

        const rockPaperScissor = ['rock', 'paper', 'scissor'];
        function getComputerChoise(){
        let choiceNumber = Math.floor(Math.random() * 3);
        computerChoice = rockPaperScissor[choiceNumber];
        }
        getComputerChoise();
        console.log(computerChoice);
        playRound(playerSelection, computerChoice);
        console.log(result);
    }

    if (playerScore === computerScore) {
        result = 'Nobody wins, it is a draw game.'
        return result;
    }
    else if (playerScore > computerScore){
        result = 'Congrats, You win the game!';
        return result;
    }
    else {
        result = 'Sorry, You lost the game.'
        return result;
    }
}

game();
console.log(result);