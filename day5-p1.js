const fs = require('fs');

let input = JSON.parse(fs.readFileSync('day5.json', 'utf8'));
// input is an object with the properties: instructions and sequences

let total = 0;

function inOrder(sequence, instructions)  {
    for (let instruction of instructions) {
        const num1 = Number(instruction[0] + instruction[1]);
        const num2 = Number(instruction[3] + instruction[4]);
        
        if  (sequence.indexOf(num1) < 0 || sequence.indexOf(num2) < 0)  {
            continue;
        };
        if (sequence.indexOf(num1) >= sequence.indexOf(num2)) {
            return false;
        };
    };
    return true;
}

for (let sequence of input.sequences) {
    if (inOrder(sequence, input.instructions)) {
        total += sequence[(sequence.length - 1)/2];
    };
};

console.log(total);