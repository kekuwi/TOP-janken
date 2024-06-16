// 0 = rock
// 1 = paper
// 2 = scissors

function playGame(){
    
    let humanScore = 0
    let computerScore = 0

    const round = 5
    
    function getHumanChoice() {
        let humanChoice = prompt("type your choice: ");
        return humanChoice.toLocaleUpperCase();
    }

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3);
        
        if (computerChoice === 0) {
            return "ROCK";
        } else if (computerChoice === 1) {
            return "PAPER";
        } else if (computerChoice === 2) {
            return "SCISSORS";
        }
    }

    function playRound(humanSelection,computerSelection) {
        if ((humanSelection === "ROCK" && computerSelection === "ROCK") || (humanSelection === "PAPER" && computerSelection === "PAPER") || (humanSelection === "SCISSORS" && computerSelection === "SCISSORS")) {
            return ("tie!");
        } else if ((humanSelection === "ROCK" && computerSelection === "SCISSORS") || (humanSelection === "PAPER" && computerSelection === "ROCK") || (humanSelection === "SCISSORS" && computerSelection === "PAPER")) {
            humanScore++;
            return ("YOU WIN! " + humanSelection + " beats " + computerSelection + ".");
        } else if ((computerSelection === "ROCK" && humanSelection === "SCISSORS") || (computerSelection === "PAPER" && humanSelection === "ROCK") || (computerSelection === "SCISSORS" && humanSelection === "PAPER")) {
            computerScore++;
            return ("You Lose! " + computerSelection + " beats " + humanSelection + ".");
        } else {return "Invalid Imput, try again"};
    }
   
    function gamePlay() {

        for (let currentRound = 0; currentRound < round; currentRound++){
            console.warn("Round: " + (currentRound+1));
            console.log("result: " + playRound(getHumanChoice(),getComputerChoice()));
            console.log("Your Score: " + humanScore);
            console.error("Computer Score: " + computerScore);
        } 

        if (humanScore > computerScore) {
            return "We've got a winner!!!";
        } else if (humanScore < computerScore) {
            return "Take The L BOZO!!";
        } else {return "you're not better than a computer!"}
    }

    console.log("%c" + gamePlay(), "font-size: 32px; font-weight: bolder;");
}

playGame()



// console.log(playRound(humanSelection,computerSelection));


// input= prompt windows (TYPE IN INTERFACE)
// auto input= random number 0-2
// process auto input to word
// process both input and compare them to choose the winner
// add score to winner
// make variable to contain score
// game system
// best of 5 rock paper scissors, get 3 score and win.