// set up variables that will be needed
// much of the set up code was inspired by the Mini-Project for Web api's
// I was also inspired by this youTube tutorial for how to set up the question array and functions, but had to modify because he uses classes and as far as I know we haven't learned about that yet for this homework assignment:  https://www.youtube.com/watch?v=bGQ9sIHZdlo&list=WL&index=1

var startButton = document.querySelector(".start-button");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector(".buttons");
var answerButtonA = document.getElementById('choice0');
var answerButtonB = document.getElementById('choice1');
var answerButtonC = document.getElementById('choice2');
var answerButtonD = document.getElementById('choice3');

var score = document.querySelector("#score");
var initials = document.querySelector(".initial-button");
var timerEl = document.querySelector(".timer-count");


var timer;
var timerCount;

var questionIndex = [
    {
        question: "What do you put at the end of a JavaScript Function?",
        answer: "curly bracket",
        selections: ["curly bracket", "parentheses", "semicolon", "period"]
    },

    {
        question: "What does CSS stand for",
        answer: "Cascading Style Sheets",
        selections: ["Computer Science Sets", "Cascading Style Sheets", "Creative Style Sources", "Cool Source Style"]
    },

    {
        question: "What is NOT a common datatype in JavaScript?",
        answer: "letters",
        selections: ["strings", "letters", "numbers", "boolean"]
    },
    
    {
        question: "What is NOT a common data structure in JavaScript?",
        answer: "strings",
        selections: ["arrays", "linked list", "strings", "queue"]
    },


    {
        question: "What is NOT a variable type in JavaScript?",
        answer: "button",
        selections: ["var", "const", "let", "button"]
    },

]

let randomQuestion, currentQuestion

 // Attach event listener to start button to call startGame function on click
 startButton.addEventListener("click", startGame);
 answerButtonsEl.addEventListener('click', selectAnswer)

// set up functions that will be needed

// click the start button
// a timer starts and I am presented with a question

function startGame(event) {
    console.log("started")
    randomQuestion = questionIndex.sort(() =>Math.random() - .5);
    currentQuestion = 0
    displayQuestion(questionIndex[currentQuestion]);

    timerCount = 60;
// Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer();
  }

function displayQuestion (questionArray) {
  questionEl.innerText = questionArray.question
  answerButtonA.innerText = questionArray.selections[0]
  answerButtonB.innerText = questionArray.selections[1]
  answerButtonC.innerText = questionArray.selections[2]
  answerButtonD.innerText = questionArray.selections[3]

}
  // const(text, selections, answer) {
  //   this.text = text;
  //   this.seletions = selections;
  //   this.answer = answer;

//     if (quiz.gameOver ()) {
//       showScore();
//     } else {
//       let questionEL = document.getElementById("question");
//       questionEl.innerHTML = quiz.getQuestionIndex().text;
//     }
//       let selections = quiz.getQuestionIndex().selections;
//       for (let i =0; i < selections.length; i++) {
//         let selectionsEL = document.getElementById("choice" + i);
//         selectionsEL.innerHTML = selections [i];
//         selectAnswer("btn" + i, selections[i]);
//       }
//   }

// }
// I answer a question
function selectAnswer (event) {
//  how? what do they click on --check boxes or click a button
// event perameter
console.log(event.target.innerHTML)
if (event.target.innerHTML===questionIndex[currentQuestion].answer) {
  // they got it right
} else {
//  they got it wrong
// advance currentQuestion ++
// display question again
}
  
}

// I answer a question correctly
function checkAnswer() {
  if (this.getQuestionIndex().isCorrect(answer)) {
    this.score++;
  }
  this.questionIndex++;
}


//  ask if there is a next question before done/no more questions

// function clearAnswer() {

// }

// var score () {
//   var(questions) {
//   this.score = 0;
//   this.questions = questions;
//   this.questionIntdex=0;
// }
// }

// time is subtracted from the clock
// all questions are answered or the timer reaches 0

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        // if (isWin && timerCount > 0) {
        //   // Clears interval and stops timer
        //   clearInterval(timer);
        //   displayScore();
        // }
      }
      // Tests if time has run out
      if (timerCount === 10) {
        // Clears interval
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }

function displayScore() {



}

// the game is over
function gameOver () {
  return this.questionIndex === this.questions.length;
// use local storage 
// save my initials and my score

}

// WHEN the game is over
// THEN I can
// ```
// Updates win count on screen and sets win count to client storage
 



// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");


