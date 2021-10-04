const target = document.getElementById("target");
let array = ["Développeur", "Photographe", "Créatig"];
let wordIndex = 0;
let letterIndex = 0;
const createLetter = ()=>{
    const letter = document.createElement('span');
    target.appendChild(letter);
    target.textContent = array[wordIndex][letterIndex];
}

createLetter();
setInterval(()=>{
    
     createLetter();
}, 200);
