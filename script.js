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

var wordBlank = document.querySelector(".word-blanks");
var initials = document.querySelector(".initial-button");
var timerEl = document.querySelector(".timer-count");

var score = document.querySelector("#score");
var correctAnswers = 0;

var timer;
var timerCount;

var questionArray = [
    {
        question: "What do you put at the end of a JavaScript Function?",
        answer: "curly bracket",
        selections: ["curly bracket", "parentheses", "semicolon", "period"],
    },

    {
        question: "What does CSS stand for",
        answer: "Cascading Style Sheets",
        selections: ["Computer Science Sets", "Cascading Style Sheets", "Creative Style Sources", "Cool Source Style"],
    },

    {
        question: "What is NOT a common datatype in JavaScript?",
        answer: "letters",
        selections: ["strings", "letters", "numbers", "boolean"],
    },
    
    {
        question: "What is NOT a common data structure in JavaScript?",
        answer: "strings",
        selections: ["arrays", "linked list", "strings", "queue"],
    },


    {
        question: "What is NOT a variable type in JavaScript?",
        answer: "button",
        selections: ["var", "const", "let", "button"],
    },

]

function displayQuestion () {
  questionEl.innerText = questionArray[0].question
  answerButtonA.innerText = questionArray[0].selections[0]
  answerButtonB.innerText = questionArray[0].selections[1]
  answerButtonC.innerText = questionArray[0].selections[2]
  answerButtonD.innerText = questionArray[0].selections[3]
}

let randomQuestion

var currentQuestion = 0

 // Attach event listener to start button to call startGame function on click
 startButton.addEventListener('click', startGame);
 answerButtonsEl.addEventListener('click', selectAnswer)

 initials.addEventListener("keydown", function(event) {
  var storedInitials = localStorage.setItem("Initials");
  // If stored value doesn't exist, leave blank
  if (storedInitials === null) {
    return "";
  } else {
    // If a value is retrieved from client storage set the Initials to that value
    initials = storedInitials;
  }
 console.log("initials")
 } )

// set up functions that will be needed

// click the start button
// a timer starts and I am presented with a question

function startGame(event) {
    console.log("started")
    randomQuestion = questionArray.sort(() =>Math.random() - .5);
    displayQuestion(currentQuestion);

    timerCount = 60;
// Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer();
  }



// I answer a question
function selectAnswer (event) {
//  how? what do they click on --check boxes or click a button
// event perameter
  console.log(event.target.innerHTML)
  if (event.target.innerHTML===questionArray[currentQuestion].answer) {
    window.alert("Correct!");
  } else {
    window.alert("Incorrect");
  }
  currentQuestion++
  displayQuestion(currentQuestion);
}

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

function calculateScore() {
  correctAnswers++
}

function setScore() {
  correctAnswers.textContent = correctAnswers;
  localStorage.setItem("Score", correctAnswers);
}

function getScore() {
  // Get stored value from client storage, if it exists
  var storedAnswers = localStorage.getItem("Score");
  // If stored value doesn't exist, set counter to 0
  if (storedAnswers === null) {
    correctAnswers = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    correctAnswers = storedAnswers;
  }
  //Render win count to page
  score.textContent = correctAnswers;
}

// the game is over
function gameOver () {
  wordBlank.textContent = "Quiz Over";
// use local storage 
// save my initials and my score
}
//  grab local storage and display on screen when they click "add"
// WHEN the game is over
// THEN I can
// ```
// Updates win count on screen and sets win count to client storage
 



// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

function resetGame() {
  // Resets counter
  correctAnswers = 0;
  // Renders win and loss counts and sets them into client storage
  setScore();
  displayQuestion (currentQuestion);

}

