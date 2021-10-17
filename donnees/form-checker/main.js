const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let pseudo, email, password, confirmPassword;
const progressBar = document.getElementById("progress-bar");
const form =  document.querySelector("form");
const errorDisplay = (tag,message,valid)=>{
    const container = document.querySelector("."+tag+"-container");
    const span = document.querySelector('.'+tag+'-container > span');
    if(!valid){
        container.classList.add('error');
        span.textContent = message;
    }else{
        container.classList.remove('error');
        span.textContent="";
    }
}
const pseudoChecked = (value)=>{

    if(value.length>0 && (value.length < 3 || value.length >20)){
        errorDisplay("pseudo","Le pseudo doit faire entre 3 et 20 caractères");
        pseudo  = null;
    }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay("pseudo","Le pseudo ne doit de caractères spéciaux");
        pseudo = null;
    }else{
        errorDisplay("pseudo","",true);
        pseudo = value;
    }
}
const emailChecker = (value)=>{
    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay("email","Adresse Email invalide")
        email=null;
    }else{
        errorDisplay("email","", true);
        email = value;
    }
}
const passwordChecker = (value)=>{
    progressBar.classList="";
    if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
        errorDisplay("password","minimum de 8 caractères, une majuscule, un chiffre et caractère spécial");
        progressBar.classList.add("progressRed");
        password=null;
    }else if(value.length < 12){
        progressBar.classList.add("progressBlue");
        errorDisplay("password","",true);
        password=value;
    }else{
        progressBar.classList.add("progressGreen");
        errorDisplay("password","",true);
        password = value;
    }
    if(confirmPassword) confirmChecker(confirmPassword);
}
const confirmChecker = (value)=>{
    if(value!==password){
        errorDisplay("confirm","Les mots de passe ne correspondent pas"); 
        confirmPassword = false;
    }else{
        errorDisplay("confirm","",true);
        confirmPassword=true;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        // console.log(e.target.id);
        switch (e.target.id) {
            case "pseudo":
                pseudoChecked(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            default:
                null;
        }
    });
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(pseudo && password && email && confirmPassword){
        const data = {
            pseudo,
            password,
            email,
        };
        console.log(data);
        inputs.forEach((input)=>{
            input.value="";
        });
        progressBar.classList ="";
        alert("INSCRIPTION VALIDÉE !");
        pseudo = null;
        email=null;
        password=null;
        confirmPassword=null;
    }else{
        alert('VEUILLEZ REMPLIR CORRECTEMENT LES CHAMPS');
    }
})