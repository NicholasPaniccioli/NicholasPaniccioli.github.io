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
    desc.innerHTML = "<p>This project was originally created as a school project back in April 2020." +
    " For a month I had to program a site that used Two APIs together to create something useful." +
    " So I designed my own API using PHP to organize and return Landmarks based on user input." +
    " Then combined with the MapBox API, I was able to map out and give back the location of those" +
    " landmarks." + 
    "<br><br>" +
    "While I was unable to finish the project, the final product would've included functionality" +
    " such as facts and pictures of the landmarks showing up, more ways to filter through landmarks," +
    " and more ways to interact with the map." +
    "<br><br>" +
    "Overall the project deals in HTML/CSS, JSON, PHP, and APIs.</p>";
};

//Outer Space Exprience
function getProjSpace (desc, thumbnail){
    thumbnail.src = "../images/spaceExp.JPG";
    thumbnail.alt = "Outer Space Experience Thumbnail";
    desc.innerHTML = "<p>Outer Space Experience was a school projected I worked on in March of 2020." +
    " The goal of the project was to create a visual experience using Canvas and the AudioContext API to" +
    " allow a user to change multiple settings of what was being shown. I gave users the options to change" +
    " the speed of the surrounding planets, the color and direction of the visual audio." +
    "<br><br>" +
    "The project is finished as of right now with no urgency for updates. My plans for the project however" +
    " do include some updates to the layout and the audio waves because they aren't perfectly perpendicular." +
    " Other than that it's just going through and refreshing myself on AudioContext, Canvas, and seeing other" +
    " ways to improve on the project." +
    "<br><br>" +
    "Summed up this project dealt with HTML/CSS, JSON, AudioContext API, and Canvas.</p>";
};

