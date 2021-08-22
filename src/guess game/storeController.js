//Changes background color of the game
function changeBackground(value) {
    let gameBack = document.querySelector("#gameTextDiv");
    gameBack.style.backgroundColor = value;
}

//Unlocks selected color
function unlockColor(color){
    let colorButtons = document.getElementsByClassName("colorButton");
    let points = parseInt(localStorage.getItem("Points"))

    //loops through and matches color with name
    for(let i = 0; i < colorButtons.length; i++) {
        let col = colorButtons[i].getAttribute("name");

        if(col == color && points > 10) //If the color matches and enough points, unlocks that button and changes text
        {
            colorButtons[i].value = color;
            colorButtons[i].addEventListener("click", changeBackground(color)); //'unlocks' and gives it option to change color
        }
    }
}