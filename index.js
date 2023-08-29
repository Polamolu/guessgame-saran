'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let submit = document.querySelector('.submit');
let comment = document.querySelector('.leo');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let thinked = document.querySelector('.thinked');
let main = document.querySelector('.body');
let again = document.querySelector('.again');
console.log(number);

submit.addEventListener('click', function (e) {
  let req = score.textContent;
  if (Number(req) > 0) {
    let guessed = Number(document.querySelector('.guess').value);
    if (number > guessed) {
      comment.textContent = 'too low..';
      score.textContent = Number(score.textContent) - 1;
    } else if (number < guessed) {
      comment.textContent = 'too high...';
      score.textContent = Number(score.textContent) - 1;
    } else {
      let p = Number(highscore.textContent);
      let q = Number(score.textContent);
      if (q > p) {
        highscore.textContent = q;
      }
      main.style.backgroundColor = 'green';
      thinked.textContent = number;
      comment.textContent = 'you won the game';
    }
  } else {
    alert('game over');
  }
});
again.addEventListener('click', function (e) {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('.guess').value = '';
  score.textContent = '20';
  main.style.backgroundColor = 'black';
  thinked.textContent = '?';
  comment.textContent = 'start guessing...';
});
