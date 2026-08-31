// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ===== Close Mobile Menu on Link Click =====
const mobileNavLinks = document.querySelectorAll('#mobile-menu a');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// ===== Contact Form Handling =====
// Wait until DOM is ready
/*document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_aliivxs", "template_8lfq6kg", this)
      .then(function() {
        alert("Thank you for your message! I will get back to you soon.");
        form.reset(); // optional: clears the form after submission
      }, function(error) {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  });
});

// ===== Contact Form Handling =====
// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("contact-status"); // new element

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_aliivxs", "template_8lfq6kg", this)
      .then(function() {
        statusMessage.innerText = "Thank you for your message! I will get back to you soon.";
        statusMessage.style.color = "green"; // optional styling
        form.reset(); // clears the form after submission
      }, function(error) {
        console.error("FAILED...", error);
        statusMessage.innerText = "Oops! Something went wrong. Please try again.";
        statusMessage.style.color = "red";
      });
  });
});*/


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("contact-status");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_aliivxs", "template_8lfq6kg", this)
      .then(function() {
        statusMessage.className = "success";
        statusMessage.innerText = "Thank you for your message! I will get back to you soon.";
        form.reset();
      }, function(error) {
        console.error("FAILED...", error);
        statusMessage.className = "error";
        statusMessage.innerText = "Oops! Something went wrong. Please try again.";
      });
  });
});






// ===== Scroll Reveal Animation =====
function revealOnScroll() {
  const elements = document.querySelectorAll('.project-card, .skill-pill, .testimonial-card');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.project-card, .skill-pill, .testimonial-card');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  setTimeout(revealOnScroll, 300);
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
