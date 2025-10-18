/* =========================================================
   Chiikawa Live - Script File
   Handles discussion/comment actions and UI interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // DISCUSSION SYSTEM
  // =========================================================
  const form = document.querySelector(".discussion-form");
  const input = form ? form.querySelector("input") : null;
  const list = document.querySelector(".discussion-list");
  const headerCount = document.querySelector(".discussion-header p");

  if (form && input && list && headerCount) {
    let commentCount = document.querySelectorAll(".comment-item").length;

    const updateCommentCount = () => {
      headerCount.textContent = `${commentCount} post${
        commentCount !== 1 ? "s" : ""
      } today`;
    };

    updateCommentCount();

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const text = input.value.trim();
      if (text === "") return;

      commentCount++;

      const newComment = document.createElement("div");
      newComment.classList.add("comment-item");

      const avatar = document.createElement("img");
      avatar.src = "res/placeholder.png";
      avatar.alt = "User Profile";
      avatar.classList.add("comment-avatar");

      const content = document.createElement("div");
      content.classList.add("comment-content");

      const commentText = document.createElement("p");
      commentText.innerHTML = `<strong>Guest:</strong> ${text}`;

      content.appendChild(commentText);
      newComment.appendChild(avatar);
      newComment.appendChild(content);

      list.appendChild(newComment);

      list.scrollTo({
        top: list.scrollHeight,
        behavior: "smooth",
      });

      input.value = "";
      updateCommentCount();
    });
  }

  console.log("💬 Discussion system ready (Hamburger removed)");
});

// =========================================================
// HAMBURGER MENU TOGGLE
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }
});

// =========================================================
// SIGN-IN / SIGN-UP POPUP MODAL
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const signinBtn = document.querySelector(".signin");
  const signinOverlay = document.getElementById("signinOverlay");
  const closeSignin = document.getElementById("closeSignin");
  const formContainer = document.getElementById("signinFormContainer");
  const toggleModeBtn = document.getElementById("toggleAuthMode");
  const formTitle = document.getElementById("formTitle");

  if (signinBtn && signinOverlay && closeSignin && formContainer) {
    signinBtn.addEventListener("click", (e) => {
      e.preventDefault();
      signinOverlay.classList.add("active");
      document.body.classList.add("menu-open");
    });

    closeSignin.addEventListener("click", () => {
      signinOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
      resetForm();
    });

    signinOverlay.addEventListener("click", (e) => {
      if (e.target === signinOverlay) {
        signinOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        resetForm();
      }
    });

    toggleModeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmPasswordField = document.getElementById("confirmPassword");

      if (formContainer.dataset.mode === "signin") {
        formContainer.dataset.mode = "signup";
        formTitle.textContent = "Sign Up";
        toggleModeBtn.textContent = "Already have an account? Sign In";

        if (!confirmPasswordField) {
          const confirmDiv = document.createElement("div");
          confirmDiv.classList.add("input-group");
          confirmDiv.innerHTML = `
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required>
          `;
          formContainer.querySelector("form").appendChild(confirmDiv);
        }
      } else {
        formContainer.dataset.mode = "signin";
        formTitle.textContent = "Sign In";
        toggleModeBtn.textContent = "Don't have an account? Sign Up";

        if (confirmPasswordField) confirmPasswordField.parentElement.remove();
      }
    });

    function resetForm() {
      formContainer.dataset.mode = "signin";
      formTitle.textContent = "Sign In";
      toggleModeBtn.textContent = "Don't have an account? Sign Up";
      const confirmPasswordField = document.getElementById("confirmPassword");
      if (confirmPasswordField) confirmPasswordField.parentElement.remove();
      formContainer.querySelector("form").reset();
    }
  }
});
