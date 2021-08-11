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
    } else if(projList === "GTN") {
        getProjGuess (desc, thumbnail)
    } else {
        //If none is found, default message
        desc.innerHTML = "could not find";
    }
};

//Landmark Finder
function getProjLandmark (desc, thumbnail){
    thumbnail.src = "../images/mapboxAPI.JPG";
    thumbnail.alt = "Landmark Finder Thumbnail";
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
    thumbnail.src = "../images/spaceExp.JPG";
    thumbnail.alt = "Outer Space Experience Thumbnail";
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

//Guess The Number
function getProjGuess (desc, thumbnail){
    thumbnail.src = "../images/guess game/guessGame.jpg";
    thumbnail.alt = "under construction"
    desc.innerHTML = "The development of this project started July 9th 2021, " +
    "as a means of something fun for me to create while expanding my knowledge " +
    "on Javascript and CSS. I wanted to create something where I can use both " +
    "my gaming and web design skills.<br>" +
    
    "<br><strong>July 11th 2021</strong><br>" +
    "After a bit of time and effort the game is finally done. WELL almost done, " +
    "from the V1.0 image we have a look, where the game is very bland in style " +
    "and not a lot of logic is finished yet. The game at this point checks if the " +
    "user has guesses left and if they answer correctly. But it does not check to " +
    "see if they should be able to guess after they guess correctly. " +
    "As for the process, the user presses start, and the JS then changes the start " +
    "button to a restart one and also adds more html elements like the guess button " +
    "and text box. The user guesses and the JS responds based on if they have enough " +
    "guesses, if the number matches the one randomly created. If it matches, they " +
    "win! (but doesnt stop them from guessing). If not the game continues and their " +
    "total guesses lower until they eventually hit 0 in which they can no longer " +
    "guess and must hit restart. " +
    "It is very exciting to see that something I created is functioning and I’m " +
    "already brainstorming on what other mechanics I may be able to add. " +
    "As of now I have point systems, and fully functioning logic in my plans. And confetti!<br> " +
    
    "<br><strong>July 12th 2021</strong><br>" +
    "It’s late and not even a minute has passed 12am and Im continuing work on this " +
    "project. And V1.1 is done (No new picture as only new text has been added so " +
    "nothing visual has changed! I added some more logic and conditions so now " +
    "even with a correct answer the player can no longer continue to guess. Now " +
    "on to working on the higher and lower system. " +
    "Okay it is 1:16am and the Higher or Lower function now works! When a user guess " +
    "I have JS checking and comparing the numbers to give back appropriate feedback. " +
    "The game is finally complete and I am filled with immense joy seeing the minimal product done. " +
    "It’s 5:47pm and I have just pushed a final check for user guesses. " +
    "Now player’s won’t be able to guess when they use words.<br>" +
    
    "<br><strong>July 14th</strong><br>" +
    "As the game and its main mechanics have been finished I have finally implemented " +
    "a point system upon playing the game completing V1.2. Using local storage points are saved and " +
    "then earned upon wins in the game, And because they are in local storage you can " +
    "leave the site and come back and still have your points! As of now though not much " +
    "can be done with them, but plans to integrate a shop with different backgrounds and " +
    "confetti is in the works.<br>" +
    
    "<br><strong>August 11th 2021</strong><br>" +
    "It has been awhile since I last touched my project, due in part to distractions, "+
    "side jobs, and other activities that have required my attention. But I have been " +
    "looking into ways of getting my goals to work for the Guessing Game like confetti " +
    "on wins and a store. While the store should be relatively easy to make, the confetti " +
    "has proven more difficult as I need to find a way to layer it over the screen and also " +
    "should I make my own? Should I use canvas? Pixel art? Or do I just find a royalty free GIF " +
    "online and use that? I’m exploring my options, so in the meantime I plan to work on the store " +
    "and have purchasable items that will change the background and button colors, and even maybe the style.<br>";
};