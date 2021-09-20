//Games Played, Game Won, win Percent, total attempts, attempt Avg, Current Points, All Points, First Guess, Last Guess 
let stats = [0,0,0,0,0,0,0,0,0];

if(localStorage.getItem("Stats") == null) {
    localStorage.setItem("Stats", JSON.stringify(stats));
}
else{
    stats = JSON.parse(localStorage.getItem("Stats"));
}

//Adds to total games played
function addGamesPlayed(){
    stats[0] += 1;
    updateStat();
}

//Adds to total games won
function addGamesWon(){
    stats[1] += 1;
    updateStat();
}

//Calculates player's win percentage
function calcWinPercent(){
    //Checks that total games played isn't 0 to avoid errors
    if(stats[0] > 0) {
        let percent = (stats[1] * 100)/stats[0];
        stats[2] = parseFloat(percent.toFixed(2)); //Resets the number to a float and sets it to at least 2 decimal points
    }
    updateStat();
}

//Calculates the total attempts
function addAttempts(attempts){
    stats[3] += attempts;
    updateStat();
}

//Calculates average of players attempts
function calcAttemptAverage(attempts){
    let average = (attempts + stats[3])/stats[0];
    stats[4] =  parseFloat(average.toFixed(2)) //Resets the number to a float and sets it to at least 2 decimal points
    updateStat();
}

//Displays Current Points
function displayCurrentPoints(){
    stats[5] = parseInt(localStorage.getItem("Points"));
}

//Adds all points earned by the player
function addAllPoints(points){
    stats[6] += points;
    updateStat();
}

//Increases first guess win stat
function addFirstGuess(){
    stats[7] += 1;
    updateStat();
}

//Increases last guess win stat
function addLastGuess(){
    stats[8] += 1;
    updateStat();
}

//When called, updates the local storage stat with the newly updated stat array
//Also writes/adds html to the stat page
function updateStat(){
    displayCurrentPoints();
    localStorage.setItem("Stats", JSON.stringify(stats));

    let statHTML = document.getElementsByClassName("statHTML");
    let statArray = JSON.parse(localStorage.getItem("Stats"));

    for(let s = 0; s < statHTML.length; s++){
        statHTML[s].innerHTML = ""; //Refreshes the html line
        statHTML[s].innerHTML += "<strong>" + statArray[s] + "</strong>";
    }

}