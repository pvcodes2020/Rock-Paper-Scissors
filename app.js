let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
//const rock_div
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + "(user)" + " beats " + convertToWord(computer) + "(comp)" + ". You Win :) !!";
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + "(user)" + " beats " + convertToWord(computer) + "(comp)" + ". You Lose :( !!";
}

function draw(user, computer) {
    result_div.innerHTML = convertToWord(user) + "(user)" + " same as " + convertToWord(computer) + "(comp)" + ". Its a tie !!";
}

function game(userChoice) {
    //console.log("heheheh " + userChoice)
    const computerChoice = getComputerChoice();
    console.log("user Choice: " + userChoice + "& Computer Coice: " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            console.log("user wins");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            console.log("User Loses");
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            console.log("Its a tie");
            break;
    }
}
//Add event Listeners
rock_div.addEventListener('click', function () {
    game("r");
})
paper_div.addEventListener('click', function () {
    game("p")
})
scissors_div.addEventListener('click', function () {
    game("s");
})
