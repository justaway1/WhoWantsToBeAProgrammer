const questionTwoAnswers = {
    'id-a': 'ecma2016',
    'id-b': 'ecma2017',
    'id-c': 'ecma2015',
    'id-d': 'ecma2013'
};

// The Constant variables
const answerOneA = document.getElementById('question-two-id-a');
const answerOneB = document.getElementById('question-two-id-b');
const answerOneC = document.getElementById('question-two-id-c');
const answerOneD = document.getElementById('question-two-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('secondSum');
const choiceA = document.querySelector('.choice-a');
const choiceB = document.querySelector('.choice-b');
const choiceC = document.querySelector('.choice-c');
const choiceD = document.querySelector('.choice-d');
const answerA = document.getElementById('answer-a')
const answerB = document.getElementById('answer-b')
const answerC = document.getElementById('answer-c')
const answerD = document.getElementById('answer-d')
const removetheAnswer = document.getElementById('removeAnswer');
let removedAnswer = true;




// The Event Listeners of the variables
answerOneA.addEventListener('click', answerOne);
answerOneB.addEventListener('click', answerTwo);
answerOneC.addEventListener('click', answerThree);
answerOneD.addEventListener('click', answerFour);
removetheAnswer.addEventListener('click', removeAnswer);


// All the  functions
function answerThree() {

    if (questionTwoAnswers["id-c"] === 'ecma2015') {
        answerOneB.removeEventListener('click', answerTwo);
        answerOneA.removeEventListener('click', answerOne);
        answerOneD.removeEventListener('click', answerFour);
        answerOneC.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
    }
    setTimeout(function () {
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '200$';

    });

    setTimeout(function () {
        location.href = '../Third/index.html';
    }, 2000);
};



function answerTwo() {

    if (questionTwoAnswers["id-b"] === 'ecma2017') {
        answerOneA.removeEventListener('click', answerOne);
        answerOneC.removeEventListener('click', answerThree);
        answerOneD.removeEventListener('click', answerFour);
        answerOneB.style.background = 'red';
        choiceB.style.color = 'white';
    }

    setTimeout(function () {
        answerOneC.style.backgroundColor = 'green';
    }, 1000)

    tryAgain()
}

function answerOne() {
    if (questionTwoAnswers["id-a"] === 'ecma2016') {
        answerOneC.removeEventListener('click', answerThree);
        answerOneB.removeEventListener('click', answerTwo);
        answerOneD.removeEventListener('click', answerFour);
        answerOneA.style.background = 'red';
        choiceA.style.color = 'white';
    }

    setTimeout(function () {
        answerOneC.style.backgroundColor = 'green';
    }, 1000)

    tryAgain()
}


function answerFour() {
    if (questionTwoAnswers['id-d'] === 'ecma2013') {
        answerOneA.removeEventListener('click', answerOne);
        answerOneB.removeEventListener('click', answerTwo);
        answerOneC.removeEventListener('click', answerThree);
        answerOneD.style.background = 'red';
        choiceD.style.color = 'white';
    }
    setTimeout(function () {
        answerOneC.style.backgroundColor = 'green';
    }, 1000)

    tryAgain()
}

// The Joker of Remove Answers
function removeAnswer() {
    answerB.textContent = '';
    answerA.textContent = '';
    answerOneB.removeEventListener('click', answerTwo);
    answerOneA.removeEventListener('click', answerOne);
    removetheAnswer.style.opacity = '0.5';
    removetheAnswer.disabled = true;
}

// Creating button of Trying Again
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
        location.href = './questions/First/index.html';


    }

}
