window.addEventListener('load', function () {
    getNewQuestion();
});


function getNewQuestion() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
    request.addEventListener('load', function () {
        let response = JSON.parse(request.responseText);
        let question = response[0]

        console.log(response[0].value);
        console.log(response[0].category.title);
        console.log(response[0].question);

            showQuestion(question);
        
    });
    request.send();
}



function showQuestion(question) {
    let child = document.createElement('li');
    let parent = document.querySelector('#question-list ul');
    let template = document.querySelector('#question-template');


    child.innerHTML = Mustache.render(template.innerHTML, {
        question: question.question,
        points: question.value,
        category: question.category.title,
    });

     parent.appendChild(child);

};