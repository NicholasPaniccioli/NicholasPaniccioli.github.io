// This is being used for testing purposes
function logged () {

    let gameText = document.querySelector("#gameText");
    let numGuess = document.querySelector("#numGuess").value

    gameText.innerHTML = "You guessed: " + numGuess;
}