const queries = ["Will your password include lowercase characters?",
  "Will your password include uppercase characters?", 
  "Will your password include numeric characters?",
  "Will your password include special characters?",
  "How many characters would you like to use? (Must be betwen 8 and 128). "
];

var answer1 = confirm(queries[0])
var answer2 = confirm(queries[1])
var answer3 = confirm(queries[2])
var answer4 = confirm(queries[3])
var limit = prompt(queries[4])

function getRandomUpper(length) {
  var chars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  var charLength = chars.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

function getRandomLower(length) {
  var chars = "qwertyuiopasdfghjklzxcvbnm";
  var charLength = chars.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

function getRandomSpecial(length) {
  var chars = "!@#$%^&*";
  var charLength = chars.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

function getRandomNumeric(length) {
  var chars = "1234567890";
  var charLength = chars.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

if (limit < 8) {
  limit = prompt("Number of characters must be more than 8.")
} else if(limit > 128) {
  limit = prompt("Number of characters must be less than 128.")
} 

if(limit <= 128 && limit >+ 8) {
  alert("This answer is sufficient.")
} else {
  alert("Let's try this again, please refresh the page."); 
}

function generatePassword() {
  var password = "";
  
  for(var i = 0; i < limit;) {
    if(answer1 === true) {
      password += getRandomLower(1);
      i++;
    } if(answer2 === true) {
      password += getRandomUpper(1);
      i++;
    } if(answer3 === true) {
      password += getRandomNumeric(1);
      i++;
    } if(answer4 === true) {
      password += getRandomSpecial(1);
      i++;
    }
}
      return password;
}

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
