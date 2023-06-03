



let repeatButton = document.getElementById('button');
let container = document.getElementById('container');
let animationElement = document.getElementById('herta');
let counterElement = document.getElementById('counter');

let counter = 0;

const soundFiles = [
  'audio.kuru1.mp3',
  'audio/kuru2.mp3',
  'audio/kuru3.mp3'
];

//repeat, allowing it to repeat allows more playability also its fun pressing it over and over again.//
repeatButton.addEventListener('click', function() {
  const clonedElement = animationElement.cloneNode(true);
  container.appendChild(clonedElement);

  //clone DONT TOUCH DOESNT FUCKING WORK WHEN ITS CHANGED IDKWHY //
  clonedElement.style.animation = 'none';
  void clonedElement.offsetWidth;
  clonedElement.style.animation = 'hertaSpin 3s linear';

  const containerRect = container.getBoundingClientRect();
  const animationRect = animationElement.getBoundingClientRect();
  const clonedRect = clonedElement.getBoundingClientRect();

  const offsetX = animationRect.left - containerRect.left;
  const offsetY = animationRect.top - containerRect.top;

  clonedElement.style.position = 'absolute';
  clonedElement.style.left = 0;
  clonedElement.style.top = 0;

//sound
//This is linked to her sound, since her spinning is associated with that sound.
  const randomSoundIndex = Math.floor(Math.random() * soundFiles.length);
  const randomSoundFile = soundFiles[randomSoundIndex];

  const audio = new Audio(randomSoundFile);
  audio.currentTime = 0
  audio.play();

  //counter
  //A counter for fun, just to see how many times it has been pressed. 
  counter++; 
  counterElement.textContent = counter; 
});





/* find the modal */
let modal = document.getElementById("modalDialog");
/* find the button and add an eventlister */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});