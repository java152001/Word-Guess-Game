var wordBank = ["WHITEWALKER", "VALYRIA", "KINGSLAYER", "HODOR", "DIREWOLF", "DRAGON", "KHALEESI", "LANNISTER"]

var wordGuess = wordBank[Math.floor(Math.random() * wordBank.length)];

var blanksArray = [];

var blanks = "";

var wrongLetters = []

var activeWord = "";

// Determines how many letters are in the random word and how many dashes are needed.
for (i = 0; i < wordGuess.length; i++) {
    blanksArray.push(" _");
}

// Pushes the entire array of dashes into a single string to be displayed.
for (i = 0; i < blanksArray.length; i++) {
    blanks = blanks + blanksArray[i];
}

console.log(blanks);

// Function that will determine the letter that is being pressed by the player.
document.onkeyup = function(event) {
    var playerGuess = event.key;
    playerGuess = playerGuess.toUpperCase();

// Compares the key pressed by the player to the word.
    for (i = 0; i < wordGuess.length; i++) {   
            
        if (wordGuess.charAt(i) === playerGuess) {
            blanksArray[i] = " " + playerGuess;
        }
        else {
            wrongLetters.push(playerGuess);
        }
    }

// Overwrites word to be displayed
    blanks = "";

// Loops through word after player guess, overwriting with their new correct letter
    for (i = 0; i < blanksArray.length; i++) {
        blanks = blanks + blanksArray[i];
    }

    console.log(blanks);
}


    










 