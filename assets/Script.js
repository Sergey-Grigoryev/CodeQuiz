var secondsLeft = document.querySelector(".secondsLeft");
var startQuizDiv = document.querySelector(".startQuizDiv");
var startQuizBtn = document.querySelector(".startQuizBtn");
var scoresLink = document.querySelector(".scoresLink");
var pastScores = document.querySelector(".pastScores");
var questions = document.querySelector(".questions");
var multiChoiceBtn = document.querySelector(".multiChoiceBtn");
var multiChoice = document.querySelector(".multiChoice");

// question objects
var question1 = [
    {question:"first question"}, 
    {choice1:"option 1", choice2:"option 2", choice3:"option 3"}, 
    {correct:"option 2"}];
var question2 = [
    {question:"Second question"}, 
    {choice1:"option 1", choice2:"option 2", choice3:"option 3"}, 
    {correct:"option 2"}];
var question3 = [
    {question:"Third question"}, 
    {choice1:"option 1", choice2:"option 2", choice3:"option 3"}, 
    {correct:"option 2"}];
// var quizQuestions = [];
// quizQuestions[0] = question1;
// quizQuestions[1] = question2;
// quizQuestions[2] = question3;
console.log(question1[0].question);

startQuizBtn.addEventListener("click", function startQuiz(event) {
    event.preventDefault();
    startQuizDiv.style.display = "none";

    // show the question
    questions.textContent = question1[0].question;
    
    // show the answer options in buttons
    multiChoice.style.display = "flex";

    function createOptionBtn(answerChoices) {
        let createBtn = document.createElement("button");
        createBtn.className = "multiChoiceBtn";
        createBtn.textContent = answerChoices;
        return createBtn;
    };
    multiChoiceBtn.textContent = question1[1].choice1; 
    multiChoice.appendChild(createOptionBtn(question1[1].choice2));
    multiChoice.appendChild(createOptionBtn(question1[1].choice3));

    


});
 

    // score counter
    var score = 0;
    function scoreCalc(question) {
        if (question.choice === question.correct) {
            score++;
            return score;
        } else {
        //   reduce time on timer  
        }
        console.log(score);
    };



        