//Practice Problem Dec14

function longestx(string) {
//. iterate over letters
let runs = [];
counter = 0;
//2. find the length of all runs
for(let i = 0; i < string.length; i++) {
    if (string[i] === 'x') {
        counter++;
    } else {
        runs.push(counter); //push when we hit a non-x, push 'number', reset at 0--> that's the loop
        counter = 0;
    }
    //console.log(counter);//first test
}
runs.push(counter);
//console.log (runs);

let largest = 0;
for (let i = 0; i < runs.length; i++) {
    if(runs[i] > largest) {
        largest = runs[i];
    }
}

return largest;

//3. find the longest runs
//4. return longest runs

}

console.log(longestx('xxotrxxxxxtzpxt')); //returns 5