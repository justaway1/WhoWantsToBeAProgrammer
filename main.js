const questionOneAnswers = {
    'id-a': 'Stan',
    'id-b': 'Brittany',
    'id-c': 'Steven',
    'id-d': 'Lebron'
};


const oneHundred = document.getElementById('oneHundred');

const answerOneA = document.getElementById('question-one-id-a');
const answerOneB = document.getElementById('question-one-id-b');
const answerOneC = document.getElementById('question-one-id-c');
const answerOneD = document.getElementById('question-one-id-d');
const showImageMe = document.getElementById('showImage');
const thequestion = document.getElementById('question-one');





answerOneA.addEventListener('click', () => {
    if (questionOneAnswers["id-a"] === 'Stan') {
        answerOneA.style.background = 'green';
        oneHundred.style.backgroundColor = 'red';
    }

    setTimeout(function () {
        thequestion.style.display = 'none';
        let img = document.createElement('img');
        img.src = './images/ruby.png';
        showImageMe.appendChild(img);
        let input = document.createElement('input');
        input.type = 'button';
        input.value = 'Next Question';
        document.getElementById('showImage').appendChild(input);
        input.onclick = () => {
            location.href = 'second.html';
        }

    }, 2000);


})
answerOneB.addEventListener('click', () => {
    if (questionOneAnswers["id-b"] === 'Brittany') {
        answerOneB.style.background = 'red';
        setInterval(() => {
            answerOneA.style.background = 'green';

        }, 1500);
    }
})
answerOneC.addEventListener('click', () => {
    if (questionOneAnswers["id-c"] === 'Steven') {
        answerOneC.style.background = 'red';
        setInterval(() => {
            answerOneA.style.background = 'green';

        }, 1500);
    }
})
answerOneD.addEventListener('click', () => {
    if (questionOneAnswers["id-d"] === 'Lebron') {
        answerOneD.style.background = 'red';
        answerOneC.style.background = 'red';
        answerOneB.style.background = 'red';
        setInterval(() => {
            answerOneA.style.background = 'green';

        }, 1500);
    }
})
