function computerPlay() {
    const choices = ['Rock','Paper','Scissors'];
    const randIdx = Math.floor(Math.random() * choices.length);
    return choices[randIdx];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection;

    if(playerSelection === computerSelection) {
        return "Draw!";
    } else if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose scissors, rock, or paper');
        const computerSelection = computerPlay();
        console.log(`Round ${i + 1}: ${playRound(playerSelection,computerSelection)}`);
    }
}
game();

