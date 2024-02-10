let noCount = 0;
let yesPressed = false;

// Function to update text of No button dynamically
const getNoButtonText = () => {
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("
  ];

  return phrases[Math.min(noCount, phrases.length - 1)];
};

// Function to handle No button click
const handleNoClick = () => {
  noCount++;
  document.getElementById("noButton").textContent = getNoButtonText();
};

// Event listener for Yes button click
document.getElementById("yesButton").addEventListener("click", () => {
  yesPressed = true;
  document.getElementById("yesButton").disabled = true;
  document.getElementById("noButton").disabled = true;
  document.querySelector("h1").textContent = "Yaaaaayyyyy!!!! I Love You!";
  document.querySelector("img").src = "images/love.gif";
  document.querySelector(".heart-gif").src = "images/in-love-nervous.gif";
  
  // Remove the Yes and No buttons
  document.getElementById("yesButton").remove();
  document.getElementById("noButton").remove();

  // Create "Listen to my heart" button
  const heartButton = document.createElement("button");
  heartButton.textContent = "Listen to my heart";
  heartButton.className = "yes-button";
  heartButton.addEventListener("click", () => {
    window.open("https://open.spotify.com/playlist/1XQlV6o7NcX27Q8WLmGxT1");
  });

  // Append button to container
  document.querySelector("#buttonContainer").appendChild(heartButton);
});

// Event listener for No button click
document.getElementById("noButton").addEventListener("click", handleNoClick);

// Function to create heart images
const createHeartImages = () => {
  const container = document.querySelector(".container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const mainImage = document.getElementById("mainImage");
  const mainImageWidth = mainImage.offsetWidth;
  const mainImageHeight = mainImage.offsetHeight;
  const mainImageX = mainImage.offsetLeft;
  const mainImageY = mainImage.offsetTop;

  // Left heart
  const leftHeart = document.createElement("img");
  leftHeart.src = "images/hearts.gif"; // Path to your heart-shaped image
  leftHeart.className = "heart";
  const leftHeartX = mainImageX - 50;
  const leftHeartY = mainImageY + mainImageHeight / 2;
  leftHeart.style.left = `${leftHeartX}px`;
  leftHeart.style.top = `${leftHeartY}px`;
  container.appendChild(leftHeart);

  // Right heart
  const rightHeart = document.createElement("img");
  rightHeart.src = "images/hearts.gif"; // Path to your heart-shaped image
  rightHeart.className = "heart";
  const rightHeartX = mainImageX + mainImageWidth + 20;
  const rightHeartY = mainImageY + mainImageHeight / 2;
  rightHeart.style.left = `${rightHeartX}px`;
  rightHeart.style.top = `${rightHeartY}px`;
  container.appendChild(rightHeart);
};

// Call the function to create heart images
createHeartImages();
