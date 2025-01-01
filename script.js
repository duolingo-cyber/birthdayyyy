// Track which buttons have been clicked
let clickedButtons = { red: false, yellow: false, green: false };

// Function to handle button clicks
function handleClick(color) {
  const button = document.getElementById(`${color}-btn`);
  const letters = { red: "A", yellow: "R", green: "Y" };

  // Change button text to respective letter
  button.textContent = letters[color];

  // Mark the button as clicked
  clickedButtons[color] = true;

  // Check if all buttons are clicked
  if (clickedButtons.red && clickedButtons.yellow && clickedButtons.green) {
    document.getElementById("bar-container").style.display = "block"; // Show "Click Me" button
  }
}

// Function to show the card
function showCard() {
  // Hide the main screen
  document.getElementById("main-screen").style.display = "none";

  // Show the card screen
  document.getElementById("card-screen").classList.remove("hidden");
}
// ...existing code...
// ...existing code...

// Function to generate confetti
function generateConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confetti);

    // Remove confetti after animation ends
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}

// Function to show the card
function showCard() {
  // Hide the main screen
  document.getElementById("main-screen").style.display = "none";

  // Show the card screen
  document.getElementById("card-screen").classList.remove("hidden");

  // Generate confetti
  generateConfetti();
}
