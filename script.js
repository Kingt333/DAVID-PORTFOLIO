document.addEventListener("DOMContentLoaded", () => {
  // Typewriter effect
  const sentences = [
    "Hello, I'm David.",
    "Welcome to my portfolio",
    "I'm a 300 lvl CS student",
    "Into web development",
    "Going into app dev soon"
  ];
  const typewriter = document.getElementById("typewriter");
  let sentenceIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80; // slightly faster for smoothness

  function typeEffect() {
    const currentSentence = sentences[sentenceIndex];
    if (typewriter) {
      if (isDeleting) {
        typewriter.textContent = currentSentence.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
      } else {
        typewriter.textContent = currentSentence.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
      }

      if (!isDeleting && charIndex === currentSentence.length) {
        isDeleting = true;
        typingSpeed = 1200;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        typingSpeed = 400;
      }
      setTimeout(typeEffect, typingSpeed);
    }
  }
  typeEffect();

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 0);
    }
  });

  // Burger toggle
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");
    });
    // Close menu on link click
    const links = navLinks.querySelectorAll("li a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burger.classList.remove("toggle");
      });
    });
  }

  // Smooth reveal animation for .reveal and .skill-box
  const revealElements = document.querySelectorAll(".reveal, .skill-box");
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
    requestAnimationFrame(revealOnScroll);
  }
  requestAnimationFrame(revealOnScroll);

  // Intersection Observer for .about .grid1, .about .grid2
  const aboutGrids = document.querySelectorAll(".about .grid1, .about .grid2");
  if (aboutGrids.length) {
    const observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    aboutGrids.forEach(grid => observer.observe(grid));
  }
});

