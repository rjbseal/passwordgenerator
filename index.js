// these elements will make up our random passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//grab page elements and variableize them
const btnEl = document.getElementById("btn-el")
const pwd1El = document.getElementById("pwd1-el")
const pwd2El = document.getElementById("pwd2-el")

// let's get a random char from the array
const getRandomChar = () => {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Generate the final password
// Upgrade: add a param that takes an int that will determine number of chars
const getRandomPassword = () => {
    let randomPassword = "";
    //pick a random char from the chars array 15x
    for(let i = 0; i < 15; i++) {
        randomPassword += getRandomChar();
    }

    return randomPassword;
} 

btnEl.addEventListener("click", function() {
    pwd1El.value = getRandomPassword();
    pwd2El.value = getRandomPassword();
})

// copy generated password to clipboard
function copyPassword() {
    /* Select the text field */
    pwd1El.select();
    pwd1El.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the input field */
    navigator.clipboard.writeText(pwd1El.value);
  
  }
