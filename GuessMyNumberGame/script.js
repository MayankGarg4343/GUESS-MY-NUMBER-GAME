'use strict';

/*


console.log(document.querySelector('.message').textContent);

// 👉 here the (document.queryselector) points to the element of the html and then we have used the 
//     (.textcontent) property which is being used to get or set the value.


                    //👉   DOM AMD DOM MANIPULATION

// what does dom actually means. the dom stands for the (document object model) it is the structured representation of html document.
// allows the javascript to access the elements of the html elements and styles to manipulate them.

// manipulate here refers that we can change the text, attributes and even css style.

// dom is alredy created by the borwser as the html page loads. and it used to store it in the form of the tree.
// dom is the complete representation of the html element.

// actually the dom methods and the properties of the dom manipulation are not the parts of the javascript.

// 👉 then the question here arises that how we access them through the javascript the answer is that they are the part of the web api's
//     and these api's are the part of the javascript and by this we can access then through the javascript and the api stands for (application programming interface).

 document.querySelector('.message').textContent = '🎉 correct number';

// by using this we can change the name of the selected element and it also worked.
// here we have actually done the dom manipulation. 

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);



*/

//👉 handelling the click events.

// aab ek unique number define karege taki hamari game chal sake.

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
// yaha jo function hai who event handler ka kaam kar raha hai. 