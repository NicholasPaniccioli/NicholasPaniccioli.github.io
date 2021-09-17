let gamesPlayed = 0;
let gamesWon= 0;
let winPercent = 0;
let attemptAvg = 0;
let currPoints = 0;
let allPoints = 0;
let firstGuess = 0;
let lastGuess = 0;
let stats = [gamesPlayed, gamesWon, winPercent, attemptAvg, currPoints, allPoints, firstGuess, lastGuess];

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

//Calculates win percentage
function calcWinPercent(){
    if(stats[0] > 0) {
        let percent = (stats[1] * 100)/stats[0];
        
        stats[3] = percent.toFixed(2);
    }
    updateStat();
}

//Displays Current Points
function displayCurrentPoints(){
    stats[4] = localStorage.getItem("Points");
    updateStat();
}

function updateStat(){
    localStorage.setItem("Stats", JSON.stringify(stats));
}