var fs = require('fs');

//CHALLENGE 1
console.log(fs.readFileSync('challenge1/info.txt', 'utf-8'));

//CHALLENGE 2
let info = fs.readFileSync('challenge2/info.txt', 'utf-8')

info = 'Jun\nGreg\nEdwin\nRico\nCindy\nDavid\nClarance\nNancy\n' + info

fs.writeFileSync('challenge2/info.txt', info)

// fs.unlinkSync('info.txt')
