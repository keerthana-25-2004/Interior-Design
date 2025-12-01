// List of images
let images = [
  "./firstpagehall/hall.png",
  "./firstpagehall/2nd-hall.png",
  "./firstpagehall/3rd-hall.png",
  "./firstpagehall/4th-hall.png",
  "./firstpagehall/5th-hall.png",
  "./firstpagehall/6th-hall.png",
  "./firstpagehall/7th-hall.jpg",
  "./firstpagehall/8th-hall.jpg",
  "./firstpagehall/9th-hall.jpg",
  "./firstpagehall/10th-hall.png",
  "./firstpagehall/11th-hall.jpg",
];

// Start from the first image
let index = 0;

// Function to update the displayed images
function showImages() {
  // Background image
  document.getElementById(
    "backgrdimg"
  ).style.backgroundImage = `url(${images[index]})`;

  // Main image
  document.getElementById("slideimg1").src = images[index];

  // Next image (preview)
  let nextIndex = (index + 1) % images.length; // Loops back to 0 automatically
  document.getElementById("slideimg2").src = images[nextIndex];
}

// Function to go to the next image
function right() {
  index = (index + 1) % images.length; // Move forward, loop back to start
  showImages();
}

// Function to go to the previous image
function left() {
  index = (index - 1 + images.length) % images.length; // Move backward, loop to end
  showImages();
}

// Show first image when page loads
showImages();

// moving objects settings

let position = 0;

// auto move function
function autoSlide() {
  position -= 1; // slow movement like marquee
  document.getElementById(
    "minicontent"
  ).style.transform = `translateX(${position}px)`;
}

// start auto sliding every 30ms
let autoMove = setInterval(autoSlide, 30);

// right arrow = move fast right
function rightmove() {
  position -= 200;
  document.getElementById(
    "minicontent"
  ).style.transform = `translateX(${position}px)`;
}

// left arrow = move fast left
function leftmove() {
  position += 200;
  document.getElementById(
    "minicontent"
  ).style.transform = `translateX(${position}px)`;
}




