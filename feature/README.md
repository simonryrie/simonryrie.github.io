# Feature - BLACKOUT #

## Planning ##

After deciding that I wanted to create a text-based, choose-your-own-adventure style game, I initially created a flowchart with a rough outline of the scenarios that the game would cover. This helped to give me an understanding of the scope of my game and to begin to visualise what it might look like.

Based on the theme of the narrative, which was inspired by 2019 RPG Disco Elysium, I drew a basic wireframe of the interface and chose a basic white on black colour scheme. As a text-based game with two options per scenario, the layout was very simple. To give a more dynamic feel, add visual interest and provide appropriate pacing, I decided that the text should be introduced letter by letter.

I knew that I wanted each scenario to be represented by a JavaScript object as this would mean I could easily replicate code that interacted with these objects.

With the main concept relying on relatively simple code, I knew that I wanted to add some additional features that would make the game feel more responsive and interesting. For this reason, I decided to include:
- Audio for each scenario with the option to mute and unmute (I created this myself)
- A welcome page with a choice to input player name (this would be recalled later in the game)
- A random name generator for quick play
- An additional visual effect on the opening screen - I decided on the 'torch' effect used as it tied in well with the theme of the game
- An ending screen which provided feedback on the player's progress in the game

## Building ##

I began by building the game's basic interface by creating an HTML outline of the page, the first few scenario objects and then editing CSS for these elements.

I then added a JS function using setInterval that added the text letter by letter.

Initially, I had planned to create only two buttons in HTML, then edit their innerHTML on each scenario change (see debug note 1). The approach I settled on was creating individual buttons for each scenario/option, which had onclick event listeners linked to functions that would take the player to the appropriate next scenario.

Now that the overall structure of my game was functional, I was able to build the majority of the scenarios without any significant issues.

I wrote some simple music for each of the game's four main settings and began to add audio. I had not realised that browsers disabled autoplayed audio by default, but wanted to provide a clean and simple way for the player to begin playing audio. I added an audio toggle button in the bottom corner and a function that changed the audio source when necessary.

With the main parts of the game beginning to take shape, I added the welcome screen to the beginning of the game with the title, name input form and random name generator. The player name is capitalised and saved to a variable to use later.

Next, I added the 'torch' effect that is seen on the welcome page. This works by creating a divider in the HTML body with a solid black background a radial gradient transparent circle that tracks the mouse's position using touchmove and mousemove. While I learned how to do this from a tutorial, I wrote the code myself and made some edits to it e.g. editing the circle's position relative to the cursor and adding the functionality to click 'through' the divider and access the content beneath.

Lastly, I created the last scenarios of the game and the ending page. Knowing that I wanted the ending page to give some feedback on the player's actions, I created an array called scenariosVisited and added a line to each goToScenario function that pushed a string to this array. On the ending slide, I created a function which checks whether scenariosVisited includes these strings, and displays/hides a line of text in response. I used setTimeout to delay the appearance of this text and the 'play again'/'end session' buttons.

## Debugging ##

1) The first major issue that I ran into was the use of my buttons to change scenario. My original plan had been to create two buttons in the page's HTML, edit their inner HTML depending on the scenario used, and use if/else or switch statements to check the 'current scenario' or button's innerHTML. While I was able to create functioning buttons for the first scenario, the event listeners would not change based on these criteria and so the buttons would always link to the same scenarios.

After speaking to Zachary at the coding meet up, he recommended that I do away with 'if/else' or 'switch' statements and instead create individual buttons for each scenario/choice, which I could then display / hide using DOM manipulation. I found that this was a much cleaner way to approach the problem and once I rewrote my code, I had no more issues with the buttons.

2) A smaller issue that I encountered was buttons continuing to display when moving to new scenarios. This was due to a simple error on my part of not considering which other scenarios the player may have been travelling FROM, and was easily amended by adding some extra lines of code for these circumstances.

3) I had some trouble getting the playerName variable (taken from the player's input on the welcome screen) to display as a string later in the game. I resolved the issue by moving the added variable from the scenario object's 'text' value and instead using string concatenation to append it to the text in the scenarios goToScenario function.

4) Throughout my build and debugging, I used console.log() and checked the console's error messages to quickly find and resolve minor issues.
