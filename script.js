let pScore = 0;
let cScore = 0;

const score1 = document.querySelector('.player');
const score2 = document.querySelector('.computer');
const printer = document.querySelector('.screen');
const btns = document.querySelectorAll('button');

/*The computer gets a random, equally probable choice: Rock, Paper or Scissors, and returns a string with it*/
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum < 1 ? "Rock" : randomNum < 2 ? "Paper" : "Scissors";
}

function checkWinner(player, computer) {
    if (player === 5 || computer === 5) {
        if (player > computer) {
            printer.textContent = 'YOU WON THE WHOLE GAME!!'
        }

        else {
            printer.textContent = 'YOU LOST THE WHOLE GAME!!'
        }
        pScore = 0;
        cScore = 0;
    }    
}

/*Creates a single game of Rock, Paper, Scissors*/
function playRound(playerSelection, computerSelection) {    
    
    //Case of a draw
    if (playerSelection === computerSelection) {
        printer.textContent = `It's a draw! ${playerSelection} ties with ${computerSelection}`;
    }

    //Case of player choosing Rock
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            pScore++;
            printer.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            cScore++;
            printer.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    //Case of player choosing Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            pScore++;
            printer.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            cScore++;
            printer.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    //Case of player choosing Scissors
    else {
        if (computerSelection === "Paper") {
            pScore++;
            printer.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            cScore++;
            printer.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }    
}

btns.forEach(choice => choice.addEventListener('click', () => {

    playerSelection = choice.id;
    computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    score1.textContent = "Player: " + pScore;
    score2.textContent = "Computer: " + cScore;

    checkWinner(pScore, cScore);
}));