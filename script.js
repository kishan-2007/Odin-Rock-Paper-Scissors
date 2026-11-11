playGame();
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i=1;i<=5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Human Score:- ${humanScore} Computer Score:- ${computerScore}`);
    if(humanScore > computerScore){
        console.log("Human Wins!");
    }
    else if(humanScore == computerScore){
        console.log("Its a draw!");
    }
    else{
        console.log("Computer Wins!");
    }
    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice){
            console.log("Draw!");
        }
        else if((humanChoice == "rock") && (computerChoice == "scissors")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        }
        else if((humanChoice == "scissors") && (computerChoice == "paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        }
        else if((humanChoice == "paper") && (computerChoice == "rock")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        }
        else{
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
    }
}
function getHumanChoice(){
    let choice = prompt("What's your move?(Rock,Paper or Scissors)");
    return choice.toLowerCase();
}
function getComputerChoice(){
    let array = ["paper","scissors","rock"];
    return array[Math.floor(Math.random()*3)];
}