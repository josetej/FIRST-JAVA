let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rpc = Math.floor(Math.random() * 3);
    if (rpc === 0) {
        return "rock";
    } else if (rpc === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;
}

function handleClick(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    if (result === "human") {
        humanScore++;
        console.log("You win this round!");
        document.getElementById('result').textContent = "You win this round!";
    } else if (result === "computer") {
        computerScore++;
        console.log("Computer wins this round!");
        document.getElementById('result').textContent = "Computer wins this round!";
    } else {
        console.log("It's a tie!");
        document.getElementById('result').textContent = "It's a tie!";
    }

    updateScore();

    if (humanScore === 3 || computerScore === 3) {
        document.getElementById('result').textContent = humanScore > computerScore
            ? "Congratulations! You are the overall winner!"
            : "The computer is the overall winner. Better luck next time!";
        
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });
    }
}

document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleClick('scissors'));

updateScore(); // Initialize the score display
