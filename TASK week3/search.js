// Example businesses data (same format as Task 1)
const businesses = [
    { name: 'Pizza', category: 'Food', address: 'Behria Town phase 6 Islamabad.' },
    { name: 'Burger', category: 'Yummiest burger', address: 'Bahria Town phase 8 Islamabad.'},
    { name: 'Sushi Bar', category: 'Fresh sushi', address: 'Bahria Town phase 2 Islamabad.' },
    { name: 'Fries', category: 'Crispy Fries', address: 'Bahria Town phase 3 Islamabad.'},
    { name: 'Pasta', category: 'Delicious Pasta', address: 'Bahria Town phase 4 Islamabad.'},
    { name: 'Health Clinic', category: 'Health checkups', address: 'Jinnah Hospital Lahore.'},
    { name: 'Dentist Office', category: 'Dental care services', address: 'Jinnah Hospital Lahore.'},
    { name: 'Cardiologiest office', category: 'Heart specialist', address: 'Jinnah Hospital Lahore.'},
    { name: 'Dermatologiest Office', category: 'Skin care services', address: 'Jinnah Hospital Lahore.'},
    { name: 'Neurologist Office', category: 'Brain specialist', address: 'Jinnah Hospital Lahore.'},
    { name: 'Luxury', category: 'Comfortable and cozy rooms', address: 'Serena Hotel Islamabad.'},
    { name: 'Beach Resort', category: 'Beachside relaxation', address: 'Serena Hotel Islamabad.'},
    { name: 'Business Hotels', category: 'Best for Meetings', address: 'Serena Hotel Islamabad.'},
    { name: 'Independent Hotels', category: 'Provide local services', address: 'Marriot Hotel Islamabad.'},
    { name: 'Chain Hotels', category: 'Set their values', address: 'Serena Hotel Islamabad.'},
    { name: 'Coding Academy', category: 'Learn programming skills', address: 'UOG Gujrat.'},
    { name: 'Language School', category: 'Master a new language', address: 'UOG Gujrat.'},
    { name: 'Hacker Place', category: 'Hacking expert trainer', address: 'UOG Gujrat.'},
    { name: 'OOP Languages', category: 'Learn different languages', address: 'UOG Gujrat.'},
    { name: 'Scripted Language', category: 'Learn for future', address: 'UOG Gujrat.'}
  ];
  
  // Function to filter businesses based on search query
  function filterBusinesses() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = businesses.filter(business => 
      business.name.toLowerCase().includes(query) || business.category.toLowerCase().includes(query)
    );
  
    // Display filtered businesses
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
  
    results.forEach(business => {
      const businessItem = document.createElement('div');
      businessItem.classList.add('business-item');
      businessItem.innerHTML = `
        <h3>${business.name}</h3>
        <p><strong>Category:</strong> ${business.category}</p>
        <p><strong>Address:</strong> ${business.address}</p>
      `;
      resultsContainer.appendChild(businessItem);
    });
  }
  