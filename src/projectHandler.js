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
    desc.innerHTML = "LF project desc, testing";
};

//Outer Space Exprience
function getProjSpace (desc, thumbnail){
    thumbnail.src = "images/spaceExp.JPG";
    desc.innerHTML = "OSE project desc, testing";
};