let uScore = 0;
let cScore = 0;
let total = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const result = document.getElementById("outcome");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const smallYou = "You".fontsize(3).sup();
const smallComp = "Com".fontsize(3).sup();

function randomComputer() {
    const move = ['Scissors', 'Paper', 'Rock'];
    const moveNo = Math.floor(Math.random() * 3);
    return move[moveNo];
}

function choose(choice) {
    const compChoice = randomComputer();
    const combinedChoice = choice + compChoice;
    if (combinedChoice === "RockScissors" || combinedChoice === "PaperRock" ||  combinedChoice === "ScissorsPaper") {
        winFunc(choice, compChoice);
    } else if (combinedChoice === "RockRock" || combinedChoice === "PaperPaper" || combinedChoice === "ScissorsScissors") {
        drawFunc(choice);
    } else {
        loseFunc(choice, compChoice);
    }
}

function winFunc(choice, compChoice) {
    uScore++;
    total++;
    userScore_span.innerHTML = uScore;
    compScore_span.innerHTML = cScore;
    result.innerHTML = choice + smallYou + " beats " + compChoice + smallComp + ". " + "You win!";
    const choiceHTML = document.getElementById(choice);
    choiceHTML.classList.add('green-glow');
    setTimeout(function() { choiceHTML.classList.remove('green-glow') }, 500);
}

function loseFunc(choice, compChoice) {
    cScore++;
    total++;
    userScore_span.innerHTML = uScore;
    compScore_span.innerHTML = cScore;
    result.innerHTML = choice + smallYou + " loses to " + compChoice + smallComp + ". " + "You lose..."
    const choiceHTML = document.getElementById(choice);
    choiceHTML.classList.add('red-glow');
    setTimeout(function() { choiceHTML.classList.remove('red-glow') }, 500);
}

function drawFunc(choice) {
    result.innerHTML = "You both chose " + choice + ". It's a draw!";
    const choiceHTML = document.getElementById(choice);
    choiceHTML.classList.add('grey-glow');
    setTimeout(function() { choiceHTML.classList.remove('grey-glow') }, 500);
}

function main() {
    rock.addEventListener('click', function() {
        choose("Rock");
    })

    paper.addEventListener('click', function() {
        choose("Paper");
    })

    scissors.addEventListener('click', function() {
        choose("Scissors")
    })
}

main();