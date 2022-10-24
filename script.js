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
let result = 0;
const rockPaperScissor = ['rock', 'paper', 'scissor']; // Gets computer`s choice.

function getComputerChoice() {
let choiceNumber = Math.floor(Math.random() * 3);
computerChoice = rockPaperScissor[choiceNumber];
}

function playRound(playerSelection, computerChoice) {
    
    let trial = playerSelection + computerChoice;
    console.log(trial);

    if (trial === 'rockscissor') {
        result = 'You win this round! Rock beats scissor.';
        playerScore++;
    }
    else if (trial === 'scissorpaper') {
        result = 'You win this round! Scissor beats paper.';
        playerScore++;
    }
    else if (trial === 'paperrock') {
        result = 'You win this round! Paper beats rock.';
        playerScore++;
    }    
    else if (trial === 'scissorrock') {
        result = 'You lost this round! Rock beats scissor.';
        computerScore++;
    }
    else if (trial === 'paperscissor') {
        result = 'You lost this round! Scissor beats paper.';
        computerScore++;
    }
    else if (trial === 'rockpaper'){
        result = 'You lost this round! Paper beats rock.';
        computerScore++;
    }
    else if (trial === 'rockrock' || trial === 'paperpaper' || trial === 'scissorscissor') {
        result = 'Lets call this round draw.';
    }

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            result = 'You win the game!';
        }
        else if (computerScore > playerScore) {
            result = 'Computer win the game!';
        }
    }

    console.log(playerSelection);
    console.log(computerChoice);

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