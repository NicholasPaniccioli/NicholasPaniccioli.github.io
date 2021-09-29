//Achievements in Order
//So It Begins, All Or Nothing, Guessing Vet, Point Raker, Design Sim, 
//Insanity, Sucker For Pain, On A Roll, When In Doubt, 1 In 100
let achievements = [false,false,false,false,false,false,false,false,false,false];
let popped = [false,false,false,false,false,false,false,false,false,false];

//Used to keep track for Insanity and On a Roll Achievements
let achNumbers = [0,0];

//Checks that player as the achievements, popped, and achNumber arrays on their local storage
//If not adds them
if(localStorage.getItem("Achievements") == null) {
    localStorage.setItem("Achievements", JSON.stringify(achievements));
}
else{
    achievements = JSON.parse(localStorage.getItem("Achievements"));
}

if(localStorage.getItem("Popped") == null) {
    localStorage.setItem("Popped", JSON.stringify(popped));
}
else{
    popped = JSON.parse(localStorage.getItem("Popped"));
}

if(localStorage.getItem("achNumbers") == null) {
    localStorage.setItem("achNumbers", JSON.stringify(achNumbers));
}
else{
    achNumbers = JSON.parse(localStorage.getItem("achNumbers"));
}

//Unlock the hint for achievements
function hint(number){
    let hints = document.getElementsByClassName("hintButton");
    let achRequires = document.getElementsByClassName("achievementRequirement");
    let playerPoints = localStorage.getItem("Points");

    if(playerPoints > 0){
        subtractPoints(playerPoints, 1);
        hints[number].style.display = "none";
        achRequires[number].style.display = "inline"; 
    } else{
        alert("Not enough points");
    }
}


//Each function unlocks it's corresponding badge/achievement
//So it Begins, All or Nothing, Design Sim, 1 In 100 have no special function
//As they don't need complex checks. Called mid game

//Unlocks when 5 Games are won
function guessingVet(){
    let wins = JSON.parse(localStorage.getItem("Stats"))[1];
    if(wins >= 5){
        console.log(wins);
        popUpCheck("GV");
    }
    console.log(wins);
}

//Unlocks when player has earned a total of 10 points
function pointRaker(){
    let poi = JSON.parse(localStorage.getItem("Stats"))[6];
    if(poi >= 10){
        popUpCheck("PR");
    }
}

//Unlocks when player has lost 3 games in a row
//Resets if player has win inbetween
function insanity(reset){
    if(reset == false){
        achNumbers[0] += 1;
        if(achNumbers[0] == 3){
            popUpCheck("INS");
        }
    } else {
        achNumbers[0] = 0;
    }
    localStorage.setItem("achNumbers", JSON.stringify(achNumbers));
}

//Unlocks when player achieves 20 losses
function suckerForPain(){
    let wins = JSON.parse(localStorage.getItem("Stats"))[1];
    let totalGames = JSON.parse(localStorage.getItem("Stats"))[0];

    if(totalGames - wins >= 20){
        popUpCheck("SFP");
    }
}

//Unlocks when player achieves 2 wins in a row
//Resets if loss is achieved
function onARoll(reset){
    if(reset == false){
        achNumbers[1] += 1;
        if(achNumbers[1] == 2){
            popUpCheck("OAR");
        }
    } else {
        achNumbers[1] = 0;
    }
    localStorage.setItem("achNumbers", JSON.stringify(achNumbers));
}

//Unlocks when player reaches 250 attempts/guesses
function whenInDoubt(){
    let attempts = JSON.parse(localStorage.getItem("Stats"))[3];

    if(attempts >= 150){
        popUpCheck("WID");
    }
}

//When called updates local storage for the achievements
function updateAchievements(){
    let achLocks = document.getElementsByClassName("achLock");
    let achBadges= document.getElementsByClassName("achBadge");
    localStorage.setItem("Achievements", JSON.stringify(achievements));

    //Loops through, if the achievement is earned, shows the badge and hides the lock
    for(let a = 0; a < achBadges.length; a++){
        if(achievements[a] == true){
            achLocks[a].style.display = "none";
            achBadges[a].style.display = "inline";
        }
    }
}

//Checks to see if achievement requires a pop up
//Avoids repeating pop ups
//Also updates the achievements array
function popUpCheck(achievement){
    switch(achievement){

        case "SIB":
            //If it hasnt popped, pops it then sets it so it doesn't pop again
            if(popped[0] == false){
                alert("So It Begins has been rewarded");
                popped[0] = true;
            }
            achievements[0] = true;
            updateAchievements();
        break;

        case "AON":
            if(popped[1] == false){
                alert("All Or Nothing has been rewarded");
                popped[1] = true;
            }
            achievements[1] = true;
            updateAchievements();
        break;

        case "GV":
            if(popped[2] == false){
                alert("Guessing Veteran has been rewarded");
                popped[2] = true;
            }
            achievements[2] = true;
            updateAchievements();
        break;

        case "PR":
            if(popped[3] == false){
                alert("Point Raker has been rewarded");
                popped[3] = true;
            }
            achievements[3] = true;
            updateAchievements();
        break;

        case "DS":
            if(popped[4] == false){
                alert("Design Simulator has been rewarded");
                popped[4] = true;
            }
            achievements[4] = true;
            updateAchievements();
        break;

        case "INS":
            if(popped[5] == false){
                alert("Insanity has been rewarded");
                popped[5] = true;
            }
            achievements[5] = true;
            updateAchievements();
        break;

        case "SFP":
            if(popped[6] == false){
                alert("Sucker For Pain has been rewarded");
                popped[6] = true;
            }
            achievements[6] = true;
            updateAchievements();
        break;

        case "OAR":
            if(popped[7] == false){
                alert("On a Roll has been rewarded");
                popped[7] = true;
            }
            achievements[7] = true;
            updateAchievements();
        break;

        case "WID":
            if(popped[8] == false){
                alert("When In Doubt has been rewarded");
                popped[8] = true;
            }
            achievements[8] = true;
            updateAchievements();
        break;

        case "OIO":
            if(popped[9] == false){
                alert("1 in 100 has been rewarded");
                popped[9] = true;
            }
            achievements[9] = true;
            updateAchievements();
        break;

        default:
        break;
    }

    //Updates the storage with achievements being popped
    localStorage.setItem("Popped", JSON.stringify(popped));
}