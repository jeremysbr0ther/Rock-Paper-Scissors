// Oyuncu secimini yapmaya basladi
// Oyuncu secim yaptikca bilgisayar da kendi secimlerini yapti
// Karsilastirmalarla skor guncellendi, alert ile turu kimin kazandigi gosterilebilir


// Get input from player
// Find what is computer`s choice
// Compare both and decide the winner
// Then create a loop for 5 rounds
// Break if someone get 3


let playerScore = 0;
let computerScore = 0;
let playerSelection = 0;
let computerChoice = 0;
const rockPaperScissor = ['rock', 'paper', 'scissor']; // Gets computer`s choice.

function getComputerChoice() {
let choiceNumber = Math.floor(Math.random() * 3);
computerChoice = rockPaperScissor[choiceNumber];
}

function playRound(playerSelection, computerChoice) {

    //console.log(playerSelection);
    //console.log(computerChoice);
    

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
console.log('1');
    console.log(result);

    console.log(playerScore);
    console.log(computerScore);
}




const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

rockBtn.addEventListener('click', function() {
    getComputerChoice();
    playRound('rock', computerChoice)
});
paperBtn.addEventListener('click', function() {
    getComputerChoice();
    playRound('paper', computerChoice)
});
scissorBtn.addEventListener('click', function() {
    getComputerChoice();
    playRound('scissor', computerChoice)
});