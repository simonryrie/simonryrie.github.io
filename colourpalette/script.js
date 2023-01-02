const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

let oneBlackIcons = true
let oneUnlocked = true

let twoBlackIcons = true
let twoUnlocked = true

let threeBlackIcons = true
let threeUnlocked = true

let fourBlackIcons = true
let fourUnlocked = true

let fiveBlackIcons = true
let fiveUnlocked = true

let sixBlackIcons = true
let sixUnlocked = true

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

    function checkBlackorWhiteIconsOne() {
        (r + g + b) >= 350 ? oneBlackIcons = true : oneBlackIcons = false;
    }

    function checkBlackorWhiteIconsTwo() {
        (r + g + b) >= 350 ? twoBlackIcons = true : twoBlackIcons = false;
    }

    function checkBlackorWhiteIconsThree() {
        (r + g + b) >= 350 ? threeBlackIcons = true : threeBlackIcons = false;
    }

    function checkBlackorWhiteIconsFour() {
        (r + g + b) >= 350 ? fourBlackIcons = true : fourBlackIcons = false;
    }

    function checkBlackorWhiteIconsFive() {
        (r + g + b) >= 350 ? fiveBlackIcons = true : fiveBlackIcons = false;
    }

    function checkBlackorWhiteIconsSix() {
        (r + g + b) >= 350 ? sixBlackIcons = true : sixBlackIcons = false;
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
    
    //one
    if(oneUnlocked === true) {
        similarOrComplementary()
        one.style.backgroundColor = newColour
        document.getElementById("one-hex").innerHTML = rgbToHex(r, g, b).toUpperCase()
        checkBlackorWhite("one")
        checkBlackorWhiteIconsOne()
        if(oneUnlocked === true && oneBlackIcons === true) {
            document.getElementById("one-lock-icon").src = "unlockedblack.png"
        }
        else if(oneUnlocked === false && oneBlackIcons === true) {
            document.getElementById("one-lock-icon").src = "lockedblack.png"
        }
        else if(oneUnlocked === true && oneBlackIcons === false) {
            document.getElementById("one-lock-icon").src = "unlockedwhite.png"
        }
        else {
            document.getElementById("one-lock-icon").src = "lockedwhite.png"
        }
    }

    //two
    if(twoUnlocked === true) {
        similarOrComplementary()
        two.style.backgroundColor = newColour
        document.getElementById("two-hex").innerHTML = rgbToHex(r, g, b).toUpperCase()
        checkBlackorWhite("two")
        checkBlackorWhiteIconsTwo()
        if(twoUnlocked === true && twoBlackIcons === true) {
            document.getElementById("two-lock-icon").src = "unlockedblack.png"
        }
        else if(twoUnlocked === false && twoBlackIcons === true) {
            document.getElementById("two-lock-icon").src = "lockedblack.png"
        }
        else if(twoUnlocked === true && twoBlackIcons === false) {
            document.getElementById("two-lock-icon").src = "unlockedwhite.png"
        }
        else {
            document.getElementById("two-lock-icon").src = "lockedwhite.png"
        }
    }
    
    //three
    if(threeUnlocked === true) {
        similarOrComplementary()
        three.style.backgroundColor = newColour
        document.getElementById("three-hex").innerHTML = rgbToHex(r, g, b).toUpperCase()
        checkBlackorWhite("three")
        checkBlackorWhiteIconsThree()
        if(threeUnlocked === true && threeBlackIcons === true) {
            document.getElementById("three-lock-icon").src = "unlockedblack.png"
        }
        else if(threeUnlocked === false && threeBlackIcons === true) {
            document.getElementById("three-lock-icon").src = "lockedblack.png"
        }
        else if(threeUnlocked === true && threeBlackIcons === false) {
            document.getElementById("three-lock-icon").src = "unlockedwhite.png"
        }
        else {
            document.getElementById("three-lock-icon").src = "lockedwhite.png"
        }
    }
    
    //four
    if(fourUnlocked === true) {
        similarOrComplementary()
        four.style.backgroundColor = newColour
        document.getElementById("four-hex").innerHTML = rgbToHex(r, g, b).toUpperCase()
        checkBlackorWhite("four")
        checkBlackorWhiteIconsFour()
        if(fourUnlocked === true && fourBlackIcons === true) {
            document.getElementById("four-lock-icon").src = "unlockedblack.png"
        }
        else if(fourUnlocked === false && fourBlackIcons === true) {
            document.getElementById("four-lock-icon").src = "lockedblack.png"
        }
        else if(fourUnlocked === true && fourBlackIcons === false) {
            document.getElementById("four-lock-icon").src = "unlockedwhite.png"
        }
        else {
            document.getElementById("four-lock-icon").src = "lockedwhite.png"
        }
    }
    
    //five
    if(fiveUnlocked === true) {
        similarOrComplementary()
        five.style.backgroundColor = newColour
        document.getElementById("five-hex").innerHTML = rgbToHex(r, g, b).toUpperCase()
        checkBlackorWhite("five")
        checkBlackorWhiteIconsFive()
        if(fiveUnlocked === true && fiveBlackIcons === true) {
            document.getElementById("five-lock-icon").src = "unlockedblack.png"
        }
        else if(fiveUnlocked === false && fiveBlackIcons === true) {
            document.getElementById("five-lock-icon").src = "lockedblack.png"
        }
        else if(fiveUnlocked === true && fiveBlackIcons === false) {
            document.getElementById("five-lock-icon").src = "unlockedwhite.png"
        }
        else {
            document.getElementById("five-lock-icon").src = "lockedwhite.png"
        }
    }

    //six
    if(sixUnlocked === true) {
        similarOrComplementary()
        six.style.backgroundColor = newColour
        document.getElementById("six-hex").innerHTML = rgbToHex(r, g, b).toUpperCase()
        checkBlackorWhite("six")
        checkBlackorWhiteIconsSix()
        if(sixUnlocked === true && sixBlackIcons === true) {
            document.getElementById("six-lock-icon").src = "unlockedblack.png"
        }
        else if(sixUnlocked === false && sixBlackIcons === true) {
            document.getElementById("six-lock-icon").src = "lockedblack.png"
        }
        else if(sixUnlocked === true && sixBlackIcons === false) {
            document.getElementById("six-lock-icon").src = "unlockedwhite.png"
        }
        else {
            document.getElementById("six-lock-icon").src = "lockedwhite.png"
        }
    }

}

