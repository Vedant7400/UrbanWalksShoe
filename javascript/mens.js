// Handle color option selection
document.addEventListener('DOMContentLoaded', () => {
  const colorOptions = document.querySelectorAll('.color-option');
  
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const parent = option.closest('.product-card');
      const allOptions = parent.querySelectorAll('.color-option');
      
      // Remove active class from all options
      allOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to selected option
      option.classList.add('active');
    });
  });

  // Handle action buttons
  const actionButtons = document.querySelectorAll('.action-btn');
  
  actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Add animation class
      btn.classList.add('clicked');
      
      // Remove animation class after animation completes
      setTimeout(() => {
        btn.classList.remove('clicked');
      }, 300);
    });
  });
});