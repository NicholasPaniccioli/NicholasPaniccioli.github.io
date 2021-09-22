//Achievements in Order
//So It Begins, All Or Nothing, Guessing Vet, Point Raker, Design Sim, 
//Insanity, Sucker For Pain, On A Roll, When In Doubt, 1 In 100
let achievements = [false,false,false,false,false,false,false,false,false,false];
let popped = [false,false,false,false,false,false,false,false,false,false]

//Checks that player as the achievements and popped arrays on their local storage
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

//Each function unlocks it's corresponding badge/achivement

//Unlocked on first players game
function soItBegins(){
    achievements[0] = true;
    updateAchievements();
    popUpCheck("SIB");
}

//When called updates local storage for the achievements
function updateAchievements(){
    let achievementName = document.getElementsByClassName("achievementName");
    localStorage.setItem("Achievements", JSON.stringify(achievements));

    for(let a = 0; a < achievementName.length; a++){
        if(achievements[a] == true){
            achievementName[a].style.display = "inline";
        }
    }
}

//When an achievement is called, checks to see if it requires a pop up
//Avoids repeating pop ups
function popUpCheck(achievement){
    switch(achievement){
        case "SIB":
            //If it hasnt popped, pops it then sets it so it doesn't pop again
            if(popped[0] == false){
                alert("So It Begins has been rewarded");
                popped[0] = true;
            }
        break;
        case "AON":
        break;
        case "GV":
        break;
        case "PR":
        break;
        case "DS":
        break;
        case "INS":
        break;
        case "SFP":
        break;
        case "OAR":
        break;
        case "WID":
        break;
        case "OIO":
        break;
        default:
        break;
    }

    //Updates the storage with achievements being popped
    localStorage.setItem("Popped", JSON.stringify(popped));
}