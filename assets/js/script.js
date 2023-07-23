
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to get the password.
    function getPassword() {
    
// define each variables used, make them a string
    var PasswordUP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var PasswordLC = "abcdefghijklmnopqrstuvwxyz"
    var NumericValues = "0123456789"
    var PasswordSymbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var options = "";
    var optionsSelected = "";

//prompt user to create password meeting the length requirements
    var passwordLength = prompt(
        "Your password must be minimum of 8 and no more than 128 characters long."
    );
    
// this allows the user to return back to the window if the password does not meet any of the length requirements. isNan means "not a number"
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Error! Your password does not meet length requirements.");        
        return;
		
	} else {
// prompts used after user meets the length requirements , prompts user with additional criteria to contain
    var uppercase = confirm("Does your password contain uppercase letters? If so, continue.");
    var lowercase = confirm("Does your password contain lowercase letters? If so, continue ");
    var numeric = confirm("Does your password contain numbers? If so, continue");
    var symbols = confirm("Does your password conatin special characters? if so, continue");
    }

    if (uppercase) {options += PasswordUP;}
    if (lowercase) {options += PasswordLC;}
    if (numeric) {options += NumericValues;}
    if (symbols) {options += PasswordSymbols;}

// added for loop if criteria above is not met = false
    for (i = 0; i < passwordLength; i++) {

// the math.random allows the final psudeocode to be ran to generate a random password based off the criteria we selected
        optionsSelected += options[Math.floor(Math.random() * options.length)]
    }
    return(optionsSelected);
}


    var passwordText = document.querySelector("#password");
    function writePassword(optionsSelected) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = optionsSelected;
}

// Add event listener this will actually allow the function being called to generate the password. this actions makes sure that generate password happens.
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
