let numToGuess;
let guesses;
let attempts;

//Starts the game, adds appropriate html elements, 
//Picks a random number, and sets life and attempt value
function startGame() {
    setUpHTML();
    
    let gameText = document.querySelector("#gameText");
    gameText.innerHTML = "Game has started and the number has been picked. Time to Guess!"

    numToGuess = randNum();
    guesses = 5;
    attempts = 1;
    console.log(numToGuess);
}

//Creates a new random number and resets html, lives, and attempts
function restartGame(){
    let gameText = document.querySelector("#gameText");
    gameText.innerHTML = "Game has been reset and the number has been picked. Time to Guess!"
    
    numToGuess = randNum();
    guesses = 5;
    attempts = 1;
    console.log(numToGuess);
}

//When the player guesses, changes the html and adjusts the attempt value
function guess() {
    let gameText = document.querySelector("#gameText");
    let numGuess = document.querySelector("#numGuess").value

    //Checks that the user has guesses remaining
    if(guesses > 0){
        //Checks if guess was correct
        if(numGuess == numToGuess) {
            //If correct
            gameText.innerHTML = "You guessed: " + numGuess +
            "<br>You guessed correctly! Congrats!" +
            "<br>You got the number in " + attempts + " guess(es)."
        }
        else {
            //If incorrect, takes away an attempt
            guesses--;
            attempts++;

            //Checks if any guesses are left
            if(guesses > 0) {
                gameText.innerHTML = "You guessed: " + numGuess +
                "<br>That was not correct" +
                "<br>You have: " + guesses + " guesses left!";
            }
            else {
                //With no attempts left, GAME OVER
                gameText.innerHTML = "You guessed: " + numGuess +
                "<br>That was not correct and you used your last guess";
            }
        }
    }
    else {
        //If not the game doesn't check and warns the player
        gameText.innerHTML = "You have no more guesses left." +
        "<br>If you want to keep playing restart the game.";
    }
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

    //Grabs the div where the created elements will be stored
    let gameControls = document.querySelector("#gameControls");

    //Creates the elements and adds them to the div
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
    //Gives guess function to onclick on guess button
    guessSubmit.onclick = guess;
}