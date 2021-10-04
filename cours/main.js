let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable;

let array = ["Bordeaux","Toulouse","Nantes"];
// console.log(array[2][3]);
let array2 = ["Bordeaux", 24, true, [1,2], {nom:"Test"}];

let objet = {
    pseudo: "Denis",
    aage:33,
    technos:["JAVASCRIPT","REACT","NODE JS"],
    admin:false
}

objet.adresse = "22 rue du code";
objet.email="jlagoueguy@gmail.com";


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

do{
    d++;
    //console.log(console.log(d));
}while(d<5);

// for(const user of data){
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age}</li> ans`;
// }

// for(i=0; i<data.length; i++){
//     if(i==2){
//         continue;
//     }
//     document.body.innerHTML += "<h2>"+data[i].pseudo+" - "+data[i].technos+"</h2>";
// }
document.body.addEventListener('click',(e)=>{
     
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
