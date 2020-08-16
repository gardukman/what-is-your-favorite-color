// Assignment code here
// debugger;
// welcome alert
window.alert("Welcome to the random password generator.")

var generateBtn = document.querySelector("#generate");
var password = "";
var masterArray = [];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "-", ".", "?"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword() {
  valNumber();
  return masterArray.join("");
}
function valNumber() {
  // get the length of password from the user
  var numLength = window.prompt("Please choose the length of your password. Choose a number between 8 and 128");
  // takes the number from the prompt to use as the length of the password - this turns the number from the user to the int
  numLength = parseInt(numLength);

  // true/false statement asking if lowercase letters are wanted in password
  var lowerCase = window.confirm("Would you like to use lowercase letters in your password?");
  console.log(lowerCase)

  // true/false statement asking if uppercase letters are wanted in password  
  var upperCase = window.confirm("Would you like to use uppercase letters in your password?");
  console.log(upperCase);

  // true/false statement asking if symbols are wanted in password
  var useSymbols = window.confirm("Would you like to use symbols in your password?");
  console.log(useSymbols);

  // true/false statement asking if numbers are wanted in password
  var useNumbers = window.confirm("Would you like to use numbers in your password?");
  console.log(useNumbers);

  // if statement making sure password length is at least 8 char and no more than 128 char
  if (numLength >= 8 && numLength <= 128) {

    while (masterArray.length < numLength) {
      console.log("masterArray length " + masterArray.length);
      if (lowerCase && masterArray.length < numLength) {
        getRandom(lowerArray);
      }
      if (upperCase && masterArray.length < numLength) {
        getRandom(capArray);
      }
      if (useSymbols && masterArray.length < numLength) {
        getRandom(symbolArray);
      }
      if (useNumbers && masterArray.length < numLength) {
        getRandom(numberArray);
      }
    }
  } else {
    window.alert("Please choose");
  }
};


function getRandom(array) {
  let randomItem = array[Math.floor(Math.random() * array.length)];
  masterArray.push(randomItem);
  
  console.log(masterArray);
}



// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
