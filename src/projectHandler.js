//Gives back the appropriate info based on selected project
function getProject (proj){
    // Grabs all the projects in the list, the container for the thumbnail, and the view button
    let projList = document.getElementById('projList');
    let projPic = document.getElementById('projPic');
    let viewBtn = document.getElementById('viewBtn');

    //By default gives aleart saying there is no view page for a given project
    viewBtn.onclick = function(){alert("Hi there! Unfortunately there's no site to view this work. This may be because"
    + " it's being worked on currently or the product itself is on a different platform.");}

    //Hamburger button
    projList.innerHTML = "&#9776";
    //Finds the project selected and gives documentation, thumbnail, and appropriate view link (if one is given)
    //PROJECTS IN ALPHABETICAL ORDER
    if(proj === "GTN") {
        displayDocumentation("guessTheNumber");
        projList.innerHTML += "  Guess The Number";
        projPic.src = "../images/projects/GTN/GTN-Thumb.JPG";
        viewBtn.onclick = function() {window.open('game.html','_blank')};
    } else if(proj === "LF") {
        //Landmark Finder
        displayDocumentation("landmarkFinder");
        projList.innerHTML += "  Landmark Finder";
        projPic.src = "../images/projects/LF/LF-Thumb.jpeg";
        viewBtn.onclick = function(){window.open('https://people.rit.edu/njp7745/330/exercises/Project-3/','_blank')};
    } else if(proj === "OSE") {
        //Outer Space Experience
        displayDocumentation("outerSpaceExperience");
        projList.innerHTML += "  Outer Space Experience";
        projPic.src = "../images/projects/OSE/OSE-Thumb.jpeg";
        viewBtn.onclick = function(){window.open('https://people.rit.edu/njp7745/330/exercises/Project-2/','_blank')};
    } else if(proj === "PORT") {
        //VR Convention
        displayDocumentation("portfolioSite");
        projList.innerHTML += "  My Portfolio Site";
        projPic.src = "../images/projects/PORT/Home-A.jpeg";
    } else if(proj === "VRC") {
        //VR Convention
        displayDocumentation("vrConvention");
        projList.innerHTML += "  VR Convention";
        projPic.src = "../images/projects/VRC/Convention-A.JPG";
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