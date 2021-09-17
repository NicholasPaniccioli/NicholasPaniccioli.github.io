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
    stats[4] = (attempts + stats[3])/stats[0];
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

function updateStat(){
    displayCurrentPoints();
    localStorage.setItem("Stats", JSON.stringify(stats));
}