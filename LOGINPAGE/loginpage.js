// Function to toggle password visibility
function togglePassword(inputId) {
    const passwordField = document.getElementById(inputId);
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
  
  // Function to handle login
  function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    if (email === '' || password === '') {
      alert('Please fill in all fields.');
    } else {
      alert(`Logged in as: ${email}`);
    }
  }
  
  // Function to handle signup
  function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    if (name === '' || email === '' || password === '') {
      alert('Please fill in all fields.');
    } else {
      alert(`Welcome, ${name}! Your account has been created.`);
      closeSignup();
    }
  }
  
  // Function to show signup form
  function showSignup() {
    document.getElementById('signup-section').style.display = 'flex';
  }
  
  // Function to close signup form
  function closeSignup() {
    document.getElementById('signup-section').style.display = 'none';
  }
  