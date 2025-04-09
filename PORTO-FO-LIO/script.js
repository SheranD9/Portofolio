document.addEventListener("DOMContentLoaded", () => {
  // Wait for everything to be loaded (images, scripts, etc.)
  window.addEventListener("load", () => {
    const loader = document.querySelector(".page-loader");
    // After the page is fully loaded, hide the loader
    loader.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Scroll animation for fade-in elements
  const fadeInElements = document.querySelectorAll(".fade-in");

  const checkScroll = () => {
    const windowHeight = window.innerHeight;

    fadeInElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      // If the element is within the viewport, add the "visible" class
      if (
        elementTop < windowHeight - 100 &&
        !element.classList.contains("visible")
      ) {
        element.classList.add("visible");
      }
    });
  };

  // Initial check for any elements that are already in view
  checkScroll();

  // Throttling the scroll event for performance optimization
  let isScrolling = false;
  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        checkScroll();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Parallax effect for the visual section
  const visualSection = document.querySelector(".visual");

  if (visualSection) {
    let lastScrollY = 0; // To store the previous scroll position for better performance
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition !== lastScrollY) {
        visualSection.style.backgroundPosition = `center ${
          scrollPosition * 0.5
        }px`;
        lastScrollY = scrollPosition;
      }
    });
  }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".background-video");
  video.playbackRate = 0.2; // Change this value (e.g., 0.5 = half speed)
});
