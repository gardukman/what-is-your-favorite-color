// Assignment code here

// welcome alert
window.alert("Welcome to the random password generator.")

var generateBtn = document.querySelector("#generate");
let password = "";
let masterArray = [];
let lowerArray = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
let capArray = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
let symbolArray = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `-`, `.`, `?`];
let numberArray = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];


function valNumber () {
  do {
    // lower and upper case letters
    var numLength = window.prompt(`Please choose the length of your password. Choose a number between 8 and 128`);
    numLength = parseInt(numLength);

    var lowerCase = window.confirm(`Would you like to use lowercase letters in your password?`);

    var upperCase = window.confirm(`Would you like to use uppercase letters in your password?`);
    
    // symbols and numbers
    var useSymbols = window.confirm(`Would you like to use symbols in your password?`);
    var useNumbers = window.confirm(`Would you like to use numbers in your password?`);

    if(numLength > 8 && numLength < 128) {

      while(masterArray.length < numLength) {
        console.log(`masterArray length ` + masterArray.length);
        if(lowerCase && masterArray.length < numLength) {
          getRandom(lowerArray);
        }
        if(upperCase && masterArray.length < numLength) {
          getRandom(capArray);
        }
        if(useSymbols && masterArray.length < numLength) {
          getRandom(symbolArray);
        }
        if(useNumbers && masterArray.length < numLength) {
          getRandom(numberArray);
        }
      }
    } else {
      window.alert(`Please choose`);
    }
  } while(!(numLength > 8 && numLength < 128));
};




// prompt for length of pw

// prompt for character types, uppercase or lowercase to use in pw

//prompt for char types, symbols


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
