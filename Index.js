// 0 = rock
// 1 = paper
// 2 = scissors

let humanChoice = prompt("type your choice: ");

function getHumanChoice() {
    if (humanChoice.toLocaleLowerCase() === "rock")
        return 0
    else if (humanChoice.toLocaleLowerCase() === "paper")
        return 1
    else if (humanChoice.toLocaleLowerCase() === "scissors")
        return 2;
    else 
        return "Invalid Response"
}

// function retryInvalid() {
//     if (getHumanChoice === "Invalid Response")
// }


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
    if(humanChoice === 0 && computerChoice === 0)
        return "tie!"
    if(humanChoice === 0 && computerChoice === 1)
        return "you lose! Paper beats Rocks"
    if(humanChoice === 0 && computerChoice === 2)
        return "you win! Rock beats Scissors"
    if(humanChoice === 1 && computerChoice === 0)
        return "you win! Paper beats Rocks"
    if(humanChoice === 1 && computerChoice === 1)
        return "tie"
    if(humanChoice === 1 && computerChoice === 2)
        return "you lose! Scissors beats Paper"
    if(humanChoice === 2 && computerChoice === 0)
        return "you lose! Rock beats Scissors"
    if(humanChoice === 2 && computerChoice === 1)
        return "you win! Scissors beats Paper"
    if(humanChoice === 2 && computerChoice === 3)
        return "tie";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection));

