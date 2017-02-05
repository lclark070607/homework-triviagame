function init() {
    let button = document.querySelector('#btnQuestion');
    button.addEventListener('click', getNewQuestion);

    // let submit = document.querySelector('submit');
    // submit.addEventListener('click', checkAnswer());
};


function getNewQuestion() {
    let request = new XMLHttpRequest();

    request.open('GET', "http://jservice.io/api/random");

    request.addEventListener('load', function () {

        let response = JSON.parse(request.responseText);
        let trivia = response[0];
        console.log(response[0].value);
        console.log(response[0].category.title);
        console.log(response[0].question);

        showQuestion(trivia);
    });

    request.send();
}


function showQuestion(trivia) {

    let question = document.createElement('li');
    question.textContent = "Question: " + question.question; 
    // let question = document.querySelector('#question');
    // question.textContent = question.question; 

    let points = document.createElement('li');
    points.textContent = "Points Value: " + points.value;

    let category = document.createElement('li');
    category.textContent = "Category: " + category.category; 

    let parent = document.querySelector('#question-list');
    parent.appendChild(question);
    parent.appendChild(points);
    parent.appendChild(category);

}

// function checkAnswer() {

//     let guess = document.querySelector('guess').value; 
//     if (guess === current.answer) {
//         score = score + current.points;
//         document.querySelector('#player-score').textContent = score;
//     }

// };


window.addEventListener('load', init);










