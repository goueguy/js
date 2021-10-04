const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);
  //générer un chiffre entre 100 et 300 qui servira de taille aléatoire
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  //générer des valeurs aléatoires pour le haut et la gauche du bubble
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  //générer des valeurs aléatoires pour la gauche
  //valeur minimale et maximale
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  //on adosse un événement à la bulle
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  //après 8 secondes on détruit les bubbles
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);

