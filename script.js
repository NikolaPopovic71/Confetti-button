document
  .getElementById("thankYouButton")
  .addEventListener("click", function () {
    this.style.display = "none"; // Hide the button
    document.getElementById("thankYouMessage").style.display = "block"; // Show the Thank You message

    // Properly use the confetti library
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
