/* =========================================================
   Chiikawa Live - Script File
   Handles discussion/comment actions only
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // DISCUSSION / COMMENTS SECTION
  // ===============================
  const form = document.querySelector(".discussion-form");
  const input = form ? form.querySelector("input") : null;
  const list = document.querySelector(".discussion-list");
  const headerCount = document.querySelector(".discussion-header p");

  if (form && input && list && headerCount) {
    let commentCount = document.querySelectorAll(".comment-item").length;

    // Function: Update post counter
    const updateCommentCount = () => {
      headerCount.textContent = `${commentCount} post${
        commentCount !== 1 ? "s" : ""
      } today`;
    };

    updateCommentCount();

    // Handle comment posting
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const text = input.value.trim();
      if (text === "") return;

      commentCount++;

      // Create comment container
      const newComment = document.createElement("div");
      newComment.classList.add("comment-item");

      // Add avatar
      const avatar = document.createElement("img");
      avatar.src = "res/placeholder.png";
      avatar.alt = "User Profile";
      avatar.classList.add("comment-avatar");

      // Add content
      const content = document.createElement("div");
      content.classList.add("comment-content");

      const commentText = document.createElement("p");
      commentText.innerHTML = `<strong>${commentCount}. GuestUser:</strong> ${text}`;

      content.appendChild(commentText);
      newComment.appendChild(avatar);
      newComment.appendChild(content);

      // Append to list
      list.appendChild(newComment);

      // Smooth scroll to bottom
      list.scrollTo({
        top: list.scrollHeight,
        behavior: "smooth",
      });

      // Clear input & update counter
      input.value = "";
      updateCommentCount();
    });
  }

  console.log("💬 Discussion system ready (Hamburger removed)");
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active"); // changes color of bars
  });
});
