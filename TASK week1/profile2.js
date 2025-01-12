document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const logoutButton = document.getElementById('logoutButton');
  
    // Load profile data from local storage
    function loadProfile() {
      const profileData = JSON.parse(localStorage.getItem('profile'));
      if (profileData) {
        document.getElementById('name').value = profileData.name || '';
        document.getElementById('email').value = profileData.email || '';
        document.getElementById('city').value = profileData.city || '';
      }
    }
  
    // Save profile data to local storage
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const profileData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
      };
  
      localStorage.setItem('profile', JSON.stringify(profileData));
      alert('Profile updated successfully!');
    });
  
    // Logout functionality
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      alert('Logged out successfully!');
      window.location.href = 'login.html';
    });
  
    // Load the profile data when the page is loaded
    loadProfile();
  });  