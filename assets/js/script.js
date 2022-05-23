// Assignment code here
//Password generator option keys.
const selectableSets ={
  lowercase: lowercaseSet,
  uppercase: uppercaseSet,
  numbers:numberSet,
  symbols:symbolSet
};
 


/*
//working number prompt for password character limit set 
function getPasswordLength(text)
{
    if(text == '' ){
     text = "Please enter a number from 8 to 128";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);

}
function checkNumber(number){

    if (number <= 128 && number >= 8) {
    window.prompt("Your password length has been set to " + number + " confirm?", "");
  
} else if (isNaN(number)) {
    getPasswordLength("Your input was not a number. Please enter a number between 8 and 128.");
} else {
    getPasswordLength("Your number (" + number + ") is not between 8 and 128", "");
}
/*
function passwordCreate() {
  var chars= passwordAttributes.lowercase;
  console.log(chars);
  
  var generatePassword ="";
  for (var i = 0; < number; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    generatePassword += chars.substring(randomNumber, randomNumber +1);
  }
  }

}
*/
//End number prompt function
//getPasswordLength();



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
//above is provided code with assignment.




//charset ranges: defines the const selectableSets keys. Randomly generates a number, letter, or symbol from within the set.
function lowercaseSet(){
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

function UppercaseSet(){
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
  }

function numberSet(){
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
  }

function symbolSet(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }