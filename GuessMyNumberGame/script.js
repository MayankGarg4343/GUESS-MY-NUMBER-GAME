let secretnumber = Math.trunc(Math.random() * 20) + 1;    // selecting the unique number always.
let score = 10;
let highscore = 0;
document.querySelector('.again').addEventListener('click',function(){
  score = 10;
  secretnumber = Math.trunc(Math.random() * 20) + 1;    // selecting the unique number always.

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.background = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '30rem'; 
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no  number';
  } 
  //while guessing the right number.
  else if (guess === secretnumber) {
    document.querySelector('.message').textContent = ' 🎉 correct number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretnumber;
    if(score>highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore; 
    }

  } 
  // when the guessed number is greater.
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else { 
      document.querySelector('.message').textContent = '😔 you loose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } 
  // when the guessed number is lower.
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else { 
      document.querySelector('.message').textContent = '😔 you loose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
