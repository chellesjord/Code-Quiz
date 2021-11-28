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
const intials = document.getElementById("initials")
const saveScoreBtn = document.getElementById("saveScoreBtn")
const finalScore = document.getElementById("finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
const MAX_HIGH_SCORES = 5
const startingTime = 100
const countdownElement = document.getElementById("timer")

let shuffledQuestions, currentQuestionIndex
let time = startingTime

startButton.addEventListener('click', startGame)

//countdown timer
var Timer = setInterval(updateTimer, 1000)

function updateTimer() {
    countdownElement.innerHTML = time
    if (time > 0) {
        countdownElement.innerText = time
        time--;
    }
    else {
        countdownElement.innerText = 0
    }
}

function startGame() {
    homeInfo.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    Timer
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
    if (correct) {
        //correct appears then dissapears again
        correctanswer.classList.remove("hide")
        setTimeout(
            function clearStatusClass() {
                correctanswer.classList.add("hide")
            }, 500)
    }
    else {
        //wrong appears then dissapears again
        wronganswer.classList.remove("hide")
        time = time - 10
        setTimeout(
            function clearStatusClass() {
                wronganswer.classList.add("hide")
            }, 500)
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setNextQuestion()
    } else {
        //stop time and go to All Done screen.
        localStorage.setItem("mostRecentScore", time)
        clearInterval(Timer)
        console.log(mostRecentScore)
        questionContainerElement.classList.add("hide")
        alldoneContainerElement.classList.remove("hide")
    }
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

localStorage.getItem = mostRecentScore
finalScore.innerText = "Your final score is " + mostRecentScore

intials.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !intials.value
})

saveHighScore = e => {
    e.preventDefault()
    const score = {
        score: mostRecentScore,
        name: intials.value,
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))
    console.log(highScores)
    window.location.assign("./highscores.html")
}




