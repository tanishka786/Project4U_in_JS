const swatchWraps = document.querySelectorAll('.swatch-wrap');
const body = document.querySelector('body');
const currentColorLabel = document.getElementById('current-color');
const statusDot = document.getElementById('status-dot');

swatchWraps.forEach(function (wrap) {
  wrap.addEventListener('click', function () {
    const color = wrap.getAttribute('data-color');
    const name  = wrap.getAttribute('data-name');

    // Apply background
    body.style.backgroundColor = color;

    // Update status pill
    currentColorLabel.textContent = name;
    statusDot.style.background = color;

    // Toggle active class on swatches
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    wrap.querySelector('.swatch').classList.add('active');
  });
});
