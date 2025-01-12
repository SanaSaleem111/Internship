// Static data for categories and subcategories (add an image property for each business)
const categories = {
  Food: [
    { name: 'Pizza', description: 'Best pizza', link: 'business.html?id=1', image: 'pizza.jpeg' },
    { name: 'Burger', description: 'Yummiest burger', link: 'business.html?id=2', image: 'burger.jpeg' },
    { name: 'Sushi Bar', description: 'Fresh sushi', link: 'business.html?id=3', image: 'sushi.jpeg' },
    { name: 'Fries', description: 'Crispy Fries', link: 'business.html?id=4', image: 'fries.jpeg' },
    { name: 'Pasta', description: 'Delicious Pasta', link: 'business.html?id=5', image: 'pasta.jpeg' }
  ],
  Healthcare: [
    { name: 'Health Clinic', description: 'Health checkups', link: 'business.html?id=6', image: 'health.jpeg' },
    { name: 'Dentist Office', description: 'Dental care services', link: 'business.html?id=7', image: 'dentist.jpeg' },
    { name: 'Cardiologist office', description: 'Heart specialist', link: 'business.html?id=8', image: 'cardio.jpeg' },
    { name: 'Dermatologist Office', description: 'Skin care services', link: 'business.html?id=9', image: 'dermatologist.jpeg' },
    { name: 'Neurologist Office', description: 'Brain specialist', link: 'business.html?id=10', image: 'neurologist.jpeg' }
  ],
  Hotels: [
    { name: 'Luxury', description: 'Comfortable and cozy', link: 'business.html?id=11', image: 'luxury.jpeg' },
    { name: 'Beach Resort', description: 'Beachside relaxation', link: 'business.html?id=12', image: 'beach.jpeg' },
    { name: 'Business Hotels', description: 'Best for Meetings', link: 'business.html?id=13', image: 'business.jpeg' },
    { name: 'Independent Hotels', description: 'Provide local services', link: 'business.html?id=14', image: 'independent.jpeg' },
    { name: 'Chain Hotels', description: 'Set their values', link: 'business.html?id=15', image: 'chain.jpeg' }
  ],
  Education: [
    { name: 'Coding Academy', description: 'Learn programming skills', link: 'business.html?id=16', image: 'coding.jpeg' },
    { name: 'Language School', description: 'Master a new language', link: 'business.html?id=17', image: 'language.jpeg' },
    { name: 'Hacker Place', description: 'Hacking expert trainer', link: 'business.html?id=18', image: 'hacker.jpeg' },
    { name: 'OOP Languages', description: 'Learn different languages', link: 'business.html?id=19', image: 'oop.jpeg' },
    { name: 'Scripted Language', description: 'Learn for future', link: 'business.html?id=20', image: 'scripted.jpeg' }
  ]
};

// Extract category name from URL
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get('category') || 'Food'

// Display category and subcategories
function renderCategory() {
  const categoryNameElement = document.getElementById('category-name');
  const businessListContainer = document.getElementById('business-list');

  if (!categoryName || !categories[categoryName]) {
    categoryNameElement.textContent = 'Category not found';
    return;
  }

  categoryNameElement.textContent = `Businesses in ${categoryName}`;
  const businesses = categories[categoryName];

  businesses.forEach((business) => {
    const businessCard = document.createElement('div');
    businessCard.className = 'business-card';
    businessCard.innerHTML = `
      <img src="${business.image}" alt="${business.name}" class="business-image">
      <h3>${business.name}</h3>
      <p>${business.description}</p>
      <a href="${business.link}">View Details</a>
    `;
    businessListContainer.appendChild(businessCard);
  });
}

// Render on page load
document.addEventListener('DOMContentLoaded', renderCategory);