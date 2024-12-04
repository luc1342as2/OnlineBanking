const formTitle = document.getElementById("form-title");
const formButton = document.getElementById("form-button");
const emailField = document.getElementById("email-field");
const toggleMessage = document.getElementById("toggle-message");
const toggleLink = document.getElementById("toggle-link");
const userForm = document.getElementById("user-form");

let isRegisterMode = false;

// Check if the user is already logged in on page load
window.onload = function() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    // Skip login and redirect to homepage if already logged in
    window.location.href = "/Investment Website/homepage.html";
  }
};

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isRegisterMode = !isRegisterMode;
  if (isRegisterMode) {
    formTitle.textContent = "Register";
    formButton.textContent = "Sign Up";
    emailField.classList.remove("hidden");
    toggleMessage.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Sign In here</a>';
  } else {
    formTitle.textContent = "Sign In";
    formButton.textContent = "Login";
    emailField.classList.add("hidden");
    toggleMessage.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Register here</a>';
  }
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = isRegisterMode ? document.getElementById("email").value : null;

  if (isRegisterMode) {
    if (username && password && email) {
      // Register the user (You can save the user data to a database here)
      alert("Registration successful! You can now sign in.");
      userForm.reset();
      toggleLink.click();
    } else {
      alert("Please fill in all required fields.");
    }
  } else {
    // Simulate a sign-in process
    if (username && password) {
      // Store the username or token in localStorage to keep the user logged in
      localStorage.setItem("loggedInUser", JSON.stringify({ username, email }));
      alert("Sign In successful!");
      window.location.href = "/Investment Website/homepage.html";
    } else {
      alert("Please enter valid credentials.");
    }
  }
});
