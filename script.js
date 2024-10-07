function toggleForm(form) {
  if (form === 'signup') {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('signup-form').style.display = 'block';
  } else {
      document.getElementById('signup-form').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
  }
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  alert(`Logged in with email: ${email}`);
}

function signup() {
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
  }

  alert(`Signed up with username: ${username}, email: ${email}`);
}

function createStarField() {
  const starField = document.getElementById('star-field');
  const numStars = 200;
  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const duration = Math.random() * 10 + 5;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}px`;
      star.style.top = `${posY}px`;
      star.style.animationDuration = `${duration}s`;

      starField.appendChild(star);
  }
}

window.onload = createStarField;
