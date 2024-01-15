const fs = require("fs")
// This is about a fileSystem module that is used for reading and writing over data in js
// We will learn more about importing modules later on.2

fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
})
// The readFile function for the fs module has three parameters:
// a.) Path of the file to be accessed
// b.) Encoding for the file to be read or accessed
// c.) function which further has two parameters of "err" & "data".

// Note: The function used is a error first and data last kind of function which is based for readFile function in fs module.