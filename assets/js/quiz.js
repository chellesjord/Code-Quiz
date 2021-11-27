//create buttons with event listeners.
//add timer with countdown
const startButton = document.getElementById("start-btn")
const homeInfo = document.getElementById("home")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const alldoneContainerElement = document.getElementById("all-done-container")
const correctanswer = document.getElementById("correct")
const wronganswer = document.getElementById("wrong")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    homeInfo.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("ansbtn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    // setStatusClass(correctanswer, correct)
    // Array.from(answerButtonsElement.children).forEach(button => {
    //      setStatusClass(button, button.dataset.correct)
    // })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setNextQuestion()
    } else {
        questionContainerElement.classList.add("hide")
        alldoneContainerElement.classList.remove("hide")
    }
}

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         console.log("correct")
//         correctanswer.classList.remove("hide")
//     } else {
//         console.log("wrong")
//         wronganswer.classList.remove("hide")
//     }
// }

function clearStatusClass(element) {
    //need to add correct and remove tasks to wrtie the word correct or wrong on question
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "1. strings", correct: false },
            { text: "2. booleans", correct: true },
            { text: "3. alerts", correct: false },
            { text: "4. numbers", correct: false },
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            { text: "1. quotes", correct: false },
            { text: "2. curyl brackets", correct: false },
            { text: "3. parenthesis", correct: true },
            { text: "4. square brackets", correct: false },
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answers: [
            { text: "1. numbers and strings", correct: false },
            { text: "2. other arrays", correct: false },
            { text: "3. booleans", correct: false },
            { text: "4. all of the above", correct: true },
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "1. JavaScript", correct: false },
            { text: "2. terminal/bash", correct: false },
            { text: "3. for loops", correct: true },
            { text: "4. console.log", correct: false },
        ]
    }
]
