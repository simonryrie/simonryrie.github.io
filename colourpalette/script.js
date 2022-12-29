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

    function generateRandomColour() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        newColour = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        return newColour
    }

    generateRandomColour()
    console.log(newColour)
    one.style.backgroundColor = newColour
    generateRandomColour()
    two.style.backgroundColor = newColour
    generateRandomColour()
    three.style.backgroundColor = newColour
    generateRandomColour()
    four.style.backgroundColor = newColour
    generateRandomColour()
    five.style.backgroundColor = newColour
    generateRandomColour()
    six.style.backgroundColor = newColour

}