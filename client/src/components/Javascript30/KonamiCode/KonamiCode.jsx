// import "http://www.cornify.com/js/cornify.js";
const pressed = [];
const secretCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("Ding Ding!");
    // cornify_add();
  }
  console.log(pressed);
});
// ------------------------------------------------------
// let pressed = [];
// let konamiCode = [
//   'ArrowUp',
//   'ArrowUp',
//   'ArrowDown',
//   'ArrowDown',
//   'ArrowLeft',
//   'ArrowRight',
//   'ArrowLeft',
//   'ArrowRight',
//   'b',
//   'a'
// ];

// let codeCheck = (codeToCheck, keyCode, e) => {
//   // push new code to codecheck
//   codeToCheck.push(e.key);

//   // does letter match codetocheck + 1
//   if (codeToCheck.length > keyCode.length) codeToCheck.shift();
//   let matchResult = keyCode.every(
//     (letter, index) => codeToCheck[index] === letter
//   );

//   console.log(codeToCheck, matchResult);
// };

// window.addEventListener('keydown', e =>
//   codeCheck(userCode, konamiCode, e)
// );
