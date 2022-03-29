//Gives back the appropriate info based on selected project
function getProject (proj){
    // Grabs all the projects in the list, the container for the thumbnail, and the view button
    let projList = document.getElementById('projList');
    let projPic = document.getElementById('projPic');
    let viewBtn = document.getElementById('viewBtn');

    //Resets Project Picture to Show it
    projPic.style.display ="block";

    //By default gives alert saying there is no view page for a given project and brings back button if hidden
    viewBtn.onclick = function(){alert("Hi there! Unfortunately there's no site to view this work. This may be because"
    + " it's being worked on currently or the product itself is on a different platform.");}
    viewBtn.style.display = "inline";

    //Hamburger button
    projList.innerHTML = "&#9776";
    //Finds the project selected and gives documentation, thumbnail, and appropriate view link (if one is given)
    //PROJECTS IN ALPHABETICAL ORDER
    if(proj === "CLD") {
        //Citadel Level Design
        displayDocumentation("citadelLevelDesign");
        projList.innerHTML += "  Citadel Level Design";
        projPic.src = "../images/projects/CLD/SewerLD-B.png";
        viewBtn.style.display = "none";
    } else if(proj === "GTN") {
        //Guess The Number
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
    } else if(proj === "") { //ATTENTION Needs to be filled in upon completing the project section
        //Pixel Art
        displayDocumentation("pixelArt");
        projList.innerHTML += "  Pixel Art";
        projPic.src = "";
        projPic.style.display ="none";
        viewBtn.style.display = "none";
    } else if(proj === "PORT") {
        //Portfolio Site
        displayDocumentation("portfolioSite");
        projList.innerHTML += "  Portfolio Site";
        projPic.src = "../images/projects/PORT/Home-A.jpeg";
        viewBtn.style.display = "none";
    } else if(proj === "VRC") {
        //VR Convention
        displayDocumentation("vrConvention");
        projList.innerHTML += "  VR Convention";
        projPic.src = "../images/projects/VRC/Convention-A.JPG";
        viewBtn.style.display = "none";
    } else {
        //If none is found, default message and default project
        alert("Sorry, was unable to find that project This may be because the page is still being worked on. So I'll load the default!");
        displayDocumentation("guessTheNumber");
        projList.innerHTML += "  Guess The Number";
        projPic.src = "../images/projects/GTN/GTN-Thumb.JPG";
        viewBtn.onclick = function() {window.open('game.html','_blank')};
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

//On window loads, gives correct project based on button clicked
function onloadProject (){
    let selectedProject = window.location.href;
    if(selectedProject.includes('?')){
        // console.log("special link");
        // console.log(selectedProject.indexOf('?'));
        // console.log(selectedProject.length);

        let selectedWord = "";
        for(let i = selectedProject.indexOf('?') + 1; i < selectedProject.length; i++){
            selectedWord += selectedProject[i];
        }

        console.log(selectedWord);
        proj=selectedWord;

        getProject(proj);
    }
}