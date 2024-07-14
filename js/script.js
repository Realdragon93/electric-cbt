const answers = {
    q1: { correct: '2', explanation: '회전 자계의 회전 방향과 동일하게 회전합니다.' },
    q2: { correct: '4', explanation: '유도전동기는 3상 교류에 의해 쉽게 회전자계를 얻을 수 있어 널리 사용됩니다.' },
    q3: { correct: '3', explanation: '유도전동기의 슬립은 0과 1 사이의 값을 가집니다.' },
    q4: { correct: '1', explanation: '유도전동기의 슬립을 나타내는 식은 \\( s = \\frac{N_s - N}{N_s} \\) 입니다.' },
    q5: { correct: '2', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q6: { correct: '1', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q7: { correct: '3', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q8: { correct: '2', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q9: { correct: '1', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q10: { correct: '1', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q11: { correct: '4', explanation: '동기속도는 900rpm이므로 슬립은 5가 됩니다.' },
    q12: { correct: '1', explanation: '부하를 증가시키면 전류가 증가한다. 속도는 감소. 속도가 감소하면 슬립은 증가. 슬립이 증가하면 2차 유도기전력이 증가' },
    q13: { correct: '2', explanation: '부하를 증가시키면 전류가 증가한다. 속도는 감소. 속도가 감소하면 슬립은 증가. 슬립이 증가하면 2차 유도기전력이 증가' },
    q14: { correct: '3', explanation: '문제 14번의 정답은 3번입니다. 설명을 여기에 입력하세요.' },
    q15: { correct: '4', explanation: '문제 15번의 정답은 4번입니다. 설명을 여기에 입력하세요.' },
    q16: { correct: '1', explanation: '문제 16번의 정답은 1번입니다. 설명을 여기에 입력하세요.' },
    q17: { correct: '2', explanation: '문제 17번의 정답은 2번입니다. 설명을 여기에 입력하세요.' },
    q18: { correct: '3', explanation: '문제 18번의 정답은 3번입니다. 설명을 여기에 입력하세요.' },
    q19: { correct: '4', explanation: '문제 19번의 정답은 4번입니다. 설명을 여기에 입력하세요.' },
    q20: { correct: '1', explanation: '문제 20번의 정답은 1번입니다. 설명을 여기에 입력하세요.' }
};

let score = 0;

function checkAnswer(questionNumber) {
    const questionKey = `q${questionNumber}`;
    const form = document.getElementById('quiz-form');
    const selected = form.querySelector(`input[name="${questionKey}"]:checked`);
    const feedbackDiv = document.getElementById(`feedback${questionNumber}`);

    if (!selected) {
        feedbackDiv.innerHTML = '답을 선택하세요.';
        feedbackDiv.style.color = 'red';
        return;
    }

    if (selected.value === answers[questionKey].correct) {
        feedbackDiv.innerHTML = `<span style="color: blue; font-weight: bold;">정답입니다!</span><br><span style="color: black;">해설: ${answers[questionKey].explanation}</span>`;
        feedbackDiv.style.color = 'green';
        MathJax.typeset(); // 수식을 렌더링합니다.
        score++;
    } else {
        feedbackDiv.innerHTML = '틀렸습니다. 다시 생각해보세요.';
        feedbackDiv.style.color = 'red';
    }
}


function showNextQuestion(currentQuestion) {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    const nextQuestionDiv = document.getElementById(`question${currentQuestion + 1}`);

    if (nextQuestionDiv) {
        currentQuestionDiv.style.display = 'none';
        nextQuestionDiv.style.display = 'block';
    } else {
        const finalSubmitButton = document.getElementById('final-submit');
        finalSubmitButton.style.display = 'block';
    }
    highlightCurrentQuestion(currentQuestion + 1);
}

function finalSubmit() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `최종 제출 완료! 당신의 점수는 ${score} / ${Object.keys(answers).length} 입니다.`;
    resultDiv.style.display = 'block';

    // 모든 문제와 버튼을 숨깁니다.
    const questions = document.getElementsByClassName('question');
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }
    const finalSubmitButton = document.getElementById('final-submit');
    finalSubmitButton.style.display = 'none';
}

function selectAnswer(questionNumber, answer) {
    const radios = document.getElementsByName(`q${questionNumber}`);
    radios.forEach(radio => {
        if (radio.value == answer) {
            radio.checked = true;
        }
    });
    // Change color of selected answer
    for (let j = 1; j <= 4; j++) {
        const cell = document.getElementById(`answer${questionNumber}-${j}`);
        const span = cell.querySelector('span');
        if (j === answer) {
            span.classList.add('selected');
        } else {
            span.classList.remove('selected');
        }
    }
}

function highlightCurrentQuestion(questionNumber) {
    const rows = document.querySelectorAll('.answer-sheet tr');
    rows.forEach(row => row.classList.remove('selected'));
    document.getElementById(`answer${questionNumber}`).classList.add('selected');
}

// Initialize the first question
document.addEventListener('DOMContentLoaded', () => {
    showQuestion(1);
    highlightCurrentQuestion(1);
});

function showQuestion(questionNumber) {
    for (let i = 1; i <= 20; i++) {
        document.getElementById(`question${i}`).style.display = (i === questionNumber) ? 'block' : 'none';
    }
    highlightCurrentQuestion(questionNumber);
}

function prevQuestion() {
    const currentQuestion = parseInt(document.querySelector('.question:not([style*="display: none"])').id.replace('question', ''), 10);
    if (currentQuestion > 1) {
        showQuestion(currentQuestion - 1);
    } else {
        alert('첫번째 문제입니다.');
    }
}

function nextQuestion() {
    const currentQuestion = parseInt(document.querySelector('.question:not([style*="display: none"])').id.replace('question', ''), 10);
    if (currentQuestion < 20) {
        showQuestion(currentQuestion + 1);
    } else {
        alert('마지막 문제입니다.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(1);
    highlightCurrentQuestion(1);
});
