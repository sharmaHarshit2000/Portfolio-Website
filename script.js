document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navlist = document.querySelector(".navlist");

  menuToggle.addEventListener("click", () => {
    navlist.classList.toggle("active");
  });

  // Close navlist when a link is clicked (for mobile)
  navlist.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navlist.classList.remove("active");
    });
  });

  // --- "Change Text" Animation (Placeholder for dynamic text) ---
  const words = [
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  let i = 0;
  const wordSpan = document.querySelector(".change-text .word");

  // Function to update the word
  function changeWord() {
    wordSpan.textContent = words[i];
    i = (i + 1) % words.length;
  }

  setInterval(changeWord, 3000);
  changeWord();

  // --- Active Navigation Link Scrolling ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navlist a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // --- Project Filtering ---
  const filterButtons = document.querySelectorAll(".filter-buttons .btn");
  const portfolioItems = document.querySelectorAll(
    ".protfolio-gallery .port-box"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      portfolioItems.forEach((item) => {
        if (filter === "all" || item.dataset.filter === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // --- Contact Form Submission ---
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    contactForm.style.display = "none";
    successMessage.style.display = "block";

    contactForm.reset();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
