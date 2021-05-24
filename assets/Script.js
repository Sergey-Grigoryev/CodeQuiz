var secondsLeft = document.querySelector(".secondsLeft");
var startQuizDiv = document.querySelector(".startQuizDiv");
var startQuizBtn = document.querySelector(".startQuizBtn");
var scoresLink = document.querySelector(".scoresLink");
var pastScores = document.querySelector(".pastScores");
var questions = document.querySelector(".questions");
var multiChoiceBtn = document.querySelector(".multiChoiceBtn");
var multiChoice = document.querySelector(".multiChoice");

var currentQuestion = {};

// question objects
var question1 = [
    {question:"first question"}, 
    {choice1:"option 1", choice2:"option 2", choice3:"option 3", choice4:"option 4"}, 
    {correct:"option 1"}];
var question2 = [
    {question:"Second question"}, 
    {choice1:"option 1", choice2:"option 2", choice3:"option 3", choice4:"option 4"}, 
    {correct:"option 2"}];
var question3 = [
    {question:"Third question"}, 
    {choice1:"option 1", choice2:"option 2", choice3:"option 3", choice4:"option 4"}, 
    {correct:"option 3"}];

startQuizBtn.addEventListener("click", function startQuiz(event) {
    event.preventDefault();
    startQuizDiv.style.display = "none";

    // show the question
    currentQuestion = question1;
    questions.textContent = question1[0].question;
    
    // show the answer options in buttons
    multiChoice.style.display = "flex";

    let i = 2;
    function createOptionBtn(answerChoices) {
        let createBtn = document.createElement("button");
        createBtn.className = "multiChoiceBtn";
        createBtn.id = "choice" + i;
        i++;
        createBtn.textContent = answerChoices;
        return createBtn;
    };
    
    currentQuestion = question1;
    multiChoiceBtn.textContent = currentQuestion[1].choice1; 
    multiChoice.appendChild(createOptionBtn(currentQuestion[1].choice2));
    multiChoice.appendChild(createOptionBtn(currentQuestion[1].choice3));
    multiChoice.appendChild(createOptionBtn(currentQuestion[1].choice4));

        // score counter
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    var score = 0; 



    function secondQuestion() {

        // show the question
        currentQuestion = question2;
        questions.textContent = currentQuestion[0].question;
    
        // show the answer options in buttons
        multiChoice.style.display = "flex";

        document.querySelector("#choice1").textContent = "Test2.1";
        document.querySelector("#choice2").textContent = "Test2.2";
        document.querySelector("#choice3").textContent = "Test2.3";
        document.querySelector("#choice4").textContent = "Test2.4";

        return currentQuestion;
    };


    function thirdQuestion() {

        // show the question
        currentQuestion = question3;
        questions.textContent = currentQuestion[0].question;
    
        // show the answer options in buttons
        multiChoice.style.display = "flex";

        document.querySelector("#choice1").textContent = "Test3.1";
        document.querySelector("#choice2").textContent = "Test3.2";
        document.querySelector("#choice3").textContent = "Test3.3";
        document.querySelector("#choice4").textContent = "Test3.4";

    };

    function forthQuestion() {

        // show the question
        currentQuestion = question4;
        questions.textContent = currentQuestion[0].question;
    
        // show the answer options in buttons
        multiChoice.style.display = "flex";

        document.querySelector("#choice1").textContent = "Test4.1";
        document.querySelector("#choice2").textContent = "Test4.2";
        document.querySelector("#choice3").textContent = "Test4.3";
        document.querySelector("#choice4").textContent = "Test4.4";

    };

        // score counter
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    var score = 0; 

    function scoreCalc(selection) {
        if (selection === currentQuestion[2].correct) {
            score++;
            console.log(score);
        };
    };

    choice1.addEventListener("click", function scoreCalcChoice1() {
        scoreCalc(currentQuestion[1].choice1);
        if (currentQuestion = question1) {
            secondQuestion();
        } else if (currentQuestion = question2) {
            thirdQuestion();
        } else if (currentQuestion = question3) {
            forthQuestion();
        };
    } );

    choice2.addEventListener("click", function scoreCalcChoice2() {
        scoreCalc(currentQuestion[1].choice2);
        if (currentQuestion = question1) {
            secondQuestion();
        } else if (currentQuestion = question2) {
            thirdQuestion();
        } else if (currentQuestion = question3) {
            forthQuestion();
        };
    } );
    choice3.addEventListener("click", function scoreCalcChoice3() {
        scoreCalc(currentQuestion[1].choice3);
        if (currentQuestion = question1) {
            secondQuestion();
        } else if (currentQuestion = question2) {
            thirdQuestion();
        } else if (currentQuestion = question3) {
            forthQuestion();
        };
    } );
    choice4.addEventListener("click", function scoreCalcChoice4() {
        scoreCalc(currentQuestion[1].choice3);
        if (currentQuestion = question1) {
            secondQuestion();
        } else if (currentQuestion = question2) {
            thirdQuestion();
        } else if (currentQuestion = question3) {
            forthQuestion();
        };
    } );
    
   console.log(score);
 
});


  



// choice1.addEventListener("click", function scoreCalc(choice1) {
//     if (question1[1].choice1 === question1[2].correct) {
//         console.log(score);
//         score++;
//         console.log(score);
//     }
// });
// choice2.addEventListener("click", function scoreCalc(choice2) {
//     if (question1[1].choice2 === question1[2].correct) {
//         score++;
//     };        
// });        
// choice3.addEventListener("click", function scoreCalc(choice3) {
//     if (question1[1].choice3 === question1[2].correct) {
//         score++;
//     };        
// });
// choice4.addEventListener("click", function scoreCalc(choice4) {
//     if (question1[1].choice4 === question1[2].correct) {
//         score++;
//     };        
// });

