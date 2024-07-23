const answers = {
    q1: {
        correct: ['규소강판사용', '성층철심사용'],
        explanation: '히스테리시스손은 규소강판을 사용, 와류손은 성층철심을 사용하면 전기기기의 손실을 경감시킬 수 있다. (규 히 성 와).'
    },
    q2: {
        correct: ['정류자', '전기자', '계자'],
        explanation: '직류기를 구성하는 대표적인 3요소는 정류자, 전기자, 계자 (정 전 계)입니다.'
    }
    // 다른 문제들
};

function checkAnswer(questionNumber) {
    const questionKey = `q${questionNumber}`;
    const feedbackDiv = document.getElementById(`feedback${questionNumber}`);

    let correct = true;
    let userAnswers = [];
    if (questionNumber === 1) {
        userAnswers.push(document.getElementById('answer1-1').value.replace(/\s+/g, ''));
        userAnswers.push(document.getElementById('answer1-2').value.replace(/\s+/g, ''));

        for (let i = 0; i < answers[questionKey].correct.length; i++) {
            if (userAnswers[i] !== answers[questionKey].correct[i]) {
                correct = false;
                break;
            }
        }
    } else if (questionNumber === 2) { // 2번 문제 처리
        userAnswers.push(document.getElementById('answer2-1').value.replace(/\s+/g, ''));
        userAnswers.push(document.getElementById('answer2-2').value.replace(/\s+/g, ''));
        userAnswers.push(document.getElementById('answer2-3').value.replace(/\s+/g, ''));

        for (let i = 0; i < answers[questionKey].correct.length; i++) {
            if (userAnswers[i] !== answers[questionKey].correct[i]) {
                correct = false;
                break;
            }
        }
    } else {
        // 다른 문제들에 대한 처리
    }

    if (correct) {
        feedbackDiv.innerHTML = `<span style="color: blue; font-weight: bold;">정답입니다!</span><br><span style="color: black;">해설: ${answers[questionKey].explanation}</span>`;
        feedbackDiv.style.color = 'green';
    } else {
        feedbackDiv.innerHTML = `<span style="color: red; font-weight: bold;">틀렸습니다. 다시 생각해보세요.</span><br><span style="color: black;">해설: ${answers[questionKey].explanation}</span>`;
        feedbackDiv.style.color = 'red';
    }
}

// 초기화 및 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    // 초기화 코드들
});
