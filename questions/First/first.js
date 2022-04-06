const questionOneAnswers = {
    'id-a': '120',
    'id-b': '12',
    'id-c': '30',
    'id-d': '72'
};


const answerOneA = document.getElementById('question-one-id-a');
const answerOneB = document.getElementById('question-one-id-b');
const answerOneC = document.getElementById('question-one-id-c');
const answerOneD = document.getElementById('question-one-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('firstSum');
const choiceA = document.querySelector('.choice-a');
const choiceB = document.querySelector('.choice-b');
const choiceC = document.querySelector('.choice-c');
const choiceD = document.querySelector('.choice-d');
const answerA = document.getElementById('answer-a')
const answerB = document.getElementById('answer-b')
const answerC = document.getElementById('answer-c')
const answerD = document.getElementById('answer-d')
const removetheAnswer = document.getElementById('removeAnswer');
const removedAnswer = true;





answerOneA.addEventListener('click', answerOne);
answerOneB.addEventListener('click', answerTwo);
answerOneC.addEventListener('click', answerThree);
answerOneD.addEventListener('click', answerFour);
removetheAnswer.addEventListener('click', removeAnswer);

function answerOne() {

    if (questionOneAnswers["id-a"] === '120') {
        answerOneB.removeEventListener('click', answerTwo);
        answerOneC.removeEventListener('click', answerThree);
        answerOneD.removeEventListener('click', answerFour);
        removetheAnswer.removeEventListener('click', removeAnswer);
        answerOneA.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
    }
    setTimeout(function () {
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '100$';

    });

    setTimeout(function () {
        location.href = '../Second/secondQuestion.html';
    }, 2000);
};



function answerTwo() {

    if (questionOneAnswers["id-b"] === '12') {
        answerOneA.removeEventListener('click', answerOne);
        answerOneC.removeEventListener('click', answerThree);
        answerOneD.removeEventListener('click', answerFour);
        removetheAnswer.removeEventListener('click', removeAnswer);
        answerOneB.style.background = 'red';
        choiceB.style.color = 'white';
    }

    setTimeout(function () {
        answerOneA.style.backgroundColor = 'green';
    }, 1000)

    tryAgain();
}

function answerThree() {
    if (questionOneAnswers["id-c"] === '30') {
        answerOneA.removeEventListener('click', answerOne);
        answerOneB.removeEventListener('click', answerTwo);
        answerOneD.removeEventListener('click', answerFour);
        removetheAnswer.removeEventListener('click', removeAnswer);
        answerOneC.style.background = 'red';
        choiceC.style.color = 'white';
    }

    setTimeout(function () {
        answerOneA.style.backgroundColor = 'green';
    }, 1000)

    tryAgain();
}


function answerFour() {
    if (questionOneAnswers['id-d'] === '72') {
        answerOneA.removeEventListener('click', answerOne);
        answerOneB.removeEventListener('click', answerTwo);
        answerOneC.removeEventListener('click', answerThree);
        removetheAnswer.removeEventListener('click', removeAnswer);
        answerOneD.style.background = 'red';
        choiceD.style.color = 'white';
    }
    setTimeout(function () {
        answerOneA.style.backgroundColor = 'green';
    }, 1000)

    tryAgain();
}

function removeAnswer() {
    removetheAnswer.disabled = true;
    answerB.textContent = '';
    answerD.textContent = '';
    answerOneB.removeEventListener('click', answerTwo);
    answerOneD.removeEventListener('click', answerFour);
    removetheAnswer.style.opacity = '0.5';
}

function tryAgain() {
    answerOneA.removeEventListener('click', answerOne);
    answerOneD.removeEventListener('click', answerFour);
    answerOneC.removeEventListener('click', answerThree);
    answerOneB.removeEventListener('click', answerTwo);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('theCash').appendChild(button);
    button.onclick = () => {
        location.href = '../../../../../questions/First/index.html';


    }

}