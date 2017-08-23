const quizContainer = document.getElementById('quiz')
const resultContainer = document.getElementById('results')
const checkButton = document.getElementById('check answers')

function buildQuiz(){
  const output = [];
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        currentQuestion.answers[letter]
        answers.push(

        )
      }
    }
  )
}

function showResults(){}

buildQuiz()

submitButton.addEventListener('click', showResults)


const myQuestions = [
  {
    question: "What is Ambers favorite color?"
    answers: {
      A:"Blue",
      B:"Pink",
      C:"Orange"
  },
    correctAnswer: "C"
  },
  {
    question: "What does Amber like to drink in the morning?"
    answers: {
        A:"Coffee",
        B:"Tea",
        C:"Frappuccino"
      },
    correctAnswer: "B"
  },
  {
    question: "What does Amber have as her computers screen saver?"
    answers: {
        A:"A picture of a Spinx Cat",
        B:"A picture of her Family",
        C:"Amber Rose and Kanye West"
      },
    correctAnswer: "C"
  },
  {
    question: "What is Ambers last name?"
    answers: {
        A:"Johnson",
        B:"Kamara",
        C:"Coleman"
      },
    correctAnswer: "C"
},
{
    question: "Is Amber a DC Native?"
    answers: {
        A:"Yes"
        B:"No"
      },
    correctAnswer: "B"
  }
]


//create button function to display answer and why or why not
//create questions to show on flashcard 
