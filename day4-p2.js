const fs = require('fs');

let input = JSON.parse(fs.readFileSync('day4.json', 'utf8'));

let total = 0
for (let rowI = 0; rowI < input.length; rowI++) {
    let row = input[rowI]
    for (let charI = 0; charI < row.length; charI++) {
        if (row[charI] != "A") {
            continue;
        }
        
        if (input[rowI + 1] == undefined || input[rowI - 1] == undefined) {
                continue; 
        }
        if (input[rowI][charI + 1] == undefined || input[rowI][charI - 1] == undefined) {
            continue;
        }
        if (
            input[rowI + 1][charI + 1] == "M" && input[rowI - 1][charI - 1] == "S" ||
            input[rowI + 1][charI + 1] == "S" && input[rowI - 1][charI - 1] == "M" 
        ) {
            if (
                input[rowI + 1][charI - 1] == "M" && input[rowI - 1][charI + 1] == "S" ||
                input[rowI + 1][charI - 1] == "S" && input[rowI - 1][charI + 1] == "M" 
            ) {
                total++
            }
        }
    }
}

console.log(total)