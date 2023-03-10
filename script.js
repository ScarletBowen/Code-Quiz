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


var initialsEl = document.querySelector(".initial-button");
var timerEl = document.querySelector(".timer-count");
var userName = document.querySelector(".form-input");
var score = document.querySelector("#score");

var scoreHistory = document.querySelector(".score-history");
var correctAnswers = 0;

var initials = userName.value;

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
var currentQuestion = 0
let randomQuestion

function displayQuestion (currentQuestion) {
  questionEl.innerText = questionArray[currentQuestion].question
  answerButtonA.innerText = questionArray[currentQuestion].selections[0]
  answerButtonB.innerText = questionArray[currentQuestion].selections[1]
  answerButtonC.innerText = questionArray[currentQuestion].selections[2]
  answerButtonD.innerText = questionArray[currentQuestion].selections[3]
}



 // Attach event listener to start button to call startGame function on click
 startButton.addEventListener('click', startGame);

// event listener to select answer
 answerButtonsEl.addEventListener('click', selectAnswer)


// set up functions that will be needed

// click the start button
// a timer starts and I am presented with a question


function startGame(event) {
    console.log("started")
    randomQuestion = questionArray.sort(() =>Math.random() - .5);
    displayQuestion(currentQuestion);
    timerCount = 75;
// Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer();
  }


// I answer a question
function selectAnswer (event) {
  console.log(event.target.innerHTML)
  if (event.target.innerHTML===questionArray[currentQuestion].answer) {
    answer = correctAnswers
    window.alert("Correct!");
  } else {
    window.alert("Incorrect");
    timerCount = timerCount - 10;
  }
  console.log(currentQuestion);
  currentQuestion++
  if (currentQuestion < questionArray.length) {
    displayQuestion(currentQuestion);
    
  }
  else {
    gameOver();
  }
  
  setScore();

}

// time is subtracted from the clock
// all questions are answered or the timer reaches 0

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount > 0) {
      }
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }

  // array to hold high scores; //, { 'initals': 'sb', 'score': 10 }],
 var storedScores = [];

// Get the existing high scores from local storage
var storedScores = JSON.parse(localStorage.getItem("highScores")) || [];


function setScore() {
  // update score

  score.textContent = correctAnswers;
  localStorage.setItem("Score", correctAnswers);
  
  // get initials from input field
  var initials = userName.value;
  // add score to high scores
  storedScores.push({score: correctAnswers, initials: initials});
   // Increment the correctAnswers counter
  correctAnswers++
}

function getScore() {
  card.style.display = "none"
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
};

// event listener for when user types initials into form
initialsEl.addEventListener("click", function(event) {
  event.preventDefault()
  // Get the initials from the input field
  var initials = userName.value;
  if (initials === "") {
    initials = "";
  }
  // Add the current score to the list of high scores with initials
  storedScores.push({ initials: initials, score: correctAnswers });
  getStoredScores(initials);
  });


 function getStoredScores(initials) { 
  // get existing high scores from local storage
  var storedScores = JSON.parse(localStorage.getItem("highScores"));
  //if no scores yet, fail gracefully
  if (storedScores == null) {
    return
  }
  storedScores.sort((a, b) => {
    return b.score - a.score;
  });
  scoreHistory.innerHTML = initials + ": " + correctAnswers + "<br>";
  // var list = '';
  //   for (var i = 0; i < storedScores.length; i++) {
  //     list += storedScores[i].initials + ": " + storedScores[i].score + "<br>";
  // }
  // //Render scores to page
  // scoreHistory.innerHTML = list;
}



// the game is over
function gameOver () {
   // add alert to say game over
  window.alert("Quiz Over");
  // stop timer
  clearInterval(timer);
  // set display type to none for question div
  questionEl.style.display = "none";
}




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

