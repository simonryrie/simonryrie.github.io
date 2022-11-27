// welcome screen

document.getElementById("textContainer").style.display = "none"
document.getElementById("buttonContainer").style.display = "none"
document.getElementById("audioControls").style.display = "none"

const randomiser = document.getElementById("randomiser")

randomiser.addEventListener("click", randomiseName)

function randomiseName() {
    let name = ""
    switch (Math.floor(Math.random()* 10)) {
    case 0:
        name = "Elvis";
        break;
    case 1:
        name = "Ozzy";
        break; 
    case 2:
        name = "Lionel";
        break;
    case 3:
        name = "Marvin";
        break;
    case 4:
        name = "Kurt";
        break;
    case 5:
        name = "Whitney";
        break;
    case 6:
        name = "Stevie";
        break;
    case 7:
        name = "Tina";
        break;
    case 8:
        name = "Nina";
        break;
    case 9:
        name = "Patti";
        break;
    }
const nameInput = document.getElementById("name")
nameInput.value = ""
nameInput.value += name
}

const playButton = document.getElementById("play")

playButton.addEventListener("click", readyToPlay)

const nameInput = document.getElementById("name")

let playerName = "";

function readyToPlay() {
    if(nameInput.value == "") {
        alert("Insert a player name");
    }
    else {
        playerName = `${nameInput.value}`;
        playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("textContainer").style.display = "inline";
        document.getElementById("audioControls").style.display = "inline";
        document.getElementById("torch").style.display = "none";
        letterByLetter("text", opening.text, 30);
    }
}

//letter by letter function
document.getElementById("buttonContainer").style.display = "none"

function letterByLetter(destination, message, speed) {
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            document.getElementById("buttonContainer").style.display = "flex"
            clearInterval(interval);
        }
    }, speed);
}

function letterByLetterEnd(destination, message, speed) {
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            const myTimeout = setTimeout(showEndings, 500)
            function showEndings() {
                document.getElementById("endings").style.display = "inline"
                const myTimeoutTwo = setTimeout(showReplayButtons, 1000)
                function showReplayButtons() {
                    document.getElementById("buttonContainer").style.display = "flex"
                }
            }
            
            clearInterval(interval);
        }
    }, speed);
}

//torch

let mouseX = 0;
let mouseY = 0;
let torch = document.getElementById("torch");
function touchDevice() {
    try {
        document.createEvent("touchEvent");
        return true;
    } catch (e) {
        return false;
    }
};

