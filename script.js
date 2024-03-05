function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guesses = 0;
    let guess;
// will this merge work?
    while (guesses < totalGuesses) {
        if (guesses === 0) {
            guess = prompt("Enter a number between 1 and 100.");
        } else if (guess < numToGuess) {
            guess = prompt(`${guess} is too small. Guess a larger number.`);
        } else if (guess > numToGuess) {
            guess = prompt(`${guess} is too large. Guess a smaller number.`);
        }

        if (guess === null) {
            alert("Game canceled.");
            return 0;
        }

        if (!isNaN(guess) && guess !== "") {
            guesses++;

            if (parseInt(guess) === numToGuess) {
                alert(`Congratulations! You guessed the correct number in ${guesses} ${guesses === 1 ? 'guess' : 'guesses'}.`);
                return guesses;
            }
        } else {
            alert("Please enter a number.");
        }
    }

    alert(`Sorry, you ran out of turns. The correct number was ${numToGuess}.`);
    return 0;
}

// Example usage:
// playGuessingGame(5);
// playGuessingGame(7, 3);
