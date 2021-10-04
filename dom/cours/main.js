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
    document.querySelector("form > div").innerHTML = `
    <h3>PSEUDO: ${pseudo}</h3>
    <h4>LANGAGE PREFEREE: ${langage}</h4>
    `;
  } else {
    alert("VEUILLEZ ACCEPTER LES CGV");
  }
});

//LOAD EVENT

window.addEventListener("load", () => {
  console.log("DOCUMENT CHARGE ......");
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.style.transform = "scale(0.7)";
  });
});

// addeventListener VS onClick
// window.addEventListener("load", () => {
//   document.querySelector(".loader").classList.add("loader");
// });

//Bubbling => par défaut l'eventListener est paramétré en mode Bubbling
document.body.addEventListener("click", () => {
  console.log("CLICK 1");
});
//USE CAPTURE
document.body.addEventListener("click", () => {
  console.log("CLICK 2");
},true);

//STOP PROPAGATION

questionContainer.addEventListener('click',(e)=>{
  alert("TEST");
  e.stopPropagation();
});

//removeEventListener

//BOM
// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open('http://www.google.com',"cours js","width=600,width=800");
// window.close();


//WINDOW EVENT
// window.alert('OK');

btn2.addEventListener('click',()=>{
  confirm('VOULEZ VOUS VRAIMENT VOUS TROMPER ?')
});

btn1.addEventListener('click',()=>{
  let answer = prompt("ENTRER VOTRE NOM !");
  questionContainer.innerHTML += "<h3>BRAVO "+answer+"</h3>";
});

setTimeout(()=>{
 questionContainer.style.borderRadius="320px";
},3000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'>
//         <h2>BOX</h2>
//       </div>
//     `;
// }, 1000);

// document.body.addEventListener('click',(e)=>{
//   e.target.remove();//retirer un élément du DOM
//   clearInterval(interval);
// });

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.search);
// location.replace("https://lequipe.fr");

// window.onload = ()=>{
//   location.href = "http://twitter.fr"
// }

//Navigator
// console.log(navigator.userAgent);
//geolocalisation
// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);
//revenir en arriere
// window.history.back();
// //revenir plusieurs pages en arrière

// history.go(-5);

window.addEventListener('mousemove',(e)=>{
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y",e.layerY + "px");
});