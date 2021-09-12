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
    let gameBack = document.querySelector("#gameFeedback");
    gameBack.style.backgroundColor = value;
}

//Unlocks selected color
function unlockColor(color){
    let colorButton = document.getElementsByClassName("colorButton");
    let boughtColor = document.getElementsByClassName("boughtColor")
    let points = parseInt(localStorage.getItem("Points"))

    //loops through and matches color with name
    for(let i = 0; i < colorButton.length; i++) {
        let col = colorButton[i].getAttribute("name");

        if(col == color) //Checks color matches
        {
            if(checkUnlock(points, 5)) //Checks if player has enough points
            {
                subtractPoints(points, 5); //Spends points for the color
                unlockedColors.push(color);
                localStorage.setItem("UnlockedColors", JSON.stringify(unlockedColors)); //Updates local storage

                //Loops through to unlock the bought color 
                for(let x = 0; x < boughtColor.length; x++) {
                    if(col == boughtColor[x].name) {
                        boughtColor[x].style.display = "inline";
                        break;
                    }
                }

                //Loops through to disable buy button
                for(let z = 0; z < colorButton.length; z++) {
                    if(col == colorButton[z].name) {
                        colorButton[z].style.display = "none"; //If the color is unlocked, hides the buy button
                        break;
                    }
                }
                
            }
            else{
                console.log("Not Enough Points")
            }
        }
    }
}

//Unlocks already bought and unlocked colors
//Hides buy buttons
function unlockBoughtColors(){
    let unlCol = JSON.parse(localStorage.getItem("UnlockedColors"));
    let colorButton = document.getElementsByClassName("colorButton");
    let boughtColor = document.getElementsByClassName("boughtColor");
    console.log(unlCol[0]);

    //loops through bought buttons
    for(let i = 0; i < unlCol.length; i++) {
        let col = unlCol[i];
        //Checks if it is unlocked
        for(let x = 0; x < boughtColor.length; x++) {
            if(col == boughtColor[x].name) {
                boughtColor[x].style.display = "inline"; //If its in the unlocked array displays it
            }
        }
    }

    //Loops through the color buttons
    for(let y = 0; y < unlCol.length; y++) {
        let col = unlCol[y];
        //Checks if it is unlocked
        for(let z = 0; z < colorButton.length; z++) {
            if(col == colorButton[z].name) {
                colorButton[z].style.display = "none"; //If the color is unlocked, hides the buy button
            }
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

    showPoints(); //When points are used, updates display
}

//Helper function to see if unlock should go through.
function checkUnlock(playerPoints, subtract)
{
    if(playerPoints - subtract >= 0) {
        return true
    }
    return false;
}