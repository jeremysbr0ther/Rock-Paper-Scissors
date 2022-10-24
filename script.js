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

    screen.textContent = result;
    playerScoreDiv.textContent = playerScore;
    playerSelectionDiv.textContent = playerSelection;
    computerScoreDiv.textContent = computerScore;
    computerChoiceDiv.textContent = computerChoice;

    console.log(playerSelection);
    console.log(computerChoice);

    console.log(result);

    console.log(playerScore);
    console.log(computerScore);
}



const rockBtn = document.createElement('button');
rockBtn.setAttribute('id', 'rockBtn');
rockBtn.textContent = 'Rock';
const paperBtn = document.createElement('button');
paperBtn.setAttribute('id', 'paperBtn');
paperBtn.textContent = 'Paper';
const scissorBtn = document.createElement('button');
scissorBtn.setAttribute('id', 'scissorBtn');
scissorBtn.textContent = 'Scissor';

const buttons = document.createElement('div');
buttons.setAttribute('id', 'buttons');
buttons.appendChild(rockBtn);
buttons.appendChild(paperBtn);
buttons.appendChild(scissorBtn);

const screen = document.createElement('div');
screen.setAttribute('id', 'screen');
screen.style.alignSelf = 'center';
screen.style.marginTop = '20px';

const outerContainer = document.querySelector('#outerContainer');
const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click', () => { 
    playBtn.style.display = 'none';
    outerContainer.appendChild(screen);
    outerContainer.appendChild(buttons);
})

const playerScoreDiv = document.getElementById('playerScore');
const playerSelectionDiv = document.getElementById('playerSelection');
const computerScoreDiv = document.getElementById('computerScore');
const computerChoiceDiv = document.getElementById('computerChoice');

rockBtn.addEventListener('click', function() {
    getComputerChoice();
    playRound('rock', computerChoice);
});
paperBtn.addEventListener('click', function() {
    getComputerChoice();
    playRound('paper', computerChoice);
});
scissorBtn.addEventListener('click', function() {
    getComputerChoice();
    playRound('scissor', computerChoice);
});

