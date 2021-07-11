let numToGuess;

//Starts the game, adds appropriate html elements, and picks a random number
function startGame() {
    setUpHTML();
    
    let gameText = document.querySelector("#gameText");
    gameText.innerHTML = "Game has started and the number has been picked. Time to Guess!"

    numToGuess = randNum();
    console.log(numToGuess);
}

//Creates a new random number
function restartGame(){
    numToGuess = randNum();
    console.log(numToGuess);
}

//Returns a random number bewtween 1 and 100
function randNum () {
    return Math.floor((Math.random() * 100) + 1);
}

//Sets up the HTML for the game
function setUpHTML(){

    //Updates start button to now be a restart
    //Changes functionality to prevent additional html to be added
    let resetButton = document.querySelector("#startButton");
    resetButton.value = "Restart";
    resetButton.onclick = restartGame;

    //Grabs the div where the created elemetns will be stored
    let gameControls = document.querySelector("#gameControls");

    //Creates the elements and adds the to the div
    let guessLabel = document.createElement("label");
    gameControls.appendChild(guessLabel);
    let guessInput = document.createElement("input");
    gameControls.appendChild(guessInput);
    let guessSubmit = document.createElement("button");
    gameControls.appendChild(guessSubmit);

    //Adds to Input
    guessInput.type = "text";
    guessInput.id = "numGuess";
    guessInput.name = "numGuess";
    //Adds to Label
    guessLabel.innerHTML = "Guess a Number: ";
    guessLabel.htmlFor = numGuess;
    //Adds to Submit
    guessSubmit.innerHTML = "Guess";
    guessSubmit.type = "button";
    //Gives test function to onclick on submit button
    guessSubmit.onclick = guess;
}

function guess() {
    let gameText = document.querySelector("#gameText");
    let numGuess = document.querySelector("#numGuess").value
    gameText.innerHTML = "You guessed: " + numGuess;
}