const fs = require("fs");

const contentToWrite = "Hello, this is the content to be written to the file.";

// Writing to a file named "output.txt"
fs.writeFile("output.txt", contentToWrite, "utf-8", function(err) {
  if (err) {
    console.error("Error writing to the file:", err);
    return;
  }

  console.log("Write operation completed successfully.");
});

/*
In this example:

fs.writeFile is used to write content to a file named "output.txt". It has four parameters:

a.) Path of the file to be written ("output.txt" in this case).
b.) Content to be written to the file (contentToWrite in this case).
c.) Encoding for the file ("utf-8" in this case).
d.) Callback function with an err parameter that will be called after the write operation.
e.) After the write operation, the content is read from the file using fs.readFile to confirm the write operation.


*/ 

// Reading the content of the written file to confirm the write operation
fs.readFile("output.txt", "utf-8", function(err, data) {
  if (err) {
    console.error("Error reading from the file:", err);
    return;
  }

  console.log("Content read from the file:", data);
});