function getMousePosition(e) {
    mouseX = !touchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !touchDevice() ? e.pageY : e.touches[0].pageY;

    mouseX -= 0
    mouseY -= 120

    torch.style.setProperty("--Xpos", mouseX + "px");
    torch.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

//scenarios

const opening = {
    text: "You awaken to find yourself lying on soft furnishing in a small room. The space is dark, except for the dim glow of a pile of multi-coloured orbs in its centre. Twinkling ambient music drifts through the air from an unknown source. Although you cannot be certain, you sense the presence of other bodies around you. On the far side of the room, vertical stripes of white light stream through a doorway but are quickly overwhelmed by the gloom.",
    options: ["Approach one of the bodies and ask where you are", "Walk towards the light"],
    audio: "ambient.mp3"
}

const askBody = {
    text: "You approach what appears to be a human figure, curled up in the foetal position on some kind of beanbag. The body seems to sense your presence, but in response to your questions you hear only groans. Perhaps it is best left alone - there is nothing intelligible to be found here.",
    options: ["Go and lie down again", "Walk towards the light"],
    audio: "ambient.mp3"
}

const towardsLight = {
    text: "You stumble towards the light, feeling unsteady but oddly euphoric. As you approach its source, you find it is a doorway covered by colourful dangling beads. You pass through this plastic veil to find yourself in an industrial-looking corridor. Blinking under harsh lights, you can see a door with a unisex toilet sign to your right. To the left, there are heavy double doors through which you can hear the muffled thump of heavy bass. The metal light fittings rattle sympathetically.",
    options: ["Go into the toilet", "Go through the double doors"],
    audio: "corridor.mp3"
}

const toilets = {
    text: "Entering the toilet, a smell of strong chemicals passes your nose. Aside from some minor graffiti, the bathroom is in good condition - you recall that you have seen worse. There are four cubicles. Three are empty. From the fourth, you hear two voices speaking in hushed, excited tones. Above the sinks, there is a large mirror surrounded by worn stickers.",
    options: ["Ask for help", "Look in the mirror"],
    audio: "toilets.mp3"
}

const askForHelp = {
    text: "In the bright lights of the bathroom, you stumble over your words. You manage to blurt out a question, or perhaps it was two questions spoken in the space of one. The hushed voices turn to cautious whispers. There is no help here.",
    options: ["Look in the mirror", "Leave the bathroom"],
    audio: "toilets.mp3"
}

const lookInTheMirror = {
    text: "As you turn your head towards the mirror, your eyes are drawn to a garishly coloured sticker of a winking sailor. He leers down at you as a speech bubble from his mouth proclaims, 'MILK, MAN'. Moving your gaze towards the centre of the mirror, you see a familiar face. It looks slightly too old to be here. A cold rush of guilt spills from your head downwards and out to your extremities.",
    options: ["Ask for help", "Leave the bathroom"],
    audio: "toilets.mp3"
}

const backToCorridor = {
    text: "Back into the corridor. From this angle, you can see a piece of paper blu-tacked above the beaded doorway to the room you started in. Printed on it are 3 words: 'Chill Out Room'. From the far end of the corridor, you feel a deep rumble, more in your chest than your ears - the irresistible call of the bass. Although you feel very tired, a strange energy courses through your veins.",
    options: ["Chill out", "Head towards the bass"],
    audio: "corridor.mp3"
}

const mainRoom = {
    text: "It takes all your strength to push open the heavy doors. As you pass the threshold, your senses are assaulted by a powerful flashing light and the sound of pounding, repetitive beats. In the strobing light, writhing bodies are frozen mid-motion, contorted in tortured ecstasy like lost souls in a Hieronymous Bosch painting. The air is hot, but you feel a desire to join the sweating mass. In the far corner of the room, a red 'Exit' light glows dimly above a doorway.",
    options: ["Go to the dancefloor", "Go to the exit"],
    audio: "mainroom.mp3"
}

const dancefloor = {
    text: "Before you have time to consider whether this is a good idea, your feet start moving towards the dancefloor. Lead arm outstretched, you forge a path and wind your way deeper and deeper into the crowd. Just as you fear the pressure is becoming too great, you find an island of space in the sea of bodies. Arms raised, your hips begin to shake in what you hope is time with the music. Suddenly, you feel two hands grip your shoulders tightly from behind.",
    options: ["Turn around and greet this person"],
    audio: "mainroom.mp3"
}

const exit = {
    text: `A horizontal metal bar sits across the exit door, inviting your push. As you place a hand on its smooth metal coating, ready to make your escape, you hear a gruff, exasperated voice behind you. "Not through there. Emergencies only." It comes from a large, black-clad security guard. He doesn't offer any better ideas, but best not to try your luck here.`,
    options: ["Walk away quietly"],
    audio: "mainroom.mp3"
}

const sayHello = {
    text: `As you turn to face the voice, you see a friendly, if slightly concerned-looking, face. "Where have you been? We thought we'd lost you!" says its kind mouth, lined with purple-mauve lipstick. "Actually, looking at you... I think we'd better get you home. I'll order a taxi."`,
    options: ["Head for home"],
    audio: "mainroom.mp3"
}

const ending = {
    text: "Well done! You sit in the backseat of the taxi, finally on the way home. As you watch the city lights pass you by, you reflect on the night's events. You...",
    options: ["Play again", "End session"],
    audio: "ending.mp3"
}

//update audio source function

function updateSource(sourceURL){ 
    let audioSource = document.getElementById('audioSource');
    audioSource.src = sourceURL
    audio.load();
}

// initialise audio

updateSource(opening.audio)
document.getElementById("audio").pause()
document.getElementById("toggleMute").addEventListener("click", toggleMute)

// toggle mute button function

function toggleMute() { 
    if(document.getElementById("audio").paused) {
        document.getElementById("audio").play()
        document.getElementById("toggleMute").innerHTML = "🔇"
    }
    else {
        document.getElementById("audio").pause()
        document.getElementById("toggleMute").innerHTML = "🔊"
    }
}

// set buttons

const openingOne = document.getElementById("openingOne")
const openingTwo = document.getElementById("openingTwo")

const askBodyOne = document.getElementById("askBodyOne")
const askBodyTwo = document.getElementById("askBodyTwo")

const towardsLightOne = document.getElementById("towardsLightOne")
const towardsLightTwo = document.getElementById("towardsLightTwo")

const toiletsOne = document.getElementById("toiletsOne")
const toiletsTwo = document.getElementById("toiletsTwo")

const askForHelpOne = document.getElementById("askForHelpOne")
const askForHelpTwo = document.getElementById("askForHelpTwo")

const lookInTheMirrorOne = document.getElementById("lookInTheMirrorOne")
const lookInTheMirrorTwo = document.getElementById("lookInTheMirrorTwo")

const backToCorridorOne = document.getElementById("backToCorridorOne")
const backToCorridorTwo = document.getElementById("backToCorridorTwo")

const mainRoomOne = document.getElementById("mainRoomOne")
const mainRoomTwo = document.getElementById("mainRoomTwo")

const dancefloorOne =  document.getElementById("dancefloorOne")
const exitOne =  document.getElementById("exitOne")
const sayHelloOne =  document.getElementById("sayHelloOne")

const endingOne =  document.getElementById("endOne")
const endingTwo =  document.getElementById("endTwo")

askBodyOne.style.display = "none"
askBodyTwo.style.display = "none"

towardsLightOne.style.display = "none"
towardsLightTwo.style.display = "none"

toiletsOne.style.display = "none"
toiletsTwo.style.display = "none"

askForHelpOne.style.display = "none"
askForHelpTwo.style.display = "none"

lookInTheMirrorOne.style.display = "none"
lookInTheMirrorTwo.style.display = "none"

backToCorridorOne.style.display = "none"
backToCorridorTwo.style.display = "none"

mainRoomOne.style.display = "none"
mainRoomTwo.style.display = "none"

dancefloorOne.style.display = "none"
exitOne.style.display = "none"
sayHelloOne.style.display = "none"

endingOne.style.display = "none"
endingTwo.style.display = "none"

document.getElementById("endingOne").style.display = "none"
document.getElementById("endingTwo").style.display = "none"
document.getElementById("endingThree").style.display = "none"
document.getElementById("endingFour").style.display = "none"
document.getElementById("endingFive").style.display = "none"
document.getElementById("endingSix").style.display = "none"
document.getElementById("endingSeven").style.display = "none"
document.getElementById("endings").style.display = "none"

openingOne.innerHTML = opening.options[0]
openingTwo.innerHTML = opening.options[1]

askBodyOne.innerHTML = askBody.options[0]
askBodyTwo.innerHTML = askBody.options[1]

towardsLightOne.innerHTML = towardsLight.options[0]
towardsLightTwo.innerHTML = towardsLight.options[1]

toiletsOne.innerHTML = toilets.options[0]
toiletsTwo.innerHTML = toilets.options[1]

askForHelpOne.innerHTML = askForHelp.options[0]
askForHelpTwo.innerHTML = askForHelp.options[1]

lookInTheMirrorOne.innerHTML = lookInTheMirror.options[0]
lookInTheMirrorTwo.innerHTML = lookInTheMirror.options[1]

backToCorridorOne.innerHTML = backToCorridor.options[0]
backToCorridorTwo.innerHTML = backToCorridor.options[1]

mainRoomOne.innerHTML = mainRoom.options[0]
mainRoomTwo.innerHTML = mainRoom.options[1]

dancefloorOne.innerHTML = dancefloor.options[0]
exitOne.innerHTML = exit.options[0]
sayHelloOne.innerHTML = sayHello.options[0]

endingOne.innerHTML = ending.options[0]
endingTwo.innerHTML = ending.options[1]

// set button functions

let currentScenario = opening;

let scenariosVisited = []

openingOne.addEventListener("click", goToAskBody)

function goToAskBody() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = askBody
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            openingOne.style.display = "none"
            openingTwo.style.display = "none"
            askBodyOne.style.display = "inline"
            askBodyTwo.style.display = "inline"
            scenariosVisited.push("askBody")
}

