var wordBank = ["WHITEWALKER", "VALYRIA", "KINGSLAYER", "HODOR", "DIREWOLF", "DRAGON", "KHALEESI", "LANNISTER"]
var wordGuess;
var attempts;
var lettersArray = [];
var currentWord = "";
var wrongLetter = "";
var wrongLetters = [];
var wrongsLettersStrg = "";
var activeWord = "";
var wins = 0;
var losses = 0;

// Function to define the start of the game by picking a random word and resetting attempts.
function startGame() {
    wordGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    attempts = 12;
    lettersArray = [];
    currentWord = "";
    wrongLetters = [];
    wrongsLettersStrg = "";

    // Determines how many letters are in the random word and how many dashes are needed.
        for (i = 0; i < wordGuess.length; i++) {
            lettersArray.push("_");
        }

    // Pushes the entire array of dashes into a single string to be displayed.
        for (i = 0; i < lettersArray.length; i++) {
            currentWord = currentWord + lettersArray[i];
        }
}

startGame();

document.getElementById("activeWord").innerHTML = currentWord;

// Function that will determine the letter that is being pressed by the player.
document.onkeyup = function(event) {
    document.getElementById("beginMessage").innerHTML = "Good Luck!"
    document.getElementById("pic").src = "#";
    document.getElementById("winningPic").style.visibility = "hidden";
    var playerGuess = event.key;
    playerGuess = playerGuess.toUpperCase();

// Makes sure that the user doesn't pick the same letter over and over    
    if (wrongLetters.includes(playerGuess)){
        document.getElementById("beginMessage").innerHTML = "Already picked, choose again!"
    }
    else {
// Compares the key pressed by the player to the word.
        if (wordGuess.includes(playerGuess)) {
            for (i = 0; i < wordGuess.length; i++) {
                if (wordGuess.charAt(i) === playerGuess) {
                    lettersArray[i] = playerGuess;
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
        document.getElementById("activeWord").innerHTML = currentWord;

    // Overwrites Wrong Letters to be displayed
        wrongsLettersStrg = "";

    // Loops through wrong Letters to display
        for (i = 0; i < wrongLetters.length; i++) {
            wrongsLettersStrg = wrongsLettersStrg + " " + wrongLetters[i];
        }

        document.getElementById("wrongLetters").innerHTML = wrongsLettersStrg;
        document.getElementById("remainingGuesses").innerHTML = attempts;

        if (lettersArray.includes("_") === false) {
            document.getElementById("beginMessage").innerHTML = "Victory! Press a letter key to guess again!";

            if (currentWord === "DRAGON") {
                document.getElementById("pic").src = "assets/images/Dragon.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "DIREWOLF") {
                document.getElementById("pic").src = "assets/images/Direwolf.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "HODOR") {
                document.getElementById("pic").src = "assets/images/Hodor.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "KHALEESI") {
                document.getElementById("pic").src = "assets/images/Khaleesi.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "KINGSLAYER") {
                document.getElementById("pic").src="assets/images/Kingslayer.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "LANNISTER") {
                document.getElementById("pic").src = "assets/images/Lannister.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "VALYRIA") {
                document.getElementById("pic").src = "assets/images/Valyria.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }
            else if (currentWord === "WHITEWALKER") {
                document.getElementById("pic").src="assets/images/whitewalker.jpg";
                document.getElementById("winningPic").style.visibility = "visible";
            }

            wins++;
            document.getElementById("wins").innerHTML = wins;
            startGame();
        }

        if (attempts === 0) {
            document.getElementById("beginMessage").innerHTML = "Too Bad! Press a letter to start again";
            losses++;
            document.getElementById("losses").innerHTML = losses;
            startGame();
        }
}





