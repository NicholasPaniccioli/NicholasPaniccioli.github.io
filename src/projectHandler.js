//Gives back the appropriate info based on selected project
function getProject (){
    //Gets the project
    const projList = document.querySelector("#projList").value;

    //Checks which one and gives documentation
    if(projList === "OSE")
    {
        let desc = document.querySelector("#projDesc");
        desc.innerHTML = "OSE project desc, testing";
    } else if(projList === "LF")
    {
        let desc = document.querySelector("#projDesc");
        desc.innerHTML = "LF project desc, testing";
    } else {
        //If none is found, default message
        let desc = document.querySelector("#projDesc");
        desc.innerHTML = "could not find";
    }
};