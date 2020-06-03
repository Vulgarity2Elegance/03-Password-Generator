// Assignment Code
let generateBtn = document.querySelector("#generate");

// Prompt password criteria when click generate password button
function generatePassword() {
    // initialize
    let generatedPassword = "";

    // Let user set password length
    pwdLength = parseInt(
        prompt("How many characters would you like your password to contain?")
    );

    if (pwdLength <= 7 || pwdLength >= 129) {
        while (pwdLength <= 7 || pwdLength >= 129) {
            pwdLength = parseInt(
                prompt(
                    "How many characters would you like your password to contain?"
                )
            );
        }
    } else if (pwdLength >= 8 && pwdLength <= 128) {
        alert("Your password length is valid. Please continue!");
    }

    // console.log(pwdLength);

    // Let user confirm using special characters
    splChar = confirm("Click OK to confirm including special character.");

    if (splChar == false) {
        while (splChar == false) {
            splChar = confirm(
                "Click OK to confirm including special characters."
            );
        }
    }
    // console.log(splChar);

    // Let user confirm using numeric characters
    numChar = confirm("Click OK to confirm including numeric character.");

    if (numChar == false) {
        while (numChar == false) {
            numChar = confirm(
                "Click OK to confirm including numeric characters."
            );
        }
    }
    // console.log(numChar);

    // Let user confirm using lowercase characters
    lowChar = confirm("Click OK to confirm including lowercase character.");

    if (lowChar == false) {
        while (lowChar == false) {
            lowChar = confirm(
                "Click OK to confirm including lowercase characters."
            );
        }
    }
    // console.log(lowChar);

    // Let user confirm using uppercase characters
    uppChar = confirm("Click OK to confirm including uppercase character.");

    if (uppChar == false) {
        while (uppChar == false) {
            uppChar = confirm(
                "Click OK to confirm including uppercase characters."
            );
        }
    }
    // console.log(uppChar);

    // Possible password values
    let values =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+0123456789abcdefghijklmnopqrstuvwxyz";

    // create for loop to choose password characters
    for (let i = 0; i < pwdLength; i++) {
        generatedPassword += values.charAt(
            Math.floor(Math.random() * Math.floor(values.length - 1))
        );
    }

    alert(generatedPassword);

    // Write password to the #password input
    function writePassword() {
        let password = generatedPassword;
        let passwordText = document.querySelector("#password");

        passwordText.value = password;
    }
    writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
