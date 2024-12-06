const fs = require('fs');
const { lcov } = require('node:test/reporters');
let input = JSON.parse(fs.readFileSync('day6.json', 'utf8'));

const box = "#"
const visited = "X"
const locationMarkers = [">","<", "v", "^"]

let guardLocation = {x: undefined, y: undefined, direction: undefined};

function findLocation(map) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            for (let locationMarker of locationMarkers) {
                if (map[y][x] == ) {
                    console.log(x, y)
                    return {x:x, y:y, direction:locationMarker}
                }
            }
        }
    }
    return "error"
}

guardLocation = findLocation(input)

console.log(guardLocation)

// while(true) {

// }