openingTwo.addEventListener("click", goToTowardsLight)

function goToTowardsLight() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = towardsLight
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            openingOne.style.display = "none"
            openingTwo.style.display = "none"
            askBodyOne.style.display = "none"
            askBodyTwo.style.display = "none"
            towardsLightOne.style.display = "inline"
            towardsLightTwo.style.display = "inline"
            scenariosVisited.push("towardsLight")
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
}

askBodyOne.addEventListener("click", goToOpening)

function goToOpening() {
    document.getElementById("buttonContainer").style.display = "none"
    document.getElementById("endingOne").style.display = "none"
    document.getElementById("endingTwo").style.display = "none"
    document.getElementById("endingThree").style.display = "none"
    document.getElementById("endingFour").style.display = "none"
    document.getElementById("endingFive").style.display = "none"
    document.getElementById("endingSix").style.display = "none"
    document.getElementById("endingSeven").style.display = "none"
    document.getElementById("endings").style.display = "none"
    currentScenario = opening
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            askBodyOne.style.display = "none"
            askBodyTwo.style.display = "none"
            endingOne.style.display = "none"
            endingTwo.style.display = "none"
            openingOne.style.display = "inline"
            openingTwo.style.display = "inline"
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
            scenariosVisited = []
}

askBodyTwo.addEventListener("click", goToTowardsLight)

