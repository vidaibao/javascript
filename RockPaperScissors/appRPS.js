const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener
    ('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    }))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if ((computerChoice === userChoice) ){
        result = 'its a draw'
    } else if ((computerChoice === 'rock' && userChoice === 'paper') ||
            (computerChoice === 'paper' && userChoice === 'scissors') ||
            (computerChoice === 'scissors' && userChoice === 'rock') ) {
        result = 'you are win!'
    } else {
        result = 'you are lost!'
    }
    resultDisplay.innerHTML = result
}