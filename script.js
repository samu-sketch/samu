// Typewriter Effect
const text = ["Blazing Speed.", "Modern Design.", "Smarter UI.", "Built For You."];
let index = 0;
let charIndex = 0;
const speed = 100;
const eraseDelay = 1500;
const typewriter = document.getElementById("typewriter");

function type() {
  if (charIndex < text[index].length) {
    typewriter.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, eraseDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, speed / 2);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, speed);
  }
}

window.onload = () => {
  // Fade-in headline
  document.getElementById("headline").classList.add("fade-in");
  // Start typewriter
  setTimeout(type, 500);
};
