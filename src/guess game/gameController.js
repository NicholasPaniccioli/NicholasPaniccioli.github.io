let numToGuess;
let guesses;
let attempts;
let correct;

//Starts the game, adds appropriate html elements, 
//Picks a random number, and sets life and attempt value
function startGame() {
    setUpHTML();
    
    let gameText = document.querySelector("#gameText");
    gameText.innerHTML = "Game has started and the number has been picked.<br> Time to Guess!"

    numToGuess = randNum();
    guesses = 5;
    attempts = 1;
    correct = false;
    console.log(numToGuess);
}

//Creates a new random number and resets html, lives, and attempts
function restartGame(){
    let gameText = document.querySelector("#gameText");
    gameText.innerHTML = "Game has been reset and the number has been picked.<br> Time to Guess!"
    
    numToGuess = randNum();
    guesses = 5;
    attempts = 1;
    correct = false;
    console.log(numToGuess);
}

//When the player guesses, checks if the game runs the logic function
function guess() {

    //Checks if user has guessed correctly
    //Prevents user from guessing afterwards
    if(correct == false)
    {
        gameLogic();
    } else{
        let gameText = document.querySelector("#gameText");
        gameText.innerHTML = "You got the number right already." +
        "<br>Restart to play again!";
    }

    //empty the text box
    let gamebox = document.querySelector("#numGuess");
    gamebox.value = "";
}

//Checks if the user guessed the number correctly
//Changes the html accordingly and adjusts the attempt value
function gameLogic(){
    let gameText = document.querySelector("#gameText");
    let numGuess = document.querySelector("#numGuess").value
    let numberCheck = isNaN(numGuess);
    console.log(numberCheck);

    //Checks that the user has guesses remaining and that the guess is a
    if(guesses > 0 && numberCheck == false && numGuess != ""){
        //Checks if user's guess was correct
        if(numGuess == numToGuess) {
            //If correct
            gameText.innerHTML = "You guessed: " + numGuess +
            "<br>You guessed correctly! Congrats!" +
            "<br>You got the number in " + attempts + " guess(es)."
            correct = true;
        } else {
            //If incorrect, takes away a guess, adds to attempts
            guesses--;
            attempts++;

            //Checks if any guesses are left
            if(guesses > 0) {
                gameText.innerHTML = "You guessed: " + numGuess +
                "<br>That was not correct" +
                "<br>You have: " + guesses + " guesses left!";
                checkHighOrLow(numToGuess, numGuess);
            } else {
                //With no attempts left, GAME OVER
                gameText.innerHTML = "You guessed: " + numGuess +
                "<br>That was not correct and you used your last guess"+
                "<br>The correct number was: " + numToGuess + "!";
            }
        }
    } else {
        if(guesses == 0) {
            //If not the game doesn't check and warns the player
            gameText.innerHTML = "You have no more guesses left." +
            "<br>If you want to keep playing restart the game.";
        }
        else if(numberCheck == true || numGuess == "") {
            gameText.innerHTML = "The answer you guessed is not a number." +
            "<br>You still have " + guesses + " guesses left!" +
            "<br>Try again!";
        }
    }
}

//Indicates if the random number is higher or lower to user's guess
function checkHighOrLow(numToGuess, numGuess){
    
    //Checks if users guess is higher
    if(numGuess == Math.max(numToGuess, numGuess))
    {
        let gameText = document.querySelector("#gameText");
        gameText.innerHTML += "<br>The random number is <strong>lower</strong>"
    } else {
        let gameText = document.querySelector("#gameText");
        gameText.innerHTML += "<br>The random number is <strong>higher</strong> "
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
    let guessSection = document.querySelector("#guessSection");
    let guessButtonDiv = document.querySelector("#guessButtonDiv");

    //Creates the elements and adds them to their divs
    let guessLabel = document.createElement("label");
    guessSection.appendChild(guessLabel);
    let guessInput = document.createElement("input");
    guessSection.appendChild(guessInput);
    let guessSubmit = document.createElement("button");
    guessButtonDiv.appendChild(guessSubmit);

    //Adds to Input
    guessInput.type = "text";
    guessInput.id = "numGuess";
    guessInput.name = "numGuess";
    //Adds to Label
    guessLabel.innerHTML = "Guess a Number: ";
    guessLabel.htmlFor = numGuess;
    guessLabel.id = "numGuessLabel";
    //Adds to Submit
    guessSubmit.innerHTML = "Guess";
    guessSubmit.type = "button";
    guessSubmit.id = "guessButton"
    //Gives guess function to onclick on guess button
    guessSubmit.onclick = guess;
}