// Get the computer choice based on random value
function getComputerChoice()
{
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0)
    {
        return "scissors";
    }
    else if(randomNum === 1)
    {
        return "rock";
    }
    else
    {
        return "paper";
    }
}

// Get user input using prompt
function getUserChoice()
{
    return prompt("Chose Rock Paper or Scissor to play: ").toLowerCase();
}

// Creating score variables for both sides
let userScore = 0;
let computerScore = 0;

// Playing one game round, getting choice from both sides, define the winner and adding score to the winner
function playRound(userChoice, computerChoice)
{
    switch(computerChoice)
    {
        case "rock":
            if(userChoice === "rock")
            {
                console.log("It's a tie!");
            }
            else if(userChoice === "paper")
            {
                console.log("Congrats you won!");
                userScore += 1;
            }
            else
            {
                console.log(`You lost! ${computerChoice} beats ${userChoice}.`);
                computerScore += 1;
            }
            break;

        case "scissors":
            if(userChoice === "scissors")
            {
                console.log("It's a tie!");
            }
            else if(userChoice === "rock")
            {
                console.log("Congrats you won!");
                userScore += 1;
            }
            else
            {
                console.log(`You lost! ${computerChoice} beats ${userChoice}.`);
                computerScore += 1;
            }
            break;

        case "paper":
            if(userChoice === "paper")
            {
                console.log("It's a tie!");
            }
            else if(userChoice === "scissors")
            {
                console.log("Congrats you won!");
                userScore += 1;
            }
            else
            {
                console.log(`You lost! ${computerChoice} beats ${userChoice}.`);
                computerScore += 1;
            }
            break;

        default:
            console.log("Something went wrong!");
    }
}

// Play 5 round for the whole game
function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        const computerChoice = getComputerChoice();
        const userChoice = getUserChoice();
        console.log(`Round #${i + 1}`)
        playRound(userChoice, computerChoice);
    }

}

// Getting the winner or a tie
function getWinner()
{
    if(userScore === computerScore)
    {
        return "It's a tie!";
    }
    return userScore > computerScore ? "You win!" : "Computer wins!";
}

playGame();

console.log(getWinner());


