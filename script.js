// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordLength = 0;
let finalPassword = [];
let selection = [];

// prettier-ignore
let lowerCaseAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];
// prettier-ignore
let upperCaseAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
// prettier-ignore
let specialCharacters = ["!","$","%","&","(",")","*", "+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\","'",'"',
];
let numericalcharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/* Create password criteria */
let askPrompt = function () {
  //prettier-ignore
  selection = [];
  passwordLength = prompt("Type length of password desired (between 8 & 128)");
  while (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128 ||
    !passwordLength
  ) {
    alert("Please input a valid number");
    passwordLength = prompt("Type length of password desired");
  }

  let lower = confirm("click 'OK' for lowercase character");
  let upper = confirm("click 'OK' for upper character");
  let number = confirm("click 'OK' for number character");
  let special = confirm("click 'OK' for special character");
  console.log("if prompt is true or false");
  console.log("lower: " + lower);
  console.log("upper: " + upper);
  console.log("number: " + number);
  console.log("special: " + special);

  while (!lower && !upper && !number && !special) {
    alert("Please click 'OK' on at least one prompt!");
    lower = confirm("click ok for lowercase character");
    upper = confirm("click ok for upper character");
    number = confirm("click ok for number character");
    special = confirm("click ok for special character");
  }

  /* create password criteria array */
  if (lower) {
    console.log("lower");
    selection = selection.concat(lowerCaseAlphabet);
  }
  if (upper) {
    console.log("upper");
    selection = selection.concat(upperCaseAlphabet);
  }
  if (special) {
    console.log("special");
    selection = selection.concat(specialCharacters);
  }
  if (number) {
    console.log("number");
    selection = selection.concat(numericalcharacters);
  }
  console.log("selection: " + selection);
};

/* create password */
function generatePassword() {
  while (finalPassword.length < passwordLength) {
    i = Math.floor(Math.random() * selection.length);
    char = selection[i];
    finalPassword += char;
  }
}

/* run previous functins, write password on page */
function writePassword() {
  askPrompt();
  finalPassword = [];
  generatePassword();
  console.log(finalPassword);
  passwordText = finalPassword;
  var passwordText = document.querySelector("#password");
  passwordText.textContent = finalPassword;
  passwordText.value = finalPassword;
}

generateBtn.addEventListener("click", writePassword);
