var fs = require("fs");


function readNewLines(file) {
var num = 0;
var buf = fs.readFileSync(file);
var str = buf.toString();
var arr = str.split("\n");
num = arr.length - 1;
num.toString();
return num;
}
console.log(readNewLines(process.argv[2]));

//I had some problems before I kept setting each result to a new variable
//clearly not the most efficient way to solve this!

//solution for reference
/*
 var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1