towardsLightOne.addEventListener("click", goToToilets)

function goToToilets() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = toilets
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            towardsLightOne.style.display = "none"
            towardsLightTwo.style.display = "none"
            toiletsOne.style.display = "inline"
            toiletsTwo.style.display = "inline"
            scenariosVisited.push("toilets")
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
}

towardsLightTwo.addEventListener("click", goToMainRoom)

function goToMainRoom() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = mainRoom
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            towardsLightOne.style.display = "none"
            towardsLightTwo.style.display = "none"
            backToCorridorOne.style.display = "none"
            backToCorridorTwo.style.display = "none"
            mainRoomOne.style.display = "inline"
            mainRoomTwo.style.display = "inline"
            scenariosVisited.push("mainRoom")
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
}

toiletsOne.addEventListener("click", goToAskForHelp)

function goToAskForHelp() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = askForHelp
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            toiletsOne.style.display = "none"
            toiletsTwo.style.display = "none"
            lookInTheMirrorOne.style.display = "none"
            lookInTheMirrorTwo.style.display = "none"
            askForHelpOne.style.display = "inline"
            askForHelpTwo.style.display = "inline"
            scenariosVisited.push("askForHelp")
}

toiletsTwo.addEventListener("click", goToLookInTheMirror)

function goToLookInTheMirror() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = lookInTheMirror
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            toiletsOne.style.display = "none"
            toiletsTwo.style.display = "none"
            askForHelpOne.style.display = "none"
            askForHelpTwo.style.display = "none"
            lookInTheMirrorOne.style.display = "inline"
            lookInTheMirrorTwo.style.display = "inline"
            scenariosVisited.push("lookInTheMirror")
}

