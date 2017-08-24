const quizContainer = $('#quiz')
// const resultContainer = $('#results')
const feedbackcontainer = $('#feedback')
const submitButton = $('#submit')
const nextButton = $('#next')
const answers = $('#answers')
let oneButton = $('#A')
let twoButton = $('#B')
let threeButton = $('#C')

var counter = 0 // use this to access the question
const rightAnswer = {
  display: "You are right "}
const myQuestions = [
  {
    question: "What is Ambers favorite color?",
    answers: ["Blue","Pink","Orange"],
    correctAnswer: "Orange"
  },
  {
    question: "What does Amber like to drink in the morning?",
    answers: ["Coffee","Tea","Frappuccino"],
    correctAnswer: "Tea"
  },
  {
    question: "What does Amber have as her computers screen saver?",
    answers: ["A picture of a Spinx Cat","A picture of her Family","Amber Rose and Kanye West"],
    correctAnswer: "Amber Rose and Kanye West"
  },
  {
    question: "What is Ambers last name?",
    answers: ["Coleman","Kamara","Kamara"],
    correctAnswer: "Coleman"
},
{
    question: "Is Amber a DC Native?",
    answers: ["Yes","possibly","No"],
    correctAnswer: "No"
  }
]
var currentQuestion = myQuestions[counter]
function buildQuiz(){
  const output = [];
  var newQuestion = myQuestions[Math.floor(myQuestions.length * Math.random())];
quizContainer.text(newQuestion.question)
oneButton.text(newQuestion.answers[0])
twoButton.text(newQuestion.answers[1])
threeButton.text(newQuestion.answers[2])


console.log($(this).text())
}

function showResults(){

}
function nextQuestion(){

buildQuiz()
}
function showCorrect1(){
if (((this).text())===myQuestion.correctAnswer.text())

 feedbackcontainer.text("Correct!")
 else {
   feedbackcontainer.text("Incorrect :(")
 }
}


nextButton.on('click', nextQuestion)
threeButton.on('click', showCorrect1)
twoButton.on('click', showCorrect1)
oneButton.on('click', showCorrect1)
submitButton.on('click', showResults())


// myQuestions.answers

//create button function to display answer and why or why not
//create questions to show on flashcard
