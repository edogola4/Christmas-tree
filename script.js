// script.js
const snowflakes = document.querySelector('.snowflakes');
const snowIntensity = document.getElementById('snow-intensity');
const treeSize = document.getElementById('tree-size');
const treeLayers = document.querySelectorAll('.layer');

function createSnowflake() {
  const flake = document.createElement('div');
  flake.className = 'snowflake';
  flake.style.left = `${Math.random() * 100}vw`;
  flake.style.animationDuration = `${3 + Math.random() * 5}s`;
  snowflakes.appendChild(flake);
  setTimeout(() => flake.remove(), 8000);
}

setInterval(() => {
  for (let i = 0; i < snowIntensity.value; i++) createSnowflake();
}, 500);

treeSize.addEventListener('input', () => {
  treeLayers.forEach((layer, index) => {
    const size = treeSize.value * (1 + index / 4);
    layer.style.borderWidth = `0 ${size}px ${size / 1.5}px ${size}px`;
  });
});

// Add lights dynamically
const lights = document.querySelector('.lights');
for (let i = 0; i < 10; i++) {
  const light = document.createElement('div');
  lights.appendChild(light);
}
