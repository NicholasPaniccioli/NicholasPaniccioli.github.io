//Gives back the appropriate info based on selected project
function getProject (proj){
    // Grabs all the projects in the list
    let projList = document.getElementById('projList');
    let projPic = document.getElementById('projPic');

    //Hamburger button
    projList.innerHTML = "&#9776";
    //Finds the project selected and gives documentation
    //PROJECTS IN ALPHABETICAL ORDER
    if(proj === "GTN") {
        displayDocumentation("guessTheNumber");
        projList.innerHTML += "  Guess The Number";
        projPic.src = "../images/guess game/guessGame.jpg";
    } else if(proj === "LF") {
        //Landmark Finder
        displayDocumentation("landmarkFinder");
        projList.innerHTML += "  Landmark Finder";
        projPic.src = "../images/portfolio/mapboxAPI.JPG";
    } else if(proj === "OSE") {
        //Outer Space Experience
        displayDocumentation("outerSpaceExperience");
        projList.innerHTML += "  Outer Space Experience";
        projPic.src = "../images/portfolio/spaceExp.JPG";
    } else {
        //If none is found, default message
        alert("Sorry, was unable to find that project. Loading Default!");
    }

};

//Shows documentation selected and hides the rest
function displayDocumentation(projectName){

    let projectsDocumentation = document.getElementsByClassName("projectsDocumentation");
    
    for(let i = 0; i < projectsDocumentation.length; i++){
        projectsDocumentation[i].style.display = "none";

        if(projectsDocumentation[i].getAttribute("id") === projectName){
            projectsDocumentation[i].style.display = "block";
        }
    }
};