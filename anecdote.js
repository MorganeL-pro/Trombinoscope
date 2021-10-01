

// ============================les anecdote de romain ===================================================


const anecdotes = [
    "    1991, la première Webcam servait à surveiller le café. Deux chercheurs se sont chargés de développer le nécessaire afin de pouvoir surveiller le niveau de café à distance.",
    "    Un bon développeur c'est celui qui regarde des deux côtés de la route avant de traverser une route à sens unique",
    "    Le Web n'est pas l'Internet. Quand on parle de l'Internet il s'agit du réseau informatique qui permet de communiquer entre les ordinateurs. Le Web se sert de cette capacité de l'Internet à communiquer des informations pour le faire sous formes de pages et de liens au travers d'un navigateur.",
    "    1989, frontière franco-suisse, Conseil Européen pour la Recherche nucléaire-CERN. L’informaticien britannique Tim Berners-Lee discute avec son supérieur d’une propositions «vague mais excitante». Le web est né !",
    "    1993, Une imprimante aux origines de Linux. Richard Stallman travail au MIT. Une imprimante qui ne fonctionne pas très bien et il décide de corriger le driver. Petit problème pour Stallman, le code source du driver n'est pas fourni. Pour lui c'est la goutte d'eau. il lance le projet GNU (acronyme de GNU is Not Unix).",
    "    2005, les relations entre la communauté développant le noyau Linux et la société en charge du développement de BitKeeper furent rompues, et le statut de gratuité de l’outil fut révoqué. La communauté du développement de Linux (et plus particulièrement Linus Torvalds) a développer son propre outil en se basant sur l’utilisation de BitKeeper.",

  ];

//nombre aleatoire
function entierAleatoire(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// insert une valeur du tab anecdote sur la page html 
function textAnecdote() {
    let entier = entierAleatoire(0, 5);
    document.querySelector(".anecdote").innerHTML = anecdotes[entier];
  }



let boxAnecdote = document.querySelector(".anecdote");
let bouttonAnecdote = document.querySelector("#buttonAnecdote");

bouttonAnecdote.addEventListener("click", textAnecdote);
dev
