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
  let typingSpeed = 100; // ms

  function typeEffect() {
    const currentSentence = sentences[sentenceIndex];

    if (isDeleting) {
      typewriter.innerHTML = currentSentence.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // faster delete
    } else {
      typewriter.innerHTML = currentSentence.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // normal typing
    }

    if (!isDeleting && charIndex === currentSentence.length) {
      isDeleting = true;
      typingSpeed = 1500; // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      typingSpeed = 500; // pause before typing next
    }

    setTimeout(typeEffect, typingSpeed);
  }
  typeEffect();

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("toggle");
  });

  // Optional: close menu when a link is clicked
  const links = document.querySelectorAll(".nav-links li a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("toggle");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const skillBoxes = document.querySelectorAll(".skill-box");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85; // adjust sensitivity

    skillBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load in case some are already visible
});


document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal, .skill-box");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show"); // remove if you want reset on scroll up
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutGrids = document.querySelectorAll(".about .grid1, .about .grid2");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.2 });

  aboutGrids.forEach(grid => observer.observe(grid));
});

