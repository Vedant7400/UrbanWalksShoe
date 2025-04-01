'use strict';

// Mobile menu functionality
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('nav-active');
}

navTogglers.forEach(function (toggler) {
  toggler.addEventListener('click', toggleNavbar);
});

// Form validation and submission
const contactForm = document.querySelector('.contact-form form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic form validation
  let isValid = true;
  
  if (!nameInput.value.trim()) {
    isValid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }
  
  if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }
  
  if (!messageInput.value.trim()) {
    isValid = false;
    messageInput.classList.add('error');
  } else {
    messageInput.classList.remove('error');
  }
  
  if (isValid) {
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  }
});

// Email validation helper function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Remove error class on input
const formInputs = [nameInput, emailInput, messageInput];
formInputs.forEach(input => {
  input.addEventListener('input', function() {
    this.classList.remove('error');
  });
});