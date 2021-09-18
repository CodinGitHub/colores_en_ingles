// Inicializacion de variables
let puntaje = 0;
let cuatroColores = [];
let colors = ['White', 'Red', 'Blue', 'Yellow', 'Brown', 'Grey', 'Green', 'Pink', 'Purple'];
let phrases = ['Good Job', 'Great!', 'Perfect!', 'Magnific!', 'Master!'];

let mostrarPuntaje = document.getElementById('puntaje');
let mostrarFrase = document.getElementById('phrase');

//audios
let whiteAudio = new Audio('audio/White.mp3');
let redAudio = new Audio('audio/Red.mp3');
let blueAudio = new Audio('audio/Blue.mp3');
let yellowAudio = new Audio('audio/Yellow.mp3');
let brownAudio = new Audio('audio/Brown.mp3');
let greyAudio = new Audio('audio/Grey.mp3');
let greenAudio = new Audio('audio/Green.mp3');
let pinkAudio = new Audio('audio/Pink.mp3');
let purplenAudio = new Audio('audio/Purple.mp3');

let audios = {
  'White': whiteAudio, 
  'Red': redAudio, 
  'Blue': blueAudio, 
  'Yellow': yellowAudio, 
  'Brown': brownAudio, 
  'Grey': greyAudio, 
  'Green': greenAudio, 
  'Pink': pinkAudio, 
  'Purple': purplenAudio
}

let boton1, boton2, boton3, boton4, boton5, boton6, boton7, boton8, boton9;

let botones = [boton1, boton2, boton3, boton4, boton5, boton6, boton7, boton8, boton9];

for(let i = 0; i<botones.length; i++){
  botones[i] = document.getElementById(i);  
  botones[i].addEventListener('click', ()=>{
    comparar(botones[i])
  },false);
}

let numberToGuess = document.getElementById('numberToGuess');

//Funciones
function randomizar(matriz){
  matriz = matriz.sort(()=>{return Math.random() - 0.3;});
}

function comparar(prueba){
  if (prueba.innerHTML === numberToGuess.innerHTML){
    console.log('acertaste!')
    puntaje++;
    mostrarPuntaje.innerHTML = puntaje;
    mostrarFrase.innerHTML = phrases[0];
  }else{
    console.log('intenta de nuevo!')
  }
  mainFunction();
}


//Funcion Principal

function mainFunction(){

  // Number to Guess
  numberToGuess.innerHTML = colors[0];

  // Reproducir el audio del color
  console.log(audios[colors[0]].play());

  randomizar(colors);

  // Construyo matriz de cuatro colores
  cuatroColores = [];
  for (let i=0; i<=8; i++){
    cuatroColores.push(colors[i]);
  }
  
  randomizar(cuatroColores);

  console.log('Cuatro Colores: ' + cuatroColores)

  // Colors randomized
  for (let i=0; i<=8; i++){
    let actualCard = document.getElementById(i);
    actualCard.style.backgroundColor = cuatroColores[i];
    actualCard.innerHTML = cuatroColores[i];
    actualCard.style.color = cuatroColores[i];
  }
}