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
};

function sort(sequence, instructions) {
    while (!inOrder(sequence, instructions)) {
        for (let instruction of instructions) {
            const num1 = Number(instruction[0] + instruction[1]);
            const num2 = Number(instruction[3] + instruction[4]);
            
            const num1I = sequence.indexOf(num1);
            const num2I = sequence.indexOf(num2);
            if  (num1I < 0 || num2I < 0)  {
                continue;
            };
            if (num1I >= num2I) {
                console.log(num1, num2, sequence);
                sequence.splice(num1I, 1);
                sequence = [
                    ...sequence.slice(0, num2I),
                    num1,
                    ...sequence.slice(num2I)
                ];
                console.log(sequence);
            };
        };
    };
    return sequence;
};

for (let sequence of input.sequences) {
    if (!inOrder(sequence, input.instructions)) {
        sequence = sort(sequence, input.instructions);
        total += sequence[(sequence.length - 1)/2];
    }
}

console.log(total);