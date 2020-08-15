// Assignment code here
var generateBtn = document.querySelector("#generate");
let password = "";
let masterArray = [];
let lowerArray = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
let capArray = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
let symbolArray = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `-`, `.`, `?`];
let numberArray = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
// welcome alert
window.alert("Welcome to the random password generator.")

// prompt for length of pw

// prompt for character types, uppercase or lowercase to use in pw

//prompt for char types, symbols



var length = prompt("Please choose a number between 8 and 128.");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
