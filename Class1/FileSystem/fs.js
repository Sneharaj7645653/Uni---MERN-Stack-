// We can perform Create, Read, Update, and Delete operations on the file system.
const fileHandler = require('fs');

console.log('start');
//read a file
let file1Data = fileHandler.readFileSync("f1.txt");
console.log(file1Data);
console.log("Data of file 1 is :" , file1Data.toString());
console.log("Data of file 1 is :" + file1Data.toString());
console.log(file1Data.toString());
console.log("File read successfully");

fileHandler.readFile('f2.txt' , function( err, data){ // error-first callback
    if(err){
        console.log("Error reading file:", err);
    } else {
        console.log("Data of file 3 is:", data.toString());
    }
})


console.log('end');




// Write a file
fileHandler.writeFile('f4.txt', 'This is the content of file 4', function( err, data){
    if(err){
        console.log("Error writing file:", err);
    }
    else{
        console.log("File 4 written successfully");

    }
} )