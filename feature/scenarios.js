const opening = {
    text: "You awaken to find yourself lying on some kind of soft furnishing in a small room. The space is dark except for a dim glow coming from a pile of multi-coloured orbs in its centre. Twinkling ambient music drifts through the air from an unknown source. Although you cannot be certain, you think you sense the presence of other bodies lying around you. On the far side of room, vertical streams of white light enter through a doorway but are quickly overwhelmed by the gloom.",
    options: ["Approach one of the bodies and ask where you are", "Walk towards the light"]
    //audio: 
    //backdrop: moodlighting()
}

const askBody = {
    text: "You approach a body and ask where you are. The body seems to sense your presence, but in response you hear only groans. There is nothing intelligible to be found here.",
    options: ["Go and lie down again", "Walk towards the light"]
    //audio: 
    //backdrop: moodlighting()
}

let currentScenario = opening;
let currentText = currentScenario.text;
let currentOptionOne = currentScenario.options[0];
let currentOptionTwo = currentScenario.options[1];

function letterByLetter(destination, message, speed) {
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

letterByLetter("text", currentText, 30)

document.getElementById("optionOne").innerHTML = currentOptionOne;
document.getElementById("optionTwo").innerHTML = currentOptionTwo;
let buttonOne = document.getElementById("optionOne");
let buttonTwo = document.getElementById("optionTwo");


