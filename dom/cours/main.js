// SELECTEURS
// const title = document.querySelector("h4");
// document.querySelector("h4").style.background = "red";

// console.log(title);

// title.style.background = "green";

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
  //   document.querySelector("p").style.visibility = "visible";
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});
//priorité #id > class > baliseHtml
//-------mouse move-------------------------------------------------------
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//--------------------------------------------------------------------
//KEYPRESS EVENT

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (touch) => {
  const audio = new Audio();
  audio.src = `./${touch}.mp3`;
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = "LA TOUCHE TAPEE EST: " + e.key;

  switch (e.key) {
    case "h":
    case "H":
      keypressContainer.style.background = "green";
      break;
    case "A":
    case "a":
      keypressContainer.style.background = "red";
      break;
    default:
      console.log("CETTE TOUCHE N EST DEFINIE....");
  }
  e.key == "h" ? ring(e.key) : "";
});

//SCROLL EVENT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------FORMULAIRE-------------------------

const inputName = document.querySelector('input[name="nom"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let langage = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  langage = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    //Affiche le contenu des variables
    document.querySelector("form > div").innerHTML=`
    <h3>PSEUDO: ${pseudo}</h3>
    <h4>LANGAGE PREFEREE: ${langage}</h4>
    `;
  } else {
    alert("VEUILLEZ ACCEPTER LES CGV");
  }
});

//LOAD EVENT

window.addEventListener("load",()=>{
  console.log("DOCUMENT CHARGE ......");
});


const boxes = document.querySelectorAll('.box');

boxes.forEach((box)=>{
  box.addEventListener('click',(e)=>{
      e.target.style.transform="scale(0.7)";
  });
})

// addeventListener VS onClick

document.body.onclick = ()=> console.log("CLICK !");

window.addEventListener('load',()=>{
    document.querySelector('.loader').classList.add('loader');
});