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
        showPic(0, "GTNthumbSelect");
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


//To be used for picture display
let picDisplay = 0;

//Shows the; prev pic, next pic, or picture clicked
function prevPic(n, name) {
    showPic(picDisplay -=n, name);
}
function nextPic(n, name) {
    showPic(picDisplay +=n, name);
}
function showSelected(n, name){
    picDisplay = n;
    showPic(picDisplay, name);
}
        
//Dictates which pictures to show based on class and project shown
//Also formats number so length accounts for array, 
//IE Starting number is 0 or subtracting 1 from length to account for Array
function showPic(n, name) {
    let thumbnails = document.getElementsByClassName(name);
    let totalPics = thumbnails.length-1;
    let prevGTN = document.getElementById("prevGTN");
    let curntGTN = document.getElementById("curntGTN");
    let nextGTN = document.getElementById("nextGTN");

    //Resets and clears image holders before adding the next ones
    while(prevGTN.hasChildNodes()){
        prevGTN.removeChild(prevGTN.lastChild);
    }while(curntGTN.hasChildNodes()){
        curntGTN.removeChild(curntGTN.lastChild);
    }while(nextGTN.hasChildNodes()){
        nextGTN.removeChild(nextGTN.lastChild);
    }

    //If the number exceeds length, restarts to the beginning of the picture wheel
    if(n > totalPics) {
        picDisplay = 0;
    }

    //If the number goes below length, starts from the end of the picture wheel
    if(n < 0) {
        picDisplay = totalPics;
    };

    //If n is between the two points, picture to be displayed is changed
    if(0 <= n && n <= totalPics)
    {
        picDisplay = n;
    }

    //Loops through all the pics and lowers opacity
    for(let i = 0; i <= totalPics; i++)
    {
        thumbnails[i].style.display= "none";
        thumbnails[i].style.width="80%";
        thumbnails[i].style.verticalAlign = "middle";
    }

    //Pic before selected will be shown
    //Checks the image before is not below 0
    //Clones and adds clone to its appropriate spot
    if(picDisplay-1 < 0)
    {
        let prevClone = thumbnails[totalPics].cloneNode();
        prevClone.style.display = "";
        //prevClone.style.opacity = "0.5";
        prevClone.classList.remove(name);
        prevGTN.appendChild(prevClone);
    } else if(picDisplay-1 == 0){
        let prevClone = thumbnails[0].cloneNode();
        prevClone.style.display = "";
        //prevClone.style.opacity = "0.5";
        prevClone.classList.remove(name);
        prevGTN.appendChild(prevClone);
    }else{
        let prevClone = thumbnails[picDisplay-1].cloneNode();
        prevClone.style.display = "";
        //prevClone.style.opacity = "0.5";
        prevClone.classList.remove(name);
        prevGTN.appendChild(prevClone);
    }

    //Which ever pic is on display will be shown bright
    //Clones and adds clone to its appropriate spot
    let curntClone = thumbnails[picDisplay].cloneNode();
    curntClone.style.display = "";
    curntClone.style.width = "100%";
    curntClone.classList.remove(name);
    curntGTN.appendChild(curntClone);

    //Next pic is shown 
    //Checks next picture doesnt go over limit
    //Clones and adds clone to its appropriate spot
    if(picDisplay+1 > totalPics)
    {
        let nextClone = thumbnails[0].cloneNode();
        nextClone.style.display = "";
        //nextClone.style.opacity = "0.5";
        nextClone.classList.remove(name);
        nextGTN.appendChild(nextClone);
    } else if(picDisplay+1 == totalPics){
        let nextClone = thumbnails[totalPics].cloneNode();
        nextClone.style.display = "";
        //nextClone.style.opacity = "0.5";
        nextClone.classList.remove(name);
        nextGTN.appendChild(nextClone);
    }
    else{
        let nextClone = thumbnails[picDisplay+1].cloneNode();
        nextClone.style.display = "";
        //nextClone.style.opacity = "0.5";
        nextClone.classList.remove(name);
        nextGTN.appendChild(nextClone);
    }
}
