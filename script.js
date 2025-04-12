// Add scroll-to-top button HTML element
document.body.insertAdjacentHTML('beforeend', '<button class="scroll-top">↑</button>');

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Show/hide scroll-to-top button
const scrollBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});

// Smooth scroll to top when button is clicked
scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Add animation to elements when they come into view
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Initialize sections with default styles
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});