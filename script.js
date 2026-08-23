document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const splashVideo = document.getElementById("splash-video");

  // Check if the user has already seen the splash screen in this session
  if (sessionStorage.getItem("splashSeen")) {
    splashScreen.remove(); // Instantly delete it from the page
    return; // Stop the rest of the script
  }

  // Force sound on load
  splashVideo.muted = false;

  // Attempt to play automatically with audio
  const playPromise = splashVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.warn("Browser blocked autoplay with audio. Playing muted instead.");
      splashVideo.muted = true;
      splashVideo.play();
    });
  }

  // Hide the splash screen when the video finishes
  splashVideo.addEventListener("ended", () => {
    splashScreen.classList.add("hidden");
    sessionStorage.setItem("splashSeen", "true"); // Save status for the session
  });
});




// Handles switching the active class when an item is tapped
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    // Remove active class from all items
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    
    // Add active class to the clicked item
    this.classList.add('active');
  });
});
