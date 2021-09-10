let unlockedColors = [];
if(localStorage.getItem("UnlockedColors") == null) //Checks if unlocked color exists
{
    localStorage.setItem("UnlockedColors", JSON.stringify(unlockedColors)); //If not, creates it
}
else{
    unlockedColors = JSON.parse(localStorage.getItem("UnlockedColors")); //Otherwise updates and refreshes
}

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

        if(col == color) //Checks color matches
        {
            if(checkUnlock(points, 5)) //Checks if player has enough points
            {
                subtractPoints(points, 5); //Spends points for the color
                colorButtons[i].value = color;
                unlockedColors.push(color);
                localStorage.setItem("UnlockedColors", JSON.stringify(unlockedColors)); //Updates local storage
                colorButtons[i].addEventListener("click", changeBackground(color)); //'unlocks' and gives it option to change color
            }
            else{
                console.log("Not Enough Points")
            }
        }
    }
}

//Unlocks already bought and unlocked colors
function unlockBoughtColors(){
    let colorButtons = document.getElementsByClassName("colorButton");

    //loops through color buttons
    for(let i = 0; i < colorButtons.length; i++) {
        let col = colorButtons[i].getAttribute("name");
        //Checks if it is unlocked
        if(unlockedColors.includes(col))
        {
            //If so unlocks it again
            colorButtons[i].value = col;
            colorButtons[i].addEventListener("click", changeBackground(col));
        }
    }
}

//Subtracts points from players total
function subtractPoints(playerPoints, subtract) {
    //Checks points won't go below 0
    if(playerPoints - subtract >= 0) {
        points = playerPoints - subtract;
        localStorage.setItem("Points", points);
    }
}

//Helper function to see if unlock should go through.
function checkUnlock(playerPoints, subtract)
{
    if(playerPoints - subtract >= 0) {
        return true
    }
    return false;
}