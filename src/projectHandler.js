//Gives back the appropriate info based on selected project
function getProject (){
    //Gets the project
    const projList = document.querySelector("#projList").value;
    let desc = document.querySelector("#projDesc");
    let thumbnail = document.querySelector("#projPic");

    //Finds the project selected and gives documentation
    //PROJECTS IN ALPHABETICAL ORDER
    if(projList === "LF") {
        //Landmark Finder
        getProjLandmark(desc, thumbnail);
    } else if(projList === "OSE") {
        //Outer Space Experience
        getProjSpace(desc, thumbnail);
    } else {
        //If none is found, default message
        desc.innerHTML = "could not find";
    }
};

//Landmark Finder
function getProjLandmark (desc, thumbnail){
    thumbnail.src = "images/mapboxAPI.JPG";
    desc.innerHTML = "This project was originally created as a school project back in April 2020." +
    " For a month I had to program a site that used Two APIs together to create something useful." +
    " So I designed my own API using PHP to organize and return Landmarks based on user input." +
    " Then combined with the MapBox API, I was able to map out and give back the location of those" +
    " landmarks." + 
    "<br><br>" +
    "While I was unable to finish the project, the final product would've included functionality" +
    " such as facts and pictures of the landmarks showing up, more ways to filter through landmarks," +
    " and more ways to interact with the map." +
    "<br><br>" +
    "Overall the project deals in HTML/CSS, JSON, PHP, and APIs.";
};

//Outer Space Exprience
function getProjSpace (desc, thumbnail){
    thumbnail.src = "images/spaceExp.JPG";
    desc.innerHTML = "Outer Space Experience was a school projected I worked on in March of 2020." +
    " The goal of the project was to create a visual experience using Canvas and the AudioContext API to" +
    " allow a user to change multiple settings of what was being shown. I gave users the options to change" +
    " the speed of the surrounding planets, the color and direction of the visual audio." +
    "<br><br>" +
    "The project is finished as of right now with no urgency for updates. My plans for the project however" +
    " do include some updates to the layout and the audio waves because they aren't perfectly perpendicular." +
    " Other than that it's just going through and refreshing myself on AudioContext, Canvas, and seeing other" +
    " ways to improve on the project." +
    "<br><br>" +
    "Summed up this project dealt with HTML/CSS, JSON, AudioContext API, and Canvas.";
};