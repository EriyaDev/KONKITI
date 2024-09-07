const togglePasswordIcon = document.querySelector("#togglePassword");
const passwordInput = document.getElementById("password");
const toggleText = document.getElementById("toggleText");

// Function to toggle password visibility
function togglePasswordVisibility() {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  
  // Update icon and text based on the input type
  togglePasswordIcon.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
  toggleText.textContent = type === "text" ? "Sembunyikan" : "Tampilkan";
}

// Add event listener to both icon and text
togglePasswordIcon.addEventListener("click", togglePasswordVisibility);
toggleText.addEventListener("click", togglePasswordVisibility);
