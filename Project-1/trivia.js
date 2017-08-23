const quizContainer = $('#quiz')
// const resultContainer = $('#results')
const submitButton = $('#submit')
const nextButton = $('#next')
let answer1 = $('#A')
let answer2 = $('#B')
let answer3 = $('#C')

var counter = 0 // use this to access the question
const rightAnswer = {
  display: "You are right "}
const myQuestions = [
  {
    question: "What is Ambers favorite color?",
    answers: {
      A:"Blue",
      B:"Pink",
      C:"Orange"
  },
    correctAnswer: "Orange"
  },
  {
    question: "What does Amber like to drink in the morning?",
    answers: {
        A:"Coffee",
        B:"Tea",
        C:"Frappuccino"
      },
    correctAnswer: "Tea"
  },
  {
    question: "What does Amber have as her computers screen saver?",
    answers: {
        A:"A picture of a Spinx Cat",
        B:"A picture of her Family",
        C:"Amber Rose and Kanye West"
      },
    correctAnswer: "Amber Rose and Kanye West"
  },
  {
    question: "What is Ambers last name?",
    answers: {
        A:"Coleman",
        B:"Kamara",
        C:"Kamara"
      },
    correctAnswer: "Coleman"
},
{
    question: "Is Amber a DC Native?",
    answers: {
        A:"Yes",
        B:"possibly",
        C:"No"
      },
    correctAnswer: "No"
  }
]

var currentQuestion = myQuestions[counter]
function buildQuiz(){
  const output = [];
  var newQuestion = myQuestions[Math.floor(myQuestions.length * Math.random())];

quizContainer.text(newQuestion.question)
answer1.text(newQuestion.answers.A)
answer2.text(newQuestion.answers.B)
answer3.text(newQuestion.answers.C)

console.log($(this).text())
}

function showResults(){

}
function nextQuestion(){

buildQuiz()
}
function showCorrect(){
if (currentQuestion.answers.A===currentQuestion.correctAnswer)
 quizContainer.text(rightAnswer.display)
 
}

nextButton.on('click', nextQuestion)

answer1.on('click', showCorrect)
// submitButton.on('click', showResults())


// myQuestions.answers

//create button function to display answer and why or why not
//create questions to show on flashcard
