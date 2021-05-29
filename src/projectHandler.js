function getProject (){
    const projList = document.querySelector("#projList").value;

    if(projList === "OSE")
    {
        let desc = document.querySelector("#projDesc");
        desc.innerHTML = "OSE project desc, testing";
    } else if(projList === "LF")
    {
        let desc = document.querySelector("#projDesc");
        desc.innerHTML = "LF project desc, testing";
    } else {
        let desc = document.querySelector("#projDesc");
        desc.innerHTML = "could not find";
    }
};