const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

changeMultipleColours()


let changeButton = document.getElementById("colour-change");
changeButton.addEventListener("click", changeMultipleColours);

function changeMultipleColours(){

    let newColour = ''
    let r = 0
    let g = 0
    let b = 0

    function generateRandomColour() {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        newColour = 'rgb(' + r + ', ' + g + ', ' + b + ')';     
        return newColour, r, g, b
    }

    function generateSimilarColour() {
        let rAddend = Math.floor(Math.random() * 200) - 100
        let gAddend = Math.floor(Math.random() * 200) - 100
        let bAddend = Math.floor(Math.random() * 200) - 100
        r += rAddend
        g += gAddend
        b += bAddend
        if(r < 0) {r = 0}
        if(r > 255) {r = 255}
        if(g < 0) {g = 0}
        if(g > 255) {g = 255}
        if(b < 0) {b = 0}
        if(b > 255) {b = 255}
        newColour = 'rgb(' + r + ', ' + g + ', ' + b + ')';     
        return newColour
    }

    function generateComplementaryColour() {
        let oldR = r
        let oldG = g
        let oldB = b
        r = oldG
        g = oldB
        b = oldR
        newColour = 'rgb(' + r + ', ' + g + ', ' + b + ')';     
        return newColour
    }

    function checkBlackorWhite(e) {
    (r + g + b) >= 350 ? document.getElementById(e).style.color = "black" : document.getElementById(e).style.color = "white"
    }

    generateRandomColour()
    one.style.backgroundColor = newColour
    document.getElementById("one").innerHTML = newColour
    checkBlackorWhite("one")

    generateSimilarColour()
    two.style.backgroundColor = newColour
    document.getElementById("two").innerHTML = newColour
    checkBlackorWhite("two")
    
    generateComplementaryColour()
    three.style.backgroundColor = newColour
    document.getElementById("three").innerHTML = newColour
    checkBlackorWhite("three")
    
    generateSimilarColour()
    four.style.backgroundColor = newColour
    document.getElementById("four").innerHTML = newColour
    checkBlackorWhite("four")
    
    generateComplementaryColour()
    five.style.backgroundColor = newColour
    document.getElementById("five").innerHTML = newColour
    checkBlackorWhite("five")
    
    generateSimilarColour()
    six.style.backgroundColor = newColour
    document.getElementById("six").innerHTML = newColour
    checkBlackorWhite("six")
}