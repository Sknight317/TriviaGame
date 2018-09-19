
// Page that says Trivia game with a start button
//When start button is clicked, the game begins and countdown timer starts for first question
// Display a timer that says time remaining for ALL questions to be completed
// Create buttons using a div for answer choices
// When hover over button change the color
// After user clicks and answer, tell them whether their choice was correct or not (display sorry incorrect and the right answer)
// When the time is up, need to automatically move to the next question
// Once all questions are completed, stop the timer from ticking down, say: All done, here is your score
// Display correct answers, incorrect answers, and unaswered answers
// Have a button to start over that resets the game

// Storing a reference to HTML elements in variables



// var currentQuestion = 0;

// var score = 0;

// var container = $("#quiz");
// var questionScreen = $("#question");
// var button1 = $("#choice1");
// var button2 = $("#choice2");
// var button3 = $("#choice3");
// var button4 =  $("#choice4");
// var totalQues = myQuestions.length;
// var resultContainer = $("#result");

// function showQuestion (questionIndex) {
//     var q = myQuestions[questionIndex];
//     $("#question").text(questionIndex + 1) + '.' + q.question;
//     button1.textContent = q.a;
//     button2.text(q.b);
//     button3.text(q.c);
//     button4.text(q.d);
//     console.log(q)
// };





// showQuestion(currentQuestion);
var currentQuestion = 0

$(document).ready(function(question) {
    
    for (var i = 0; i < myQuestions.length; i++) {
        
        $("#question").text(myQuestions[currentQuestion].question);
        $("#choice1").text(myQuestions[currentQuestion].answers[0]);
        $("#choice2").text(myQuestions[currentQuestion].answers[1]);
        $("#choice3").text(myQuestions[currentQuestion].answers[2]);
        $("#choice4").text(myQuestions[currentQuestion].answers[3]);
       
        console.log(myQuestions[currentQuestion].question)
    }
    
});

var currentCorrectanswer = myQuestions[currentQuestion].correctAnswer;
console.log(currentCorrectanswer);

function myFunction() {
    $("button").click(function() {
        var fired_button = $(this).val();
        alert(fired_button);
        
      var chosenAnswer = fired_button; 
      console.log(chosenAnswer);
    if (chosenAnswer === currentCorrectanswer) {
        $("#grid, .buttons, #quiz").empty();
        $("#quiz").text("Your answer is correct! " + myQuestions[currentQuestion].correctAnswer + " is the right answer!");
        currentQuestion++
    }
    else if (chosenAnswer !== currentCorrectanswer) {
        $("#grid, .buttons, #quiz").empty();
        $("#quiz").text("Sorry your answer is not correct! " + " The correct answer is: " + myQuestions[currentQuestion].correctAnswer);
        currentQuestion++
    } 
    
    });
} 


   











