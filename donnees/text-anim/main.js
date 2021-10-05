const target = document.getElementById("target");
let array = ["Développeur", "Photographe", "Créatif"];
let wordIndex = 0;
let letterIndex = 0;
const createLetter = ()=>{
    const letter = document.createElement('span');
    target.appendChild(letter);
    target.textContent = array[wordIndex][letterIndex];
}

// createLetter();
// setTimeout(()=>{
//     letterIndex++;
//      createLetter();
// }, 200);

const loop = ()=>{
    setTimeout(()=>{
        if(letterIndex < array[wordIndex].length){
            createLetter();
            letterIndex++;
            loop();
        }else{
            wordIndex++;
            letterIndex = 0;
            loop();
        }
    },60);
}
loop();

//[Cours Javascript] Apprendre Javascript de A à Z – Les données (3/6) 1 h 02