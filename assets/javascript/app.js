
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
var QuestionTotal = 1
var questionsright = 0
var questionswrong = 0
var total = 8

    

    
function showQuestion(currentQuestion) {
    clearInterval(downloadTimer);
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
        QuestionTotal++
        decreaseQues()
        $("#question").text(myQuestions[currentQuestion].question);
        $("#choice1").text(myQuestions[currentQuestion].answers[0]);
        $("#choice2").text(myQuestions[currentQuestion].answers[1]);
        $("#choice3").text(myQuestions[currentQuestion].answers[2]);
        $("#choice4").text(myQuestions[currentQuestion].answers[3]);
       
        console.log(myQuestions[currentQuestion].question)
        console.log(myQuestions[currentQuestion].answers)
       
            
            
       $("#Questionnum").text("Question " + QuestionTotal + " of " + total)
      
       loadnext()
    
};


function decreaseQues() {
    if (QuestionTotal === 8) {
        $("#question, button").hide();
        $("#results").text("Your score is: " + questionsright + " out of " + total)
        createRefreshButton()
    }
}

function createRefreshButton() {
    var $button = $('<button class="btn_refresh">Refresh</button>');
    $("#quiz").append($button);
    $button.on('click',function(){
        refresh();
    });
  }

function refresh() {
    $("#question, button").show();
    $("#results").hide();
    $(".btn_refresh").hide();
    var currentQuestion = 0
    var QuestionTotal = 1
    $("#Questionnum").text("Question " + QuestionTotal + " of " + total)
    var questionsright = 0
    var questionswrong = 0
    var total = 8
    showQuestion(currentQuestion)
    decreaseQues()
}


$(document).ready(function() {
    $("#question").text(myQuestions[currentQuestion].question);
    $("#choice1").text(myQuestions[currentQuestion].answers[0]);
    $("#choice2").text(myQuestions[currentQuestion].answers[1]);
    $("#choice3").text(myQuestions[currentQuestion].answers[2]);
    $("#choice4").text(myQuestions[currentQuestion].answers[3]);
   
    console.log(myQuestions[currentQuestion].question)
    console.log(myQuestions[currentQuestion].answers)

    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
    currentQuestion++
    decreaseQues()
    
    var QuestionTotal = 1
    $("#Questionnum").text("Question " + QuestionTotal + " of " + total)
    
    loadnext()
});



function loadnext() {
    $("input[type='radio']").click(function(){
       
    var chosenOption = $("input[name='option']:checked").val();
    console.log(chosenOption)
    if (myQuestions[currentQuestion].value === chosenOption) {
        console.log(myQuestions[currentQuestion].value)
        questionsright++
       $("#rightanswer").text("Your answer is correct " + myQuestions[currentQuestion].correctAnswer + " is the right answer." )
          
    }
   
    else if (myQuestions[currentQuestion].value !== chosenOption) {
        questionswrong++
        $("#rightanswer").text("Your answer is incorrect " + myQuestions[currentQuestion].correctAnswer + " is the right answer." )
        
    
         
    }
})
}


// function myFunction() {
//     $("#button1, #button2, #button3, #button4").click(function() {
//         var fired_button = $(this).val()
        
//         var currentCorrectanswer = myQuestions[currentQuestion].value;
//         var Displayanswer = myQuestions[currentQuestion].correctAnswer;  
        
//       var chosenAnswer = fired_button; 
//       console.log(chosenAnswer);
//     if (chosenAnswer === Displayanswer){
//         console.log(currentCorrectanswer)
        
//         // var x = $("#quiz, #grid").detach();
       
//         // $("#quiz").text("Your answer is correct! " + Displayanswer + " is the right answer!");
//         // $("#quiz, #grid").prepend(x);
        
        
//         questionsright++
       
//         $("#Questionnum").text("Question " + QuestionTotal + " of " + total)
//        } 
  
         
     
           
    
//     else if (chosenAnswer !== Displayanswer) {
        
        
//         // var currentCorrectanswer = myQuestions[currentQuestion].value;
//         // var Displayanswer = myQuestions[currentQuestion].correctAnswer; 
//         // $("#question, #choice1, #choice2, #choice3, #choice4").empty();
//         // $("#rightanswer").text("Sorry your answer is not correct! " + " The correct answer is: " + Displayanswer);
        
        
//         questionswrong++
        
//          $("#Questionnum").text("Question " + QuestionTotal + " of " + total)
//     } 
    
    
//     });
// } 









   











