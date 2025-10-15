/* =========================================================
   Chiikawa Live - Script File
   Handles hamburger menu and basic UI actions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggle && mainNav) {
    // Toggle menu open/close
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("open");
      document.body.classList.toggle("menu-open"); // stop page scroll when open
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        mainNav.classList.contains("active") &&
        !mainNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        mainNav.classList.remove("active");
        menuToggle.classList.remove("open");
        document.body.classList.remove("menu-open");
      }
    });

    // Close menu when a nav link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.classList.remove("open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Add hamburger bars
  if (menuToggle) {
    menuToggle.innerHTML = `
      <span class="bar top"></span>
      <span class="bar middle"></span>
      <span class="bar bottom"></span>
    `;
  }

  console.log("✅ Chiikawa Live script loaded");
});
