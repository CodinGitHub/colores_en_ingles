// Inicializacion de variables
let puntaje = 0;
let cuatroColores = [];
let colors = ['White', 'Red', 'Blue', 'Yellow', 'Brown', 'Grey', 'Green'];
let phrases = ['Good Job', 'Great!', 'Perfect!', 'Magnific!', 'Master!'];

let mostrarPuntaje = document.getElementById('puntaje');
let mostrarFrase = document.getElementById('phrase');

//audios
let WhiteAudio = new Audio('White.mp3');
let RedAudio = new Audio('Red.mp3');
let BlueAudio = new Audio('Blue.mp3');
let YellowAudio = new Audio('Yellow.mp3');
let BrownAudio = new Audio('Brown.mp3');
let GreyAudio = new Audio('Grey.mp3');
let GreenAudio = new Audio('Green.mp3');



let boton1 = document.getElementById('0');
let boton2 = document.getElementById('1');
let boton3 = document.getElementById('2');
let boton4 = document.getElementById('3');

boton1.addEventListener('click', ()=>{
  comparar(boton1)
},false);

boton2.addEventListener('click', ()=>{
  comparar(boton2)
},false);

boton3.addEventListener('click', ()=>{
  comparar(boton3)
},false);

boton4.addEventListener('click', ()=>{
  comparar(boton4)
},false);



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

  

  randomizar(colors);

  // Construyo matriz de cuatro colores
  cuatroColores = [];
  for (let i=0; i<4; i++){
    cuatroColores.push(colors[i]);
  }
  
  randomizar(cuatroColores);

  

  console.log('Cuatro Colores: ' + cuatroColores)

  // Colors randomized
  for (let i=0; i<4; i++){
    let actualCard = document.getElementById(i);
    actualCard.style.backgroundColor = cuatroColores[i];
    actualCard.innerHTML = cuatroColores[i];
    actualCard.style.color = cuatroColores[i];
  }
}