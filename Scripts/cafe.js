let username = ""       
let password = ""       
let input = ""          


// Declare the functions. 
// The parameter "input" is a variable that accepts the value passed to the function by checking the length of the username & password that user had input is at lease 8 characters 
function checkLength (input) {
    if (input.length >= 8){
        return true
    } else {
        return false
    }
}

// The parameter "input and password" is a variable that accepts the value passed to the function by checking that the password and confirmation of password match.
function PWconfirm (input, password) {
    if (input === password){
        return tru
    } else {
        return false
    }


}


//------------

// Main Program

//------------


alert("welcome to the Toi Ohomai Cafes login System")                                                    // Welcome message for the user 

while (true){
    input = prompt("Enter a username, must be at least 8 Characters or more")               // Prompting the user to enter a username with at least 8 characters           
    if (checkLength(input) === true){                                                       // Checking if you username is at least 8 Characters
    username = input
    break
} else {                                                                                    // If not, re-enter until sufficient
alert ("UN insufficient, must be a minimum of 8 Characters or more")                        // Telling the user that the UN is insufficient
    }
}

while (true){
    input = prompt("Enter a password, must be at least 8 Characters or more")               // Prompting the user to enter a password with at least 8 characters 
    if (checkLength (input) === true){                                                      // Checking if you password is at least 8 Characters
    password = input
    break
} else {                                                                                    // If not, re-enter until sufficient
alert ("Password insufficient, must be a minimum of 8 Characters or more")                  // Telling the user that the Passwrod is insufficient
    }
}

while (true){
    input = prompt("Confirm password")                                                      // Prompting the user to confirm password 
    if (PWconfirm (input, password) === true){                                              // Checking if password and confirmation of password match
    password = input
    break
} else {                                                                                    // If not, re-enter until sufficient
alert ("Password does not match")                                                           // Alerting the user that the password does not match
    }
}

alert ("Username and Password have been accepted and set")                                  // Alerting the user that the UN and password have been accepted and set
console.log (`Username:${username}; Password${password}`)                                   // Displaying the username and password entered in by the user in the console browser


alert (`welcome to Toiohomai Cafes: ${username};`)