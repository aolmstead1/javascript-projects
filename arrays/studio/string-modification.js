let input = require('readline-sync');
let str = "LaunchCode";
let strNew = (str.split("").splice(3,12).join(""))
let question = input.question("How many letters will be relocated?")
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
console.log(`I am going to print two strings, watch: ${str} and ${strNew}. ${question}`)
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (question < str.length) {
  strNew = (str.split("").splice(question).join(""))
  console.log(`Look at what you did. ${strNew}.`)
} else  {
  (console.log(`Wrong`))
}

  


