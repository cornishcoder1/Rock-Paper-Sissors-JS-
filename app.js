const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice
let result

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    else if (randomNumber == 3) {
        computerChoice = 'paper'
    }   
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You win!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lost!"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lose!"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win!"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
    
    


// }

// var spotifyPlaylist = {
//     SongOne: {
//         Name: "Rasputin",
//         Artist: "Boney M",
//     },
//     SongTwo: {
//         Name: "Wannabe",
//         Artist: "Spice Girls",
//     }
// }

// console.log(spotifyPlaylist.SongTwo.Artist)

// let boolean = false && true
// console.log(boolean)

// function switchBooks (book) {
//     book = "The Picture of Dorian Grey";
// }

// var myBook = "Jane Eyre";
// myBook = switchBooks(myBook);

// console.log(myBook)

// var shows  = [
//     "Howl's Moving Castle",
//     "Community",
//     "Princess Mononoke",
//     "The Good Place"
// ]

// shows.splice(2, 0, "The Umbrella Academy")

// console.log(shows)

// console.log("Ferris Buller\'s")