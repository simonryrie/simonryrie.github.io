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
    text: "Back into the corridor. From this angle, you can see a piece of paper blu-tacked above the beaded doorway to the room you started in. Printed on it are 3 words: 'Chill Out Room'. From the far end of the corridor, you feel a deep rumble, more in your chest than your ears - the irresistible call of the bass. You feel at once very tired and possibly more awake than you have ever felt in your life.",
    options: ["Chill out", "Head towards the bass"],
    audio: "corridor.mp3"
}

const mainRoom = {
    text: "It takes all your strength to push open the heavy doors. As you pass the threshold, your senses are assaulted by a powerful flashing light and the sound of pounding, repetitive beats. In the strobing light, you catch monochrome snapshots of writhing bodies engaged in some kind of dance. The air is hot, but you feel a desire to join the sweating mass. In the far corner of the room, a red 'Exit' light glows dimly above a doorway.",
    options: ["Go to the dancefloor", "Go to the exit"],
    audio: "mainroom.mp3"
}


//letter by letter function

function letterByLetter(destination, message, speed) {
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            document.getElementById("optionOne").style.visibility = "visible";
            document.getElementById("optionTwo").style.visibility = "visible";
            clearInterval(interval);
        }
    }, speed);
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


//change buttons inner HTML function

let buttonOne = document.getElementById("optionOne");
let buttonTwo = document.getElementById("optionTwo");

function changeButtons(optionOne, optionTwo) {
buttonOne.innerHTML = optionOne;
buttonTwo.innerHTML = optionTwo;
}

//initialise

let currentScenario = opening;

document.getElementById("optionOne").style.visibility = "hidden";
document.getElementById("optionTwo").style.visibility = "hidden";

letterByLetter("text", opening.text, 30)

changeButtons(opening.options[0], opening.options[1])

// interactivity scenarios tree

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