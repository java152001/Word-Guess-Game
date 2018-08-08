var wordBank = ["WHITEWALKER", "VALYRIA", "KINGSLAYER", "HODOR", "DIREWOLF", "DRAGON", "KHALEESI", "LANNISTER"]
var wordGuess;
var attempts;
var lettersArray = [];
var currentWord = "";
var wrongLetter = "";
var wrongLetters = [];
var wrongsLettersStrg = "";
var activeWord = "";

startGame();

console.log(currentWord);

// Function that will determine the letter that is being pressed by the player.
document.onkeyup = function(event) {
    var playerGuess = event.key;
    playerGuess = playerGuess.toUpperCase();


// Makes sure that the user doesn't pick the same letter over and over    
if (wrongLetters.includes(playerGuess)){
    console.log("Choose again please");
}
else {
// Compares the key pressed by the player to the word.
    if (wordGuess.includes(playerGuess)) {
        for (i = 0; i < wordGuess.length; i++) {
            if (wordGuess.charAt(i) === playerGuess) {
                lettersArray[i] = " " + playerGuess;
            }
        }
    }
    else {
        wrongLetter = playerGuess;
        attempts = attempts - 1;
    }
}

// Pushes the wrong letter chosen to my wrong letters array
    wrongLetters.push(wrongLetter);
    wrongLetter = "";

// Overwrites word to be displayed
    currentWord = "";

// Loops through word after player guess, overwriting with their new correct letter
    for (i = 0; i < lettersArray.length; i++) {
        currentWord = currentWord + lettersArray[i];
    }

    console.log(currentWord);   

// Overwrites Wrong Letters to be displayed
    wrongsLettersStrg = "";

// Loops through wrong Letters to display
    for (i = 0; i < wrongLetters.length; i++) {
        wrongsLettersStrg = wrongsLettersStrg + " " + wrongLetters[i];
    }

    console.log(wrongsLettersStrg);
    console.log("Guesses remaining: " + attempts);
}

// Function to define the start of the game by picking a random word and resetting attempts.
function startGame() {
    wordGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    attempts = 12;

    // Determines how many letters are in the random word and how many dashes are needed.
        for (i = 0; i < wordGuess.length; i++) {
            lettersArray.push(" _");
        }

    // Pushes the entire array of dashes into a single string to be displayed.
        for (i = 0; i < lettersArray.length; i++) {
            currentWord = currentWord + lettersArray[i];
        }
}

    










 