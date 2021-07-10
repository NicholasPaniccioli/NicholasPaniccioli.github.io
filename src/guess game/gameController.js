//Starts the game, picks random number, and adds appropriate html elements
function startGame() {

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
    guessSubmit.onclick = "logged()";
}

// This is being used for testing purposes
function logged () {

    let gameText = document.querySelector("#gameText");
    let numGuess = document.querySelector("#numGuess").value

    gameText.innerHTML = "You guessed: " + numGuess;
}

{/* <label for="numGuess">Guess a Number: </label>
<input type="text" id="numGuess" name="numGuess">
<input type="button" value="Guess" onclick="logged()"></input> */};