const fs = require('fs');

let input = JSON.parse(fs.readFileSync('day4.json', 'utf8'));

const directions = [
    {x:1, y:0},
    {x:1, y:1},
    {x:1, y:-1},
    {x:0, y:-1},
    {x:0, y:1},
    {x:-1, y:0},
    {x:-1, y:1},
    {x:-1, y:-1}
]

let total = 0
for (let rowI = 0; rowI < input.length; rowI++) {
    let row = input[rowI]
    for (let charI = 0; charI < row.length; charI++) {
        if (row[charI] != "X") {
            continue;
        }
        for (let direction of directions) {
            if (input[rowI + 3*direction.y] == undefined) {
                continue; 
            }
            if (input[rowI + 3*direction.y][charI + 3*direction.x] == undefined) {
                continue;
            }
            if (
                input[rowI + direction.y][charI + direction.x] != "M" || 
                input[rowI + 2*direction.y][charI + 2*direction.x] != "A" || 
                input[rowI + 3*direction.y][charI + 3*direction.x] != "S"
            ) {
                continue;
            }
            total++
        }
    }
}

console.log(total)