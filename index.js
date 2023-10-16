//the following prompts the user to enter a string to reverse, which is then stored in the variable
var input = prompt("Enter a series of numbers to check if its a palindrome!");

//the following is a function meanth to reverse a given string
function palindromeCheck(userInput){
    var reversedString = "";
    for (i= userInput.length - 1; i >= 0; i--){
        reversedString += userInput[i];
    }
    if (reversedString == userInput){
        alert(userInput + " is a palindrome!");
    } else{
        alert(userInput + " is not a palindrome!");
    }
}

palindromeCheck(input);
