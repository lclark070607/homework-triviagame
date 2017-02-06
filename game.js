function init() {
    let button = document.querySelector('#btnQuestion');
    button.addEventListener('click', getNewQuestion);

    let button2 = document.querySelector('#btnGuess');
    button2.addEventListener('click', checkAnswer);

};

let trivia = null;

function getNewQuestion() {
    let request = new XMLHttpRequest();

    request.open('GET', "http://jservice.io/api/random");

    request.addEventListener('load', function () {

        let response = JSON.parse(request.responseText);
        trivia = response[0];
        console.log(response[0].value);
        console.log(response[0].category.title);
        console.log(response[0].question);
        console.log(response[0].answer)

        showQuestion(trivia);

    });

    request.send();
}


function showQuestion(trivia) {

    let question = document.createElement('li');
    question.textContent = "Question: " + trivia.question;


    let points = document.createElement('li');
    points.textContent = "Points Value: " + trivia.value;

    let category = document.createElement('li');
    category.textContent = "Category: " + trivia.category.title;

    let parent = document.querySelector('#question-list');
    parent.appendChild(question);
    parent.appendChild(points);
    parent.appendChild(category);

}

function checkAnswer() {

    let score = 0;
    let guess = document.querySelector('#guess').value;
    if (guess === trivia.answer) {
        score = score + trivia.value;
        document.querySelector('#player-score').textContent = score;
    }
};


window.addEventListener('load', init);