askForHelpOne.addEventListener("click", goToLookInTheMirror)

askForHelpTwo.addEventListener("click", goToBackToCorridor)

function goToBackToCorridor() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = backToCorridor
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            askForHelpOne.style.display = "none"
            askForHelpTwo.style.display = "none"
            lookInTheMirrorOne.style.display = "none"
            lookInTheMirrorTwo.style.display = "none"
            backToCorridorOne.style.display = "inline"
            backToCorridorTwo.style.display = "inline"
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
}

lookInTheMirrorOne.addEventListener("click", goToAskForHelp)

lookInTheMirrorTwo.addEventListener("click", goToBackToCorridor)

backToCorridorOne.addEventListener("click", goToOpening)

backToCorridorTwo.addEventListener("click", goToMainRoom)

mainRoomOne.addEventListener("click", goToDancefloor)

exitOne.addEventListener("click", goToDancefloor)

function goToDancefloor() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = dancefloor
            text.innerHTML = ``
            letterByLetter("text", currentScenario.text + ` "${playerName}! What happened?" a familiar voice cries into your left ear.`, 30);
            mainRoomOne.style.display = "none"
            mainRoomTwo.style.display = "none"
            exitOne.style.display = "none"
            dancefloorOne.style.display = "inline"
            scenariosVisited.push("dancefloor")
}

mainRoomTwo.addEventListener("click", goToExit)

function goToExit() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = exit
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            mainRoomOne.style.display = "none"
            mainRoomTwo.style.display = "none"
            exitOne.style.display = "inline"
            scenariosVisited.push("exit")
}

dancefloorOne.addEventListener("click", goToSayHello)

function goToSayHello() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = sayHello
            text.innerHTML = ""
            letterByLetter("text", currentScenario.text, 30);
            dancefloorOne.style.display = "none"
            sayHelloOne.style.display = "inline"
            scenariosVisited.push("sayHello")
}

sayHelloOne.addEventListener("click", goToEnding)

function goToEnding() {
    document.getElementById("buttonContainer").style.display = "none"
    currentScenario = ending
            if(scenariosVisited.includes("askBody")) {
                    document.getElementById("endingOne").style.display = "block"
                }
            if(scenariosVisited.includes("toilets")) {
                    document.getElementById("endingTwo").style.display = "block"
                }
            if(scenariosVisited.includes("askForHelp")) {
                    document.getElementById("endingThree").style.display = "block"
                }
            if(scenariosVisited.includes("lookInTheMirror")) {
                    document.getElementById("endingFour").style.display = "block"
                }
            if(scenariosVisited.includes("exit")) {
                    document.getElementById("endingFive").style.display = "block"
                }
            if(scenariosVisited.includes("dancefloor")) {
                    document.getElementById("endingSix").style.display = "block"
                }
            document.getElementById("endingSeven").style.display = "block"

            text.innerHTML = ""
            letterByLetterEnd("text", currentScenario.text, 30);
            sayHelloOne.style.display = "none"
            endingOne.style.display = "inline"
            endingTwo.style.display = "inline"
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }            
}

endingOne.addEventListener("click", goToOpening)

endingTwo.addEventListener("click", goToWelcomePage)

function goToWelcomePage() {
    document.getElementById("textContainer").style.display = "none"
    endingOne.style.display = "none"
    endingTwo.style.display = "none"
    openingOne.style.display = "inline"
    openingTwo.style.display = "inline"
    document.getElementById("buttonContainer").style.display = "none"
    document.getElementById("audioControls").style.display = "none"
    document.getElementById("endings").style.display = "none"
    document.getElementById("welcomeScreen").style.display = "inline";
    endingOne.style.display = "none"
    nameInput.value = ""
    text.innerHTML = ""
    scenariosVisited = []
    document.getElementById("torch").style.display = "block";
    document.getElementById("audio").pause()
    document.getElementById("toggleMute").innerHTML = "🔊"
    currentScenario = opening;
    updateSource(currentScenario.audio);     
}

















