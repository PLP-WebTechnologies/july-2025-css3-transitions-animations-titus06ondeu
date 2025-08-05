// Global variable
let isBoxVisible = false;

// Reusable function with parameters and return value
function toggleVisibility(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return false;

  el.style.display = el.style.display === 'none' ? 'block' : 'none';
  return el.style.display;
}

// Example of local scope
function logDisplayState() {
  let state = toggleVisibility('toggleBox');
  console.log('Box is now:', state);
}
