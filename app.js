var fs = require('fs');
var path = require('path')

//CHALLENGE 1
console.log(fs.readFileSync('challenge1/info.txt', 'utf-8'));

//CHALLENGE 2
let info = fs.readFileSync('challenge2/info.txt', 'utf-8')

info = 'Jun\nGreg\nEdwin\nRico\nCindy\nDavid\nClarance\nNancy\n' + info

fs.writeFileSync('challenge2/info.txt', info)

// fs.unlinkSync('info.txt')

//CHALLENGE 3
// let binfo = fs.readFileSync('challenge3/binfo.txt', 'utf-8');
//
// fs.writeFileSync('challenge3/info.txt', binfo);
//
// fs.unlinkSync('challenge3/binfo.txt')

//CHALLENGE 4

// fs.mkdirSync('challenge4/copyfolder')
//
// let info4 = fs.readFileSync('challenge4/info.txt', 'utf-8')
//
// fs.writeFileSync('challenge4/copyfolder/info.txt', info4)

//CHALLENGE 5

let info5 = fs.readFileSync('challenge5/info.txt', 'utf-8')
let alteredinfo5 = ''
 for (var i = 0; i < info5.length; i++) {
   if(info5[i] == '-') {
     alteredinfo5 += ' '
   } else {
     alteredinfo5 += info5[i]
   }
 }

 console.log(alteredinfo5);

 fs.writeFileSync('challenge5/info.txt', alteredinfo5)

 //CHALLENGE 6
 // Display all files that end with ".txt". Don't hard code the file names!

 fs.readdir('challenge6', function(err, files) {
     const txtFiles = files.filter(el => /\.txt$/.test(el))
   console.log(txtFiles);
 })
