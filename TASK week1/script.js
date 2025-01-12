// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
  
    // Attach an event listener to the form's submit event
    signupForm.addEventListener("submit", (event) => {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
  
      // Check if the passwords match
      if (password !== confirmPassword) {
        // Prevent form submission
        event.preventDefault();
  
        // Show an alert to the user
        alert("Passwords do not match. Please try again.");
      } else {
        alert("Form submitted successfully!");
      }
    });
  });  