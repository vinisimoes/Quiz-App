const quizData = [
    {
        question: 'What is the symbol for potassium?',
        a: 'K',
        b: 'P',
        c: 'Pt',
        d: 'L',
        correct: 'a'
    },
    {
        question: 'Which planet is the hottest in the solar system?',
        a: 'Mercury',
        b: 'Mars',
        c: 'Venus',
        d: 'Earth',
        correct: 'c'
    },
    {
        question: 'Who discovered penicillin?',
        a: 'Albert Einstein',
        b: 'Alexander Fleming',
        c: 'Marie Curie',
        d: 'Isaac Newton',
        correct: 'b'
    }
];
const question = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    clearSelected();

    const currentQuestion = quizData[currentQuestionIndex];

    question.innerHTML = currentQuestion.question;
    a_text.innerHTML = currentQuestion.a;
    b_text.innerHTML = currentQuestion.b;
    c_text.innerHTML = currentQuestion.c;
    d_text.innerHTML = currentQuestion.d;    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function clearSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;
        if(currentQuestionIndex < quizData.length) {
            loadQuiz();
        } 
        else {
            quiz.innerHTML = `<h2>You got ${score}/${quizData.length} correct answers!</h2>`;
        }
    }
});