function init() {
    let button = document.querySelector('#question');
    button.addEventListener('click', getNewQuestion);
}
console.log('yippee');

function getNewQuestion() {
    let request = new XMLHttpRequest();

    request.open('GET', 'http://jservice.io/api/random');

    request.addEventListener('load', function () {
        console.log('weve got mail');

    let response = JSON.parse(request.responseText); 
    let user = response.results[0];

    console.log(request.responseText);
    });

    
    




