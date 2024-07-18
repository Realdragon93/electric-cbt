const answers = {
    q1: { 
        correct: '1', 
        explanation: `
        권수비 공식 \\(a = \\frac{N_1}{N_2} = \\frac{V_1}{V_2} = \\frac{I_2}{I_1} = \\sqrt{\\frac{Z_1}{Z_2}}\\) <br>
        문제에서 권수비 \\(a = \\frac{5}{1} = 5\\) <br>
        권수비 공식을 이용하면, \\(V_2 = \\frac{100}{5} = 20 [V]\\), \\(I_2 = \\frac{20}{5} = 4 [A]\\) <br>
        따라서, \\(I_1 = \\frac{4}{5} = 0.8 [A]\\) 정답은 ①이다.
        `
    },
    q2: { 
        correct: '2', 
        explanation: `
        2차측 전력을 우선 구해본다. <br>
        \\(P_2 = VI \\cos \\theta = 220 \\times 15 \\times 1 = 3300[W]\\)이다. <br>
        변압기에서 1차측 전력 = 2차측 전력 즉, \\(P_1 = P_2\\)이다. <br>
        따라서, \\(P_1 = 3300[W]\\) 정답은 ②이다.
        `
    },
    q3: { 
        correct: '4', 
        explanation: `
        우선 알아야 할 지식은 전등 부하는 역률 \\( \\cos \\theta \\)이 1이다. <br>
        변압기에서 입력과 출력 관계는 1차측(\\( P_1 \\)) = 2차측(\\( P_2 \\)) 이다. <br>
        2차측 전압을 구한다. \\( V_2 = \\frac{3300}{40} = 825 [V] \\) <br>
        2차측 출력을 구한다. \\( P_2 = 1650 \\times 20 \\times 1 = 1650 [W] \\) <br>
        따라서, \\( P_1 = P_2 = 1650 [W] \\) 정답은 ④이다.
        `
    },
    q4: { 
        correct: '3', 
        explanation: `
        권수비 공식 \\(a = \\frac{N_1}{N_2} = \\frac{V_1}{V_2} = \\frac{I_2}{I_1} = \\sqrt{\\frac{Z_1}{Z_2}}\\) <br>
        저항 값으로 권수비를 구한다. \\(a^2 = \\frac{8000}{16}\\) <br>
        권수비로 2차측 권수를 구한다. \\(N_2 = \\frac{1500}{\\sqrt{\\frac{8000}{16}}} = 67\\) <br>
        따라서, 정답은 ③이다.
        `
    },
    q5: { 
        correct: '3', 
        explanation: `
        권수비 공식 \\(a = \\frac{N_1}{N_2} = \\frac{V_1}{V_2} = \\frac{I_2}{I_1} = \\sqrt{\\frac{Z_1}{Z_2}} = \\frac{E_1}{E_2}\\) <br>
        \\(a = \\frac{E_1}{E_2} = \\frac{2000}{100} = 20\\) <br>
        따라서, 정답은 ③이다.
        `
    },
    q6: {  // qX는 해당 질문의 번호로 대체해야 합니다.
        correct: '4',
        explanation: `
        변압기 1, 2차 권선 간의 절연에 사용되는 것은 '크래프트지'이다. <br>
        따라서 정답은 ④이다.
        <img src="images 변압기/정답 6.png" alt="변압기 이미지" style="display:block; margin:auto; width:30%; height:auto;"><br>
        `
    }, 
    q7: { 
        correct: '2', 
        explanation: `
        주상 변압기의 고압측에 몇 개의 탭을 내놓는 이유는 수전점의 전압 조정을 위함이다. <br>
        탭을 내면 권수비가 조정되기 때문이다. <br>
        따라서, 정답은 ②이다.
        `
    },
    q8: { 
        correct: '1', 
        explanation: `
        전압과 주파수가 포함되는 유기기전력 공식을 떠올려야 한다. <br>
        유기기전력 \\( E = 4.44 f N \\phi [V]\\) <br>
        자속밀도 \\( B = \\frac{\\phi}{S} \\), \\( \\phi = BS \\) <br>
        자속밀도를 포함하여 공식을 재정리하면, \\( E = 4.44 f N BS \\) <br>
        주파수와 자속밀도는 반비례관계이다. <br>
        따라서, 주파수가 60 주파수가 60 \\( \\rightarrow \\) 50 이라면, 자속밀도는 50 \\( \\rightarrow \\) 60가 된다. <br>
        자속밀도는 주파수 60[Hz]일 때의 \\( \\frac{6}{5} \\)배가 된다. 정답은 ①이다.
        `
    },
    q9: { 
        correct: '1', 
        explanation: `
        전압과 자속밀도가 포함되는 유기기전력 공식을 떠올려야 한다. <br>
        유기기전력 \\( E_1 = 4.44 f N_1 \\phi = 4.44 f N_1 B S [V]\\) <br>
        \\( E_1 = 4.44 \\times 60 \\times 100 \\times 1.5 \\times 0.095 = 3796 [V] \\) <br>
        따라서, 정답은 ①이다.
        `
    },
    q10: { 
        correct: '2', 
        explanation: `
        전압과 주파수가 포함되는 유기기전력 공식을 떠올려야 한다. <br>
        자속 \\( \\phi = \\frac{4.44 f N}{E} [Wb]\\) <br>
        \\( \\phi = \\frac{5900}{4.44 \\times 60 \\times 2000} = 0.01107 = 11.07 \\times 10^{-3} \\) <br>
        따라서, 정답은 ②이다.
        `
    },
    q11: { 
        correct: '2', 
        explanation: `
        누설 리액턴스는 \\( X_L = \\omega L = 2 \\pi f L \\)이다. <br>
        전자기학 공식에서 리액턴스 \\( L = \\frac{\\mu S N^2}{l} \\)로 표현된다. <br>
        따라서, 각 공식의 관계를 살펴보면 \\( X_L \\propto L \\propto N^2 \\)이 된다. <br>
        정답은 ②이다.
        `
    },
    q12: { 
        correct: '1', 
        explanation: `
        공식 간의 관계를 살펴보면 된다. <br>
        [권수와 여자 전류 관계] <br>
        \\( X_L = \\omega L = 2 \\pi f L \\), \\( L = \\frac{\\mu S N^2}{l} \\), \\( X_L \\propto L \\propto N^2 \\) <br>
        \\( I = \\frac{E}{X_L} \\) 관계를 생각해보면, \\( I_f \\propto \\frac{1}{N^2} \\)이다. <br>
        [권수와 자속과의 관계] <br>
        \\( E = 4.44 f N \\phi \\) <br>
        \\( \\phi \\propto \\frac{1}{N} \\)이다. <br>
        따라서, 권수가 2배 증가하면, 여자전류 \\( I_f \\)는 \\( \\frac{1}{4} \\)로 줄고, 자속 \\( \\phi \\)는 \\( \\frac{1}{2} \\) 감소한다. <br>
        정답은 ①이다.
        `
    },
    q13: { 
        correct: '4', 
        explanation: `
        변압기는 전자유도 작용에 의해 만들어진다.
        `
    },
    q14: { 
        correct: '4', 
        explanation: `
        <img src="images 변압기/정답 14-1.png" alt="변압기 이미지" style="display:block; margin:auto; width:50%; height:auto;"><br>
        <img src="images 변압기/정답 14-2.png" alt="변압기 이미지" style="display:block; margin:auto; width:30%; height:auto;"><br>
        무부하의 경우 변압기의 회로는 그림 1번에서 그림 2번으로 바뀌게 된다. <br>
        무부하의 여자전류(\\( I_o \\))는 철손 전류(철손 \\( P_i \\) 발생) + 자화 전류(자속 \\( \\phi \\) 발생) <br>
        무부하 여자전류의 공식은 \\( I_o = \\sqrt{I_i^2 + I_\\phi^2} \\)이다. <br>
        따라서, 부하에 관계없이(=무부하) 자속을 만드는 것은 자화전류 정답은 ④이다.
        `
    }
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
        feedbackDiv.innerHTML = `<span style="color: blue; font-weight: bold;">정답입니다!</span><br><span style="color: black;">해설: ${answers[questionKey].explanation.replace(/\n/g, '<br>')}</span>`;
        feedbackDiv.style.color = 'green';
        score++;
    } else {
        feedbackDiv.innerHTML = `<span style="color: red; font-weight: bold;">틀렸습니다. 다시 생각해보세요.</span><br><span style="color: black;">해설: ${answers[questionKey].explanation.replace(/\n/g, '<br>')}</span>`;
        feedbackDiv.style.color = 'red';
    }
    MathJax.typeset(); // 수식을 렌더링합니다.
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
            cell.classList.add('selected');
            span.classList.add('selected');
        } else {
            cell.classList.remove('selected');
            span.classList.remove('selected');
        }
    }
}

// Attach event listeners to radio buttons for real-time updates
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const radioButtons = quizForm.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('click', () => {
            const questionNumber = radio.name.replace('q', '');
            selectAnswer(parseInt(questionNumber), parseInt(radio.value));
        });
    });
    
    showQuestion(1);
    highlightCurrentQuestion(1);
});

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
    for (let i = 1; i <= 82; i++) {  // 총 문제 수를 82으로 설정
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
    if (currentQuestion < 82) {  // 총 문제 수를 82으로 설정
        showQuestion(currentQuestion + 1);
    } else {
        alert('마지막 문제입니다.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(1);
    highlightCurrentQuestion(1);
});