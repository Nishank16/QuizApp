
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does HTTP stand for?",
        a: "Hypertext Transfer Protocol",
        b: "Hypertext Transmission Protocol",
        c: "Hightext Transfer Protocol",
        d: "Hightext Transmission Protocol",
        correct: "a",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        a: "<script href='script.js'>",
        b: "<script name='script.js'>",
        c: "<script src='script.js'>",
        d: "<script file='script.js'>",
        correct: "c",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>",
        correct: "b",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "class",
        b: "style",
        c: "font",
        d: "styles",
        correct: "b",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body:color=black;",
        b: "{body:color=black;}",
        c: "body {color: black;}",
        d: "{body;color:black;}",
        correct: "c",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "// this is a comment",
        b: "/* this is a comment */",
        c: "// this is a comment //",
        d: "' this is a comment",
        correct: "b",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        correct: "d",
    },
    {
        question: "Which of the following is the correct way to create an array in JavaScript?",
        a: "var colors = 'red', 'green', 'blue'",
        b: "var colors = (1:'red', 2:'green', 3:'blue')",
        c: "var colors = ['red', 'green', 'blue']",
        d: "var colors = 1=('red'), 2=('green'), 3=('blue')",
        correct: "c",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        a: "interface",
        b: "throws",
        c: "program",
        d: "short",
        correct: "c",
    },
    {
        question: "Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: "IBM",
        correct: "a",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        a: "//",
        b: "\\",
        c: ":",
        d: "'",
        correct: "a",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onmouseclick",
        c: "onclick",
        d: "onmouseover",
        correct: "c",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        b: "var colors = (1:'red', 2:'green', 3:'blue')",
        c: "var colors = ['red', 'green', 'blue']",
        d: "var colors = 'red', 'green', 'blue'",
        correct: "c",
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        a: "reverse()",
        b: "shift()",
        c: "slice()",
        d: "some()",
        correct: "c",
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        a: "toLocaleLowerCase()",
        b: "toLowerCase()",
        c: "toString()",
        d: "substring()",
        correct: "b",
    },
    {
        question: "Which of the following function of Array object adds and/or removes elements from an array?",
        a: "toSource()",
        b: "sort()",
        c: "splice()",
        d: "unshift()",
        correct: "c",
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below? \n<p id='demo'>This is a demonstration.</p>",
        a: "document.getElementById('demo').innerHTML = 'Hello World!';",
        b: "document.getElement('p').innerHTML = 'Hello World!';",
        c: "document.getElementByName('p').innerHTML = 'Hello World!';",
        d: "#demo.innerHTML = 'Hello World!';",
        correct: "a",
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        a: "JavaScript is a lightweight, interpreted programming language.",
        b: "JavaScript is designed for creating network-centric applications.",
        c: "JavaScript is complementary to and integrated with Java.",
        d: "All of the above.",
        correct: "d",
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        a: "2names",
        b: "_first_and_last_names",
        c: "FirstAndLast",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        a: "changeOrder(order)",
        b: "order()",
        c: "sort()",
        d: "None of the above.",
        correct: "c",
    },
    {
        question: "What is the correct syntax for adding comments in HTML?",
        a: "//This is a comment",
        b: "<!--This is a comment-->",
        c: "'This is a comment",
        d: "None of the above",
        correct: "b",
    }
];



const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const resultEl = document.getElementById('result')

let currentQuiz = 0
let score = 0
let answersStatus = []

const selectedQuizData = getRandomQuestions(quizData, 5);

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    resultEl.innerText = ''

    const currentQuizData = selectedQuizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === selectedQuizData[currentQuiz].correct) {
            score++
            answersStatus.push({question: selectedQuizData[currentQuiz].question, correct: true})
            resultEl.innerText = 'Correct!'
        } else {
            answersStatus.push({question: selectedQuizData[currentQuiz].question, correct: false})
            resultEl.innerText = `Wrong! Correct answer is ${selectedQuizData[currentQuiz].correct.toUpperCase()}: ${selectedQuizData[currentQuiz][selectedQuizData[currentQuiz].correct]}`
        }

        currentQuiz++

        if(currentQuiz < selectedQuizData.length) {
            setTimeout(loadQuiz, 2000) // Wait for 2 seconds before loading the next question
        } else {
            setTimeout(showResults, 2000) // Wait for 2 seconds before showing the results
        }
    }
})

function showResults() {
    let resultHtml = `<h2>You answered ${score}/${selectedQuizData.length} questions correctly</h2>`
    resultHtml += '<ul>'
    answersStatus.forEach((answerStatus, index) => {
        resultHtml += `<li>Question ${index + 1}: ${answerStatus.question} - ${answerStatus.correct ? 'Correct' : 'Wrong'}</li>`
    })
    resultHtml += '</ul>'
    resultHtml += `<button onclick="location.reload()">Reload</button>`
    quiz.innerHTML = resultHtml
}

function getRandomQuestions(quizData, num) {
    const shuffled = quizData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
