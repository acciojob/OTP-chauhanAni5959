// Select all OTP input boxes
const codes = document.querySelectorAll('.code');

// Focus on the first input when the page loads
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    // Allow only numbers and Backspace
    if (e.key >= 0 && e.key <= 9) {
      code.value = e.key; // set value directly to typed number
      e.preventDefault(); // prevent extra typing

      // Move focus to next box if exists
      if (idx < codes.length - 1) {
        codes[idx + 1].focus();
      }
    } else if (e.key === 'Backspace') {
      code.value = ''; // clear current box
      e.preventDefault();

      // Move focus to previous box if exists
      if (idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });

  // If user clicks on a box, clear its value first
  code.addEventListener('focus', () => {
    code.select();
  });
});
