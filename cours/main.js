let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable;

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[2][3]);
let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Test" }];

let objet = {
  pseudo: "Denis",
  aage: 33,
  technos: ["JAVASCRIPT", "REACT", "NODE JS"],
  admin: false,
};

objet.adresse = "22 rue du code";
objet.email = "jlagoueguy@gmail.com";

let data = [
  {
    pseudo: "Ryan",
    age: 33,
    technos: ["JAVASCRIPT", "REACT", "NEXT JS"],
    admin: false,
  },
  {
    pseudo: "Mark",
    age: 10,
    technos: ["JAVA", "PYTHON", "NODE JS"],
    admin: false,
  },
  {
    pseudo: "Denis",
    age: 50,
    technos: ["JAVASCRIPT", "ANGULAR", "NODE JS"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

//LES STRUCTURES DE CONTROLES

// if(data[0].age > data[1].age){
//     //console.log(data[0].pseudo + " est plus agé que " +data[1].pseudo);
// }else{

// }

let d = 0;

do {
  d++;
  //console.log(console.log(d));
} while (d < 5);

// for(const user of data){
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li> ans`;
// }

// for(i=0; i<data.length; i++){
//     if(i==2){
//         continue;
//     }
//     document.body.innerHTML += "<h2>"+data[i].pseudo+" - "+data[i].technos+"</h2>";
// }
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "php":
      document.body.style.background = "gray";
      break;
    case "javascript":
      document.body.style.background = "green";
      break;
    case "python":
      document.body.style.background = "orange";
      break;
    default:
      console.log("NO CONTENT");
      break;
  }
});
//----------------------------
// METHODES STRING
//--------------------------

let string2 = "Javascript, est un langage orienté, objet";

//console.log(string2.length);
//console.log(string2.indexOf("l"));//retourne -1 s'il ne le connait pas

// let newString = string2.slice(5,8);//découpe un tableau
// console.log(newString);

// console.log(string2.split(" ")); // comme explode en PHP

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript","PHP"));

//----------------------------
// METHODES NUMBERS
//--------------------------

// let number2 = 42.1234;
// console.log(number2.toFixed(2));
// console.log(parseInt("43 EST UN CHIFFRE"));
// console.log(parseFloat("43.12 EST UN CHIFFRE"));

// console.log(Math.PI);//pi
// console.log(Math.floor(4.9));//arrondir
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2,7));//exponentiel
// console.log(Math.sqrt(4));
// console.log(Math.floor(Math.random() * 50));

//----------------------------
// METHODES ARRAYS
//--------------------------

let array3 = ["Javascript", "Php", "Python"];

let array4 = ["RUBY", "JAVA"];

let newArray = array3.concat(array4);
// console.log(newArray);

// let newString = [...array3,...array4];
// console.log(newString);
// console.log(array4.join("-"));
// console.log(newArray.slice(2,5));
// console.log(array3.indexOf("PYTHON"));

// newArray.forEach((language)=>console.log(language));
// console.log(array3.every((language)=>language=="P"));
// console.log(array3.some((language)=>language=="P"));

// let shift = array3.pop();
// console.log(shift);

// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x,y)=>x + y));

arrayNumber.push(45);
// console.log(arrayNumber);
//FILTER , SORT, MAP
//---------FILTER LES DONNEES D UN TABLEAU------
// console.log(arrayNumber.filter((number)=>{
//   return number>10;
// }));
//---------TRIER LES DONNEES D UN TABLEAU SELON UN ORDRE------
// console.log(arrayNumber.sort((a,b)=>{
//   return b - a;
// }));

// console.log(arrayNumber.filter((number)=>{
//   return number>10;
// }));

// console.log(arrayNumber.filter((number)=>{
//   return number>10;
// }).sort((a,b)=>{
//   return a - b
// }));

// document.body.innerHTML = arrayNumber
//   .map(
//     (number) => `
// <li>${number}</li>
// `
//   )
//   .join(" ");

//------METHODES OBJETS-----
//----------------------


document.body.innerHTML = data
// .filter((user)=>user.admin===false)
// .filter((user)=>user.pseudo.includes("Ryan"))
.sort((a,b)=>b.age-a.age)
.map((user)=>

`<div class="card">
    <h2>PSEUDO: ${user.pseudo}</h2>
    <p>AGE:${user.age} ans</p>
    <p>ADMIN:${user.admin ? "Modérateur":"Membre"}</p>
    <p>TECHNOS: ${user.technos}</p>
</div>
`
).join("");