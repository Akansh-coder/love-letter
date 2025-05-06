const messages = [
    "I love your smile 😍",
    "You make every day better 💕",
    "You're my sunshine ☀️",
    "Thinking of you always 💭",
    "You’re perfect to me 💖",
    "Can’t wait to see you again 💌",
    "You're my favorite person ever 🫶",
    "You’re literally the best thing ever 🌸"
  ];
  
  function showLove() {
    // Show random love message
    const msg = document.getElementById('message');
    const randomIndex = Math.floor(Math.random() * messages.length);
    msg.innerText = messages[randomIndex];
  
    // Create heart animation
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
  
    document.getElementById('hearts-container').appendChild(heart);
  
    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  
  // Wait for the DOM to load before manipulating elements
  window.onload = function () {
    const slideshowImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    let slideIndex = 0;
    const slideshow = document.getElementById("slideshow");
  
    // Set the first image immediately
    slideshow.src = slideshowImages[slideIndex];
  
    // Preload all images
    slideshowImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  
    // Start rotating the slideshow
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slideshowImages.length;
      slideshow.src = slideshowImages[slideIndex];
    }, 5000);
  };