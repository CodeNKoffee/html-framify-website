const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the mesh colors
const colors = ['#F0924E', '#4483D8', '#E3D3C8', '#DE2A5E'];

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the mesh gradient
  for (let y = 0; y < canvas.height; y += 10) {
    for (let x = 0; x < canvas.width; x += 10) {
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 10, 10);
    }
  }
}

function animate() {
  // Schedule the next animation frame
  requestAnimationFrame(animate);

  // Redraw the mesh gradient
  draw();
}

// Start the animation
animate();