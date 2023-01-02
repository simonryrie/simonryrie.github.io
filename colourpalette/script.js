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

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function similarOrComplementary() {
        let zeroOrOne = Math.floor(Math.random() * 2)
        zeroOrOne == 1 ? generateSimilarColour() : generateComplementaryColour()
    }
      
    generateRandomColour()

    similarOrComplementary()
    one.style.backgroundColor = newColour
    document.getElementById("one").innerHTML = rgbToHex(r, g, b).toUpperCase()
    checkBlackorWhite("one")

    similarOrComplementary()
    two.style.backgroundColor = newColour
    document.getElementById("two").innerHTML = rgbToHex(r, g, b).toUpperCase()
    checkBlackorWhite("two")
    
    similarOrComplementary()
    three.style.backgroundColor = newColour
    document.getElementById("three").innerHTML = rgbToHex(r, g, b).toUpperCase()
    checkBlackorWhite("three")
    
    similarOrComplementary()
    four.style.backgroundColor = newColour
    document.getElementById("four").innerHTML = rgbToHex(r, g, b).toUpperCase()
    checkBlackorWhite("four")
    
    similarOrComplementary()
    five.style.backgroundColor = newColour
    document.getElementById("five").innerHTML = rgbToHex(r, g, b).toUpperCase()
    checkBlackorWhite("five")
    
    similarOrComplementary()
    six.style.backgroundColor = newColour
    document.getElementById("six").innerHTML = rgbToHex(r, g, b).toUpperCase()
    checkBlackorWhite("six")
}