//Guess The Number
function getProjGuess (desc, thumbnail){
    thumbnail.src = "../images/guess game/guessGame.jpg";
    thumbnail.alt = "under construction"
    desc.innerHTML = "<p>The development of this project started <strong>July 9th 2021</strong>, " +
    "as a means of something fun for me to create while expanding my knowledge " +
    "on Javascript and CSS. I wanted to create something where I can use both " +
    "my gaming and web design skills.</p><br>" +
    
    "<br><strong>July 11th 2021</strong><br>" +
    "<p>After a bit of time and effort the game is finally done. Almost done anyways, " +
    "from the V1.0 image we have a look, where the game is very bland in style " +
    "and not a lot of logic is finished yet. The game at this point checks if the " +
    "user has guesses left and if they answer correctly. But it does not check to " +
    "see if they should be able to guess after they guess correctly. " +
    "As for the process, the user presses start, and the JS then changes the start " +
    "button to a restart one and also adds more html elements like the guess button " +
    "and text box. The user guesses and the JS responds based on if they have enough " +
    "guesses and/or if the number matches the one randomly created. If it matches, they " +
    "win! (but doesnt stop them from guessing). If not the game continues and their " +
    "total guesses lower until they eventually hit 0 in which they can no longer " +
    "guess and must hit restart. " +
    "It is very exciting to see that something I created is functioning and I’m " +
    "already brainstorming on what other mechanics I may be able to add. " +
    "As of now I have point systems, and fully functioning logic in my plans. And confetti!</p><br> " +
    
    "<br><strong>July 12th 2021</strong><br>" +
    "<p>It’s late and not even a minute has passed 12am and Im continuing work on this " +
    "project. And V1.1 is done (No new picture as only new text has been added so " +
    "nothing visual has changed) I added some more logic and conditions so now " +
    "even with a correct answer the player can no longer continue to guess. Now " +
    "on to working on the higher and lower system. " +
    "Okay it is 1:16am and the Higher or Lower function now works! When a user guesses " +
    "I have JS checking and comparing the numbers to give back appropriate feedback. " +
    "The game is finally complete and I am filled with immense joy seeing the minimal product done. " +
    "It’s 5:47pm and I have just pushed a final check for user guesses. " +
    "Now player’s won’t be able to guess when they use words.</p><br>" +
    
    "<br><strong>July 14th</strong><br>" +
    "<p>As the game and its main mechanics have been finished I have finally implemented " +
    "a point system upon playing the game completing V1.2. Using local storage, points are saved and " +
    "then earned upon wins in the game, And because they are in local storage you can " +
    "leave the site and come back and still have your points! As of now though not much " +
    "can be done with them, but plans to integrate a shop with different backgrounds and " +
    "confetti is in the works.</p><br>" +
    
    "<br><strong>August 11th 2021</strong><br>" +
    "<p>It has been awhile since I last touched my project, due in part to distractions, "+
    "side jobs, and other activities that have required my attention. But I have been " +
    "looking into ways of getting my goals to work for the Guessing Game like confetti " +
    "on wins and a store. While the store should be relatively easy to make, the confetti " +
    "has proven more difficult as I need to find a way to layer it over the screen and also " +
    "should I make my own? Should I use canvas? Pixel art? Or do I just find a royalty free GIF " +
    "online and use that? I’m exploring my options, so in the meantime I plan to work on the store " +
    "and have purchasable items that will change the background and button colors, and even maybe the style.</p><br>" +
    
    "<br><strong>August 15th 2021</strong><br>" +
    "<p>After doing some research and figuring out how to do a proper overlay I have finally implemented " +
    "V1.3 which adds the long awaited confetti! Well not 100%. The logic is there and now it's easy to " +
    "put any picture or GIF in place of the current test GIF that I made. Now to make " +
    "better looking confetti and then create a store.</p><br>" +

    "<br><strong>August 19th 2021</strong><br>" +
    "<p>Tabs have been added which is paving the way to having a store and other things for my game. " +
    "V1.4 and V1.41 have been pushed. They bring new tabs and css changes for the tabs and other " +
    "responsiveness towards smaller screens. Currently tabs are buttons set with the same JS I used " +
    "on the slideshow on my index page. Only instead of pictures and some buttons its going to be used " +
    "to switch between the game, the store, and eventually achievements and player stats.</p><br>" +

    "<br><strong>September 1st, 9th, & 12th, 2021</strong><br>" +
    "<p>So we have a lot of ground to cover. Due in my part for forgetting to write updates. " +
    "So to make things easier we're going to break it down by the dates and what happened. " +
    "<br>Sept 1st - V1.4.3 I created and added my own pixel art confetti for the win screen. " +
    "I'm extremely happy with it as Itss fun to see something I made come to life in the game and it's confetti!" +
    "<br>Sept 9th - V1.5 This was a big day. I sat myself down and worked entirely on the logic for the store. Previously " +
    "all the store checked for was if they had a certain amount of points and then unlocked the color(and you could switch it). " +
    "It didn't take away points and when the page refreshed the colors would be locked again. " +
    "So to keep this short I created a function that would check the color picked, how much it was, " +
    "and what to do if the player did or didn't have the right amount points. So now the store acts like a store. " +
    "I also added a function that uses a new localStorage key/value in order to keep unlocked items, unlocked. Even after refreshing the page." +
    "<br>Sept 12th - V1.5.1 So after resting for the weekend from a good coding session I came back to work " +
    "only to find the store no longer working. Colors weren't staying unlocked when refreshed, my buttons attritbutes were no longer changing, " +
    "and worst of all unlocked colors still took points when you wanted to use them. So I had to redo " +
    "the way my buttons worked. I created a whole new section of buttons that are now responsible for " +
    "color changing and one row responsible for unlocking. So now when clicked the unlock button hides and " + 
    "the color changing buttons appears. Lastly made a few adjustments to the function that keeps things unlocked and the store now works! Again </p>" +
    
    "<br><strong>September 20th 2021</strong><br>" +
    "<p>V2.0 is complete and brings with it a newly completed tab! Stats has been a long term goal " + 
    "that I'm excited to finally have completed. Now players who play the guessing game can find all the " +
    "fun little statistics about how they play, from the number of times they've won to how many points " +
    "they've earned over the course of their entire time playing. All of this was accomplished by working " +
    "with some JS and the local storage. Creating some logic for each stat and placing those functions " +
    "in the correct spot allow me to update and change the stats that I have created for the player." +
    "Now while this doesn't changemuch in the way of game mechanics it's fun to see the numbers grow " + 
    "and answer the question of 'how good am I?'.<br>" +
    "With the stats tab finished that leaves one big challenge left, Achievements. Currently the plan " +
    "is to write/put 10 or so individual achievements players can earn. Do some art assets so when " +
    "they do earn them they get fun pixel art badges. And when all of that is done, start to write out " +
    "the JS functions that will overwatch and reward players with these badges. That concludes the V2.0 update!</p><br>" +

    "<br><strong>September 23rd 2021</strong><br>" +
    "<p>V2.5 is out and players can now start earning achievements! All the logic is placed and everything " +
    "seems to work without a hitch, but some longer playtesting will make that certain. With the game pretty much " +
    "finished, what next? Well for starters, I still need to design and implement the pixel art badges. As of now it's " +
    "just text, so not a full update which is why it's 2.5 and not 3.0. However once I get that done, I need to add some " +
    "more content to the store, meaning new confetti more colors, text color options etc. Which will include more JS changes. " +
    "But once all of that is said and done I have plans to work on the CSS to really clean up the look of the game." +
    "After that the game will be done and we will see whether or not I have further plans to work on the game.</p><br>";

};