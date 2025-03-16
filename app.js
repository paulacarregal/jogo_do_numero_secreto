alert("Welcome to the secret number game");
let secretNumber = 27;
let guess;
let attempts = 0;

while (guess != secretNumber) {
  guess = prompt("Choose a number between 1 and 30");
  attempts++;

  //if the guess is equal to the secret number
  if (secretNumber == guess) {
    alert(
      `That's it! You discovered the secret number ${secretNumber}! in ${attempts} attempt${attempts > 1 ? 's' : ''}`
    );
  } else if (guess < secretNumber) {
    alert(`The secret number is greater than ${guess}`);
  } else {
    alert(`The secret number is less than ${guess}`);
  }
}
