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
    question: "What's the name of Bellatrix' husband?",
    answers: ["Albert Lestrange","Adolph Lestrange","Rodolphus Lestrange"],
    correctAnswer: "Rodolphus Lestrange"
  },
  {
    question: "What class did Neville end up teaching at Hogwarts?",
    answers: ["Muggle Studies","Herbology","Astronomy"],
    correctAnswer: "Herbology"
  },
  {
    question: "Which newspaper does Rita Skeeter work for?",
    answers: ["The Daily Prophet","The Quibler","New York Times"],
    correctAnswer: "The Daily Prophet"
  },
  {
    question: "Which Hogwarts house did Moaning Myrtle belong in?",
    answers: ["ryffindor","Slytherin","Ravenclaw"],
    correctAnswer: "Ravenclaw"
},
{
    question: "Which was not one of Voldemort's Horcruxes?",
    answers: ["Tom Riddles Diary","Helga's Diadem","Harry"],
    correctAnswer: "Helga's Diadem"
  }
]

function buildQuiz(){
  const output = []
var newQuestion = myQuestions[counter];
quizContainer.text(newQuestion.question)
oneButton.text(newQuestion.answers[0])
twoButton.text(newQuestion.answers[1])
threeButton.text(newQuestion.answers[2])
var currentQuestion = 0
for (var i = 0; i < myQuestions.length; i++) {
        var selection = myQuestions[i];


         if (selection.clicked) {


            var index = [i];
            if (i === myQuestions[currentQuestion].correctAnswer) {
                alert("That is correct");


            }


            if (i !== myQuestions[currentQuestion].correctAnswer) {
              alert("That is incorrect");


            }


            if (currentQuestion < myQuestions.length -1) {
                currentQuestion++;




            } else {
                alert('End of quiz');
            }
            break;
        }
    }
    return counter++;
    concole.log("hello")
  }

//   const output = [];



function nextQuestion(){

buildQuiz()
}
// function showCorrect1(){
// if (((this).text())===myQuestion.correctAnswer.text())
//
//  feedbackcontainer.text("Correct!")
//  else {
//    feedbackcontainer.text("Incorrect :(")
//  }
// }
//
//
nextButton.on('click', nextQuestion)
threeButton.on('click', right3)
twoButton.on('click', right2)
oneButton.on('click', right1)

function right1(){
  if(oneButton.text() === myQuestions[counter - 1].correctAnswer){
    alert("Correct!")
  } else {
    alert("Incorrect!")
  }
}
function right2(){
  if(twoButton.text() === myQuestions[counter - 1].correctAnswer){
    alert("Correct!")
  } else {
    alert("Incorrect!")
  }
}
function right3(){
  if(threeButton.text() === myQuestions[counter - 1].correctAnswer){
    alert("Correct!")
  } else {
    alert("Incorrect!")
  }
}
//
//
// // myQuestions.answers
//
// //create button function to display answer and why or why not
// //create questions to show on flashcard
