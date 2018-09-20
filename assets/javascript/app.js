
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

var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);

    
function showQuestion(currentQuestion) {
    
    for (var i = 0; i < myQuestions.length; i++) {
        
        $("#question").text(myQuestions[currentQuestion].question);
        $("#choice1").text(myQuestions[currentQuestion].answers[0]);
        $("#choice2").text(myQuestions[currentQuestion].answers[1]);
        $("#choice3").text(myQuestions[currentQuestion].answers[2]);
        $("#choice4").text(myQuestions[currentQuestion].answers[3]);
       
        console.log(myQuestions[currentQuestion].question)
    timeLeft = 10;
    document.getElementById("countdowntimer").textContent = timeleft 
    
  
    }
    
};

$(document).ready(function() {
showQuestion(currentQuestion);
});




function myFunction() {
    $("button").click(function() {
        var fired_button = $(this).val()
        alert(fired_button)
        var currentCorrectanswer = myQuestions[currentQuestion].value;
        var Displayanswer = myQuestions[currentQuestion].correctAnswer;  
        
      var chosenAnswer = fired_button; 
      console.log(chosenAnswer);
    if (chosenAnswer === currentCorrectanswer){
        console.log(currentCorrectanswer)
        var currentCorrectanswer = myQuestions[currentQuestion].value;
        var Displayanswer = myQuestions[currentQuestion].correctAnswer; 
        $("#question, #choice1, #choice2, #choice3, #choice4").empty();
        $("#rightanswer").text("Your answer is correct! " + Displayanswer + " is the right answer!");
        
        showQuestion(currentQuestion++)
        console.log(Displayanswer)} 
  
         
     
           
    
    else if (chosenAnswer !== currentCorrectanswer) {
        var currentCorrectanswer = myQuestions[currentQuestion].value;
        var Displayanswer = myQuestions[currentQuestion].correctAnswer; 
        $("#question, #choice1, #choice2, #choice3, #choice4").empty();
        $("#rightanswer").text("Sorry your answer is not correct! " + " The correct answer is: " + Displayanswer);
        showQuestion(currentQuestion++)
        console.log(Displayanswer)
        
    } 
    
    });
} 

function nextQuestion() {

}




   











