//Gives back the appropriate info based on selected project
function getProject (proj){
    //Finds the project selected and gives documentation
    //PROJECTS IN ALPHABETICAL ORDER
    if(proj === "GTN") {
        displayDocumentation("guessTheNumber");
    } else if(proj === "LF") {
        //Landmark Finder
        displayDocumentation("landmarkFinder");
    } else if(proj === "OSE") {
        //Outer Space Experience
        displayDocumentation("outerSpaceExperience");
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