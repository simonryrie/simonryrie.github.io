//scenarios

const opening = {
    text: "You awaken to find yourself lying on some kind of soft furnishing in a small room. The space is dark except for a dim glow coming from a pile of multi-coloured orbs in its centre. Twinkling ambient music drifts through the air from an unknown source. Although you cannot be certain, you think you sense the presence of other bodies lying around you. On the far side of the room, vertical stripes of white light stream through a doorway but are quickly overwhelmed by the gloom.",
    options: ["Approach one of the bodies and ask where you are", "Walk towards the light"],
    audio: "ambient.mp3"
}

const askBody = {
    text: "You approach a body and ask where you are. The body seems to sense your presence, but in response you hear only groans. There is nothing intelligible to be found here.",
    options: ["Go and lie down again", "Walk towards the light"],
    audio: "ambient.mp3"
}

const towardsLight = {
    text: "You stumble towards the light, feeling unsteady but oddly powerful. As you approach its source, you find it is a doorway covered by colourful dangling beads. You pass through this plastic veil to find yourself in an industrial-looking corridor. Blinking under its harsh lights, you can see a door with a unisex toilet sign to your right. To the left, there are heavy double doors through which you can hear the muffled thump of heavy bass. The metal light fittings vibrate sympathetically.",
    options: ["Go into the toilet", "Go through the double doors"],
    audio: "corridor.mp3"
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

function changeButtons(optionOne, optionTwo) {
document.getElementById("optionOne").innerHTML = optionOne;
document.getElementById("optionTwo").innerHTML = optionTwo;
}

//initialise

let currentScenario = opening;

document.getElementById("optionOne").style.visibility = "hidden";
document.getElementById("optionTwo").style.visibility = "hidden";

letterByLetter("text", opening.text, 30)

changeButtons(opening.options[0], opening.options[1])

// interactivity scenarios tree

let buttonOne = document.getElementById("optionOne");
let buttonTwo = document.getElementById("optionTwo");

if(currentScenario === opening) {
    console.log("one")
    buttonOne.addEventListener("click", function() {
        currentScenario = askBody
        text.innerHTML = ""
        document.getElementById("optionOne").style.visibility = "hidden";
        document.getElementById("optionTwo").style.visibility = "hidden";
        letterByLetter("text", currentScenario.text, 30);
        changeButtons(currentScenario.options[0], currentScenario.options[1]);
        console.log(currentScenario)
        return currentScenario = askBody
    })
    buttonTwo.addEventListener("click", function() {
        currentScenario = towardsLight
        text.innerHTML = ""
        document.getElementById("optionOne").style.visibility = "hidden";
        document.getElementById("optionTwo").style.visibility = "hidden";
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

console.log(currentScenario)

if(currentScenario === askBody) {
    console.log("yay")
    buttonOne.addEventListener("click", function() {
        currentScenario = opening
        text.innerHTML = ""
        document.getElementById("optionOne").style.visibility = "hidden";
        document.getElementById("optionTwo").style.visibility = "hidden";
        letterByLetter("text", currentScenario.text, 30);
        changeButtons(currentScenario.options[0], currentScenario.options[1]);
    })
    buttonTwo.addEventListener("click", function() {
        currentScenario = towardsLight
        text.innerHTML = ""
        document.getElementById("optionOne").style.visibility = "hidden";
        document.getElementById("optionTwo").style.visibility = "hidden";
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