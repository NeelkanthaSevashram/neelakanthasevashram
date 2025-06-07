// Select elements
const faders = document.querySelectorAll('.fade-up');
const fadeDownElements = document.querySelectorAll('.fade-down');
const sections = document.querySelectorAll('.section');

// Helper function to check if 45% of the element is visible
function is45PercentVisible(rect, height) {
  const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
  return visibleHeight >= height * 0.40;
}

// Scroll animation handler
function handleScrollAnimations() {
  // Handle fade-up animations
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    const height = el.offsetHeight;
    if (is45PercentVisible(rect, height)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });

  // Handle fade-down animations
  fadeDownElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const height = el.offsetHeight;
    if (is45PercentVisible(rect, height)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });

  // Handle fade-top and fade-bottom on section blocks
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const height = section.offsetHeight;
    const isVisible = is45PercentVisible(rect, height);

    section.classList.toggle('fade-bottom', isVisible);
    section.classList.toggle('fade-top', isVisible);
  });
}

// Trigger on scroll and on page load
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);
