
var fs = require("fs");
var lines;

fs.readFile(process.argv[2],  function callback (err, fileContents) {
	lines = fileContents.toString().split("\n").length - 1;
	console.log(lines);
});


