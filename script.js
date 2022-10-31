var startButton = document.getElementById("start");
var timerEl = document.getElementById("timer");
var startQuiz = document.getElementsByClassName("container");
var scoreBoard = document.querySelector("#scoreBoard");
var userAnswer = '';

var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");

var score = localStorage.getItem("score");
//scoreBoard.textContent = score;

var timeLeft = 60;
var count = 0;




startButton.addEventListener("click", function () {
    startQuiz[0].style.display = "none";
    quiz();

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // finalScore();
        }
    }, 1000);
}, { once: true })


function quiz() {
    startQuiz[1].style.display = "block";

    document.querySelector('.question').textContent = quizQuestion[count].question;
    document.querySelector('#a').textContent = quizQuestion[count].answers.A;
    document.querySelector('#b').textContent = quizQuestion[count].answers.B;
    document.querySelector('#c').textContent = quizQuestion[count].answers.C;
    document.querySelector('#d').textContent = quizQuestion[count].answers.D;

    aButton.addEventListener("click", function(){
        userAnswer = quizQuestion[count].answers.A;
    })

    bButton.addEventListener("click", function(){
        userAnswer = quizQuestion[count].answers.B;
    })

    cButton.addEventListener("click", function(){
        userAnswer = quizQuestion[count].answers.C;
    })

    dButton.addEventListener("click", function(){
        userAnswer = quizQuestion[count].answers.D;
    })

    if (userAnswer == quizQuestion[count].correctAnswer){
        count++;
        timeLeft -= 5;
    }else{
        score++;
        scoreBoard.textContent = score;
        localStorage.setItem("score", score);
        count++;
    }
}

var quizQuestion = [
    {
        question: "What is JavaScript?",
        answers: {
            A: 'A new drink at Starbucks.',
            B: 'A client-side scripting language.',
            C: 'A new mobile app.',
            D: 'A theory in computational science.',
        },
        correctAnswer: 'B'
    },
    {
        question: "Which item is not a JavaScript data type?",
        answers: {
            A: 'Number',
            B: 'String',
            C: '1/0',
            D: 'Boolean',
        },
        correctAnswer: 'C'
    },
    {
        question: "Which company developed JavaScript?",
        answers: {
            A: 'Oracle',
            B: 'Netscape',
            C: 'Google',
            D: 'Amazon',
        },
        correctAnswer: 'B'
    },
    {
        question: "What is 'this' keyword in JavaScript?",
        answers: {
            A: '"This" keyword refers to the object from where it was called',
            B: '"This" keyword refers to the array from where it was called',
            C: '"This" keyword refers to the program from where it was called',
            D: '"This" keyword refers to the website from where it was called',
        },
        correctAnswer: 'A'
    },
    {
        question: "Which items compares type and value for true?",
        answers: {
            A: '==',
            B: '!=',
            C: '===',
            D: '!==',
        },
        correctAnswer: 'C'
    },
    {
        question: "Which items compares type and value for false?",
        answers: {
            A: '==',
            B: '!=',
            C: '===',
            D: '!==',
        },
        correctAnswer: 'D'
    },
    {
        question: "Which items compares value for true?",
        answers: {
            A: '==',
            B: '!=',
            C: '===',
            D: '!==',
        },
        correctAnswer: 'A'
    },
    {
        question: "Which items compares value for false?",
        answers: {
            A: '==',
            B: '!=',
            C: '===',
            D: '!==',
        },
        correctAnswer: 'B'
    }
];