function lockToggleOne() {

    if(oneUnlocked === true && oneBlackIcons === true) {
        document.getElementById("one-lock-icon").src = "lockedblack.png"
        oneUnlocked = false
    }
    else if(oneUnlocked === false && oneBlackIcons === true) {
        document.getElementById("one-lock-icon").src = "unlockedblack.png"
        oneUnlocked = true
    }
    else if(oneUnlocked === true && oneBlackIcons === false) {
        document.getElementById("one-lock-icon").src = "lockedwhite.png"
        oneUnlocked = false
    }
    else {
        document.getElementById("one-lock-icon").src = "unlockedwhite.png"
        oneUnlocked = true
    }
    return oneUnlocked
}

document.getElementById("one-lock-icon").addEventListener("click", lockToggleOne)

function lockToggleTwo() {

    if(twoUnlocked === true && twoBlackIcons === true) {
        document.getElementById("two-lock-icon").src = "lockedblack.png"
        twoUnlocked = false
    }
    else if(twoUnlocked === false && twoBlackIcons === true) {
        document.getElementById("two-lock-icon").src = "unlockedblack.png"
        twoUnlocked = true
    }
    else if(twoUnlocked === true && twoBlackIcons === false) {
        document.getElementById("two-lock-icon").src = "lockedwhite.png"
        twoUnlocked = false
    }
    else {
        document.getElementById("two-lock-icon").src = "unlockedwhite.png"
        twoUnlocked = true
    }
    return twoUnlocked
}

document.getElementById("two-lock-icon").addEventListener("click", lockToggleTwo)

function lockToggleThree() {

    if(threeUnlocked === true && threeBlackIcons === true) {
        document.getElementById("three-lock-icon").src = "lockedblack.png"
        threeUnlocked = false
    }
    else if(threeUnlocked === false && threeBlackIcons === true) {
        document.getElementById("three-lock-icon").src = "unlockedblack.png"
        threeUnlocked = true
    }
    else if(threeUnlocked === true && threeBlackIcons === false) {
        document.getElementById("three-lock-icon").src = "lockedwhite.png"
        threeUnlocked = false
    }
    else {
        document.getElementById("three-lock-icon").src = "unlockedwhite.png"
        threeUnlocked = true
    }
    return threeUnlocked
}

document.getElementById("three-lock-icon").addEventListener("click", lockToggleThree)

function lockToggleFour() {

    if(fourUnlocked === true && fourBlackIcons === true) {
        document.getElementById("four-lock-icon").src = "lockedblack.png"
        fourUnlocked = false
    }
    else if(fourUnlocked === false && fourBlackIcons === true) {
        document.getElementById("four-lock-icon").src = "unlockedblack.png"
        fourUnlocked = true
    }
    else if(fourUnlocked === true && fourBlackIcons === false) {
        document.getElementById("four-lock-icon").src = "lockedwhite.png"
        fourUnlocked = false
    }
    else {
        document.getElementById("four-lock-icon").src = "unlockedwhite.png"
        fourUnlocked = true
    }
    return fourUnlocked
}

document.getElementById("four-lock-icon").addEventListener("click", lockToggleFour)

function lockToggleFive() {

    if(fiveUnlocked === true && fiveBlackIcons === true) {
        document.getElementById("five-lock-icon").src = "lockedblack.png"
        fiveUnlocked = false
    }
    else if(fiveUnlocked === false && fiveBlackIcons === true) {
        document.getElementById("five-lock-icon").src = "unlockedblack.png"
        fiveUnlocked = true
    }
    else if(fiveUnlocked === true && fiveBlackIcons === false) {
        document.getElementById("five-lock-icon").src = "lockedwhite.png"
        fiveUnlocked = false
    }
    else {
        document.getElementById("five-lock-icon").src = "unlockedwhite.png"
        fiveUnlocked = true
    }
    return fiveUnlocked
}

document.getElementById("five-lock-icon").addEventListener("click", lockToggleFive)

function lockToggleSix() {

    if(sixUnlocked === true && sixBlackIcons === true) {
        document.getElementById("six-lock-icon").src = "lockedblack.png"
        sixUnlocked = false
    }
    else if(sixUnlocked === false && sixBlackIcons === true) {
        document.getElementById("six-lock-icon").src = "unlockedblack.png"
        sixUnlocked = true
    }
    else if(sixUnlocked === true && sixBlackIcons === false) {
        document.getElementById("six-lock-icon").src = "lockedwhite.png"
        sixUnlocked = false
    }
    else {
        document.getElementById("six-lock-icon").src = "unlockedwhite.png"
        sixUnlocked = true
    }
    return sixUnlocked
}

document.getElementById("six-lock-icon").addEventListener("click", lockToggleSix)