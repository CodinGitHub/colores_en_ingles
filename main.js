let colors = [
  'White',
  'Red',
  'Blue',
  'Yellow',
  'Brown',
  'Grey'
]

let phrases = [
  'Good Job',
  'Great!',
  'Perfect!',
  'Magnific!',
  'Master!'
]

colors = colors.sort(()=>{
  return Math.random() - 0.5;
});

numberToGuess = document.getElementById('numberToGuess');

function mainFunction(){
  numberToGuess.innerHTML = colors[0];
}