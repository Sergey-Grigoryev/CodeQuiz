var secondsLeft = document.querySelector(".secondsLeft");
var startQuizDiv = document.querySelector(".startQuizDiv");
var startQuizBtn = document.querySelector(".startQuizBtn");
var scoresLink = document.querySelector(".scoresLink");
var pastScores = document.querySelector(".pastScores");
var questions = document.querySelector(".questions");
var multiChoiceBtn = document.querySelector(".multiChoiceBtn");
var multiChoice = document.querySelector(".multiChoice");
var initialsForm = document.querySelector(".initialsForm");
var initialsFormBtn = document.querySelector(".initialsFormBtn");
var initialsFormText = document.querySelector(".initialsFormText");

var currentQuestion = {};

// question objects
var question1 = [
    {question:"Which of the following is NOT a variable type in JS?"}, 
    {choice1:"var", choice2:"let", choice3:"const", choice4:"thing"}, 
    {correct:"thing"}];
var question2 = [
    {question:"Which of the following links to a class in an HTML doc?"}, 
    {choice1:".classname", choice2:"#classname", choice3:"%classname", choice4:"All of the above"}, 
    {correct:".classname"}];
var question3 = [
    {question:"What does the clearInterval() do in your setInterval(function(){}) ?"}, 
    {choice1:"Clears everything on the screen", choice2:"Clears cache", choice3:"Stops setInterval from running forever", choice4:"Does nothing"}, 
    {correct:"Stops setInterval from running forever"}];
var question4 = [
    {question:"Who of the 6 Friends had the first line in the first episode season 1"}, 
    {choice1:"Monica", choice2:"Ross", choice3:"Joe", choice4:"Phoebe"}, 
    {correct:"Monica"}];
var finalScore = {};

    //start of quiz
startQuizBtn.addEventListener("click", function startQuiz(event) {
    event.preventDefault();
    timer();
    startQuizDiv.style.display = "none";
    document.querySelector(".aboutQuiz").style.display = "none";

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

    function secondQuestion() {

        // show the question
        currentQuestion = question2;
        questions.textContent = currentQuestion[0].question;
    
        // show the answer options in buttons
        multiChoice.style.display = "flex";

        document.querySelector("#choice1").textContent = currentQuestion[1].choice1;
        document.querySelector("#choice2").textContent = currentQuestion[1].choice2;
        document.querySelector("#choice3").textContent = currentQuestion[1].choice3;
        document.querySelector("#choice4").textContent = currentQuestion[1].choice4;
    };

    function thirdQuestion() {

        // show the question
        currentQuestion = question3;
        questions.textContent = currentQuestion[0].question;
    
        // show the answer options in buttons
        multiChoice.style.display = "flex";

        document.querySelector("#choice1").textContent = currentQuestion[1].choice1;
        document.querySelector("#choice2").textContent = currentQuestion[1].choice2;
        document.querySelector("#choice3").textContent = currentQuestion[1].choice3;
        document.querySelector("#choice4").textContent = currentQuestion[1].choice4;
    };

    function forthQuestion() {

        // show the question
        currentQuestion = question4;
        questions.textContent = currentQuestion[0].question;
    
        // show the answer options in buttons
        multiChoice.style.display = "flex";

        document.querySelector("#choice1").textContent = currentQuestion[1].choice1;
        document.querySelector("#choice2").textContent = currentQuestion[1].choice2;
        document.querySelector("#choice3").textContent = currentQuestion[1].choice3;
        document.querySelector("#choice4").textContent = currentQuestion[1].choice4;
    };

        // score counter + feedback
    var choice1 = document.querySelector("#choice1");
    var choice2 = document.querySelector("#choice2");
    var choice3 = document.querySelector("#choice3");
    var choice4 = document.querySelector("#choice4");
    var score = 0; 

    function scoreCalc(selection) {
        if (selection === currentQuestion[2].correct) {
            score++;
            document.querySelector(".feedback").style.display = "flex";
            document.querySelector(".feedback").textContent = "Correct!";
        } else {
            duduct10();
            document.querySelector(".feedback").style.display = "flex";
            document.querySelector(".feedback").textContent = "Wrong! -10 sec";
        };
        setTimeout(function(){
            document.querySelector(".feedback").style.display = "none";
        }, 1500);
    };

        // End of quiz initials entry
    initialsFormBtn.addEventListener("click", function saveScore() {
        event.preventDefault();
        let savedScore = JSON.parse(localStorage.getItem("Score"));
        if (score >= savedScore) {
            localStorage.setItem("Tester", JSON.stringify(initialsFormText.value));
            localStorage.setItem("Score", JSON.stringify(score));
        };
    });

        // End of Quiz
        function endQuiz() {
            currentQuestion = finalScore;
            questions.textContent = ("Good Job! You completed the quiz!");
            multiChoice.style.display = "none";
            initialsForm.style.display = "flex";
            document.querySelector(".aboutQuiz").style.display = "flex";
            document.querySelector(".aboutQuizP").style.display = "none";
            document.querySelector(".aboutQuizH3").textContent = "You scored: " + score;
        };

        // Answer selection listeners 
    choice1.addEventListener("click", function () {
        scoreCalc(currentQuestion[1].choice1);
        if (currentQuestion === question1) {
            secondQuestion();
        } else if (currentQuestion === question2) {
            thirdQuestion();
        } else if (currentQuestion === question3) {
            forthQuestion();
        } else {
            endQuiz();
        }
    } );

    choice2.addEventListener("click", function () {
        scoreCalc(currentQuestion[1].choice2);
        if (currentQuestion === question1) {
            secondQuestion();
        } else if (currentQuestion === question2) {
            thirdQuestion();
        } else if (currentQuestion === question3) {
            forthQuestion();
        } else {
            endQuiz();
        }
    } );
    choice3.addEventListener("click", function (event) {
        scoreCalc(currentQuestion[1].choice3);
        if (currentQuestion === question1) {
            secondQuestion();
        } else if (currentQuestion === question2) {
            thirdQuestion();
        } else if (currentQuestion === question3) {
            forthQuestion();
        } else {
            endQuiz();
        }
    } );
    choice4.addEventListener("click", function () {
        scoreCalc(currentQuestion[1].choice4);
        if (currentQuestion === question1) {
            secondQuestion();
        } else if (currentQuestion === question2) {
            thirdQuestion();
        } else if (currentQuestion === question3) {
            forthQuestion();
        } else {
            endQuiz();
        }
    } );

        // 60 sec timer
let timeRemaining = 59;
function duduct10() {
    timeRemaining -= 10;
};
    function timer () {    
        var timeInterval = setInterval(function() {
                // stop timer after last question
            if (currentQuestion === finalScore) {
                clearInterval(timeInterval);
            };
            secondsLeft.textContent = timeRemaining;
            timeRemaining--;
            if (timeRemaining < 0) {
                clearInterval(timeInterval);
                alert("Your time ran out!");
                endQuiz();
            };
        }, 1000);
    };
});

let highTester = JSON.parse(localStorage.getItem("Tester"));
let highScore = JSON.parse(localStorage.getItem("Score"));
let viewHighScore = false;

scoresLink.addEventListener("click", function showHighScore(event) {
    event.preventDefault();
    if (viewHighScore === false) {
        viewHighScore = true;
        pastScores.style.display = "flex";
        if (highTester) {
            pastScores.style.display = "flex";
            document.querySelector(".pastScoresHighest").textContent =  highTester + " scored: " + highScore;
        } else {
            document.querySelector(".pastScoresHighest").textContent = "No high score yet!";
        };
    } else {
        viewHighScore = false;
        pastScores.style.display = "none";
    };
});