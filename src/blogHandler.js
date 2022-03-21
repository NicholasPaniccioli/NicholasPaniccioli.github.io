//Gets all the Blogs and displays them properly
function getBlogs(){

    let blogContainer = document.getElementById("blogContainer");
    blogContainer.innerHTML += "";

   for(let i = 0; i < blogs.length; i++){
       blogContainer.appendChild(createBlog(blogs[i][0], blogs[i][1]));
        blogContainer.innerHTML += "<br><br>";
   }
}

//Stores blogs header and description
let blogs = [
    ["test 1", "Testing JS script which will automate creation of posts and place them correctly"],
    ["test 2", "Leading to options of filtering"]
];

//Takes header and blog post to put together a div to add to the page
function createBlog(header, desc){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","blogDiv");

    let newH4= document.createElement("h4");
    newH4.setAttribute("class","updateHead");
    newH4.innerHTML = header;

    let newHR= document.createElement("hr");
    newHR.setAttribute("class","updateLine");

    let newP = document.createElement("p");
    newP.setAttribute("class","update");
    newP.innerHTML = desc;

    newDiv.appendChild(newH4);
    newDiv.appendChild(newHR);
    newDiv.appendChild(newP);

    return newDiv;
}