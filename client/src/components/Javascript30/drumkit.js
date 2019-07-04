window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// let keys = [...document.getElementsByClassName('key')];
// let keyAudio = document.getElementsByTagName('AUDIO');

// document.onkeydown = e => {
//   switch (e.keyCode) {
//     case 65:
//       keys[0].classList.add('playing');
//       keyAudio[0].play();
//       break;
//     case 83:
//       keys[1].classList.add('playing');
//       keyAudio[1].play();
//       break;
//     case 68:
//       keys[2].classList.add('playing');
//       keyAudio[2].play();
//       break;
//     case 70:
//       keys[3].classList.add('playing');
//       keyAudio[3].play();
//       break;
//     case 71:
//       keys[4].classList.add('playing');
//       keyAudio[4].play();
//       break;
//     case 72:
//       keys[5].classList.add('playing');
//       keyAudio[5].play();
//       break;
//     case 74:
//       keys[6].classList.add('playing');
//       keyAudio[6].play();
//       break;
//     case 75:
//       keys[7].classList.add('playing');
//       keyAudio[7].play();
//       break;
//     case 76:
//       keys[8].classList.add('playing');
//       keyAudio[8].play();
//       break;
//   }
// };

// document.onkeyup = e => {
//   switch (e.keyCode) {
//     case 65:
//       keys[0].classList.remove('playing');
//       keyAudio[0].pause();
//       keyAudio[0].currentTime = 0;
//       break;
//     case 83:
//       keys[1].classList.remove('playing');
//       keyAudio[1].pause();
//       keyAudio[1].currentTime = 0;
//       break;
//     case 68:
//       keys[2].classList.remove('playing');
//       keyAudio[2].pause();
//       keyAudio[2].currentTime = 0;
//       break;
//     case 70:
//       keys[3].classList.remove('playing');
//       keyAudio[3].pause();
//       keyAudio[3].currentTime = 0;
//       break;
//     case 71:
//       keys[4].classList.remove('playing');
//       keyAudio[4].pause();
//       keyAudio[4].currentTime = 0;
//       break;
//     case 72:
//       keys[5].classList.remove('playing');
//       keyAudio[5].pause();
//       keyAudio[5].currentTime = 0;
//       break;
//     case 74:
//       keys[6].classList.remove('playing');
//       keyAudio[6].pause();
//       keyAudio[6].currentTime = 0;
//       break;
//     case 75:
//       keys[7].classList.remove('playing');
//       keyAudio[7].pause();
//       keyAudio[7].currentTime = 0;
//       break;
//     case 76:
//       keys[8].classList.remove('playing');
//       keyAudio[8].pause();
//       keyAudio[8].currentTime = 0;
//       break;
//   }
// };
