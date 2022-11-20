const fontUp = document.getElementById("fontUp")
const fontDown = document.getElementById("fontDown")
const fontSizes = ["medium", "large", "x-large"]
const text = document.getElementById("body")
const portrait = document.getElementById("portrait")
const portraitMargins = ["67px", "70px", "104px"]

fontUp.addEventListener("click", increaseFontSize)
fontDown.addEventListener("click", decreaseFontSize)

let i = 0;
text.style.fontSize = fontSizes[i];
let j = 0;
portrait.style.marginTop = portraitMargins[j];
let k = 200;
portrait.style.width = `${k}px`;
portrait.style.height = `${k}px`
portrait.style.borderRadius = `${k}px`

function increaseFontSize() {
    if(i < 2) {
        i ++;
        text.style.fontSize = fontSizes[i];
        j ++;
        portrait.style.marginTop = portraitMargins[j];
        if(k <= 240) {
            k += 40
            portrait.style.width = `${k}px`
            portrait.style.height = `${k}px`
            portrait.style.borderRadius = `${k}px` 
    }
    }
}

function decreaseFontSize() {
    if(i > 0) {
        i --;
        text.style.fontSize = fontSizes[i];
        j --;
        portrait.style.marginTop = portraitMargins[j];
        if(k >= 200) {
        k -= 40
        portrait.style.width = `${k}px`
        portrait.style.height = `${k}px`
        portrait.style.borderRadius = `${k}px`
    }
    }
}