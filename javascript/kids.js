// Get DOM elements
const header = document.querySelector('[data-header]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navBar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

// Header sticky & go to top
window.addEventListener('scroll', function () {
  if (window.scrollY >= 80) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Nav toggle
const navElems = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener('click', function () {
    navBar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

// Color options toggle
const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach(option => {
  option.addEventListener('click', function() {
    const parent = this.closest('.product-card');
    const currentActive = parent.querySelector('.color-option.active');
    if (currentActive) currentActive.classList.remove('active');
    this.classList.add('active');
  });
});