/*
switch (buttonOne.innerHTML) {
    case "Approach one of the bodies and ask where you are":
        buttonOne.addEventListener("click", function() {
            currentScenario = askBody
            text.innerHTML = ""
            buttonOne.style.visibility = "hidden";
            buttonTwo.style.visibility = "hidden";
            letterByLetter("text", currentScenario.text, 30);
            changeButtons(currentScenario.options[0], currentScenario.options[1]);
        })
        buttonTwo.addEventListener("click", function() {
            currentScenario = towardsLight
            text.innerHTML = ""
            buttonOne.style.visibility = "hidden";
            buttonTwo.style.visibility = "hidden";
            letterByLetter("text", currentScenario.text, 30);
            changeButtons(currentScenario.options[0], currentScenario.options[1]);
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
        });
        break;
    case "Go and lie down again":
        buttonOne.addEventListener("click", function() {
            currentScenario = opening
            text.innerHTML = ""
            buttonOne.style.visibility = "hidden";
            buttonTwo.style.visibility = "hidden";
            letterByLetter("text", currentScenario.text, 30);
            changeButtons(currentScenario.options[0], currentScenario.options[1]);
        })
        buttonTwo.addEventListener("click", function() {
            currentScenario = towardsLight
            text.innerHTML = ""
            buttonOne.style.visibility = "hidden";
            buttonTwo.style.visibility = "hidden";
            letterByLetter("text", currentScenario.text, 30);
            changeButtons(currentScenario.options[0], currentScenario.options[1]);
            if(document.getElementById("audio").paused) {
                updateSource(currentScenario.audio);
                }
                else{
                    updateSource(currentScenario.audio);
                    document.getElementById("audio").play();
                }
        })
        break;        
}
*/
/*
if(currentScenario == opening) {
    buttonOne.addEventListener("click", function() {
        currentScenario = askBody
        text.innerHTML = ""
        buttonOne.style.visibility = "hidden";
        buttonTwo.style.visibility = "hidden";
        letterByLetter("text", currentScenario.text, 30);
        changeButtons(currentScenario.options[0], currentScenario.options[1]);
    })
    buttonTwo.addEventListener("click", function() {
        currentScenario = towardsLight
        text.innerHTML = ""
        buttonOne.style.visibility = "hidden";
        buttonTwo.style.visibility = "hidden";
        letterByLetter("text", currentScenario.text, 30);
        changeButtons(currentScenario.options[0], currentScenario.options[1]);
        if(document.getElementById("audio").paused) {
            updateSource(currentScenario.audio);
            }
            else{
                updateSource(currentScenario.audio);
                document.getElementById("audio").play();
            }
    })
}

else if(currentScenario == askBody) {
    buttonOne.addEventListener("click", function() {
        currentScenario = opening
        text.innerHTML = ""
        buttonOne.style.visibility = "hidden";
        buttonTwo.style.visibility = "hidden";
        letterByLetter("text", currentScenario.text, 30);
        changeButtons(currentScenario.options[0], currentScenario.options[1]);
    })
    buttonTwo.addEventListener("click", function() {
        currentScenario = towardsLight
        text.innerHTML = ""
        buttonOne.style.visibility = "hidden";
        buttonTwo.style.visibility = "hidden";
        letterByLetter("text", currentScenario.text, 30);
        changeButtons(currentScenario.options[0], currentScenario.options[1]);
        if(document.getElementById("audio").paused) {
            updateSource(currentScenario.audio);
            }
            else{
                updateSource(currentScenario.audio);
                document.getElementById("audio").play();
            }
    })
}
*/