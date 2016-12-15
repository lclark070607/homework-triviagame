function init() {
    let p = document.querySelector('#question');
    p.addEventListener('click', getNewQuestion);
}

console.log('yippee');


//My Ajax request to get a new question.

function getNewQuestion() {
    let request = new XMLHttpRequest();

    request.open('GET', "http://jservice.io/api/random");

    request.addEventListener('load', function () {
        console.log('weve got mail');
    })


        let response = JSON.parse(request.responseText);
        // for (let i=0; i < response.results.length; i++) {
        //     let trivia = response.results[0];
            
            console.log(request.responseText);
            // showQuestion(trivia);
        }

request.send();

window.addEventListener('load', init);






       