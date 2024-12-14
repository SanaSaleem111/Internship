// Static data for categories
const categories = [
  { 
      name: 'Food', 
      icon: 'food.jpg',
      link: 'category.html?category=Food' 
  },
  { 
      name: 'Healthcare', 
      icon: 'health.jpg',
      link: 'category.html?category=Healthcare' 
  },
  { 
      name: 'Hotels', 
      icon: 'hotel.jpg', 
      link: 'category.html?category=Hotels' 
  },
  { 
      name: 'Education', 
      icon: 'education.jpg', 
      link: 'category.html?category=Education' 
  }
];

// Function to render categories on the home page
function renderCategories() {
  const categoriesContainer = document.getElementById('categories');

  categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category';
      categoryDiv.innerHTML = `
          <a href="${category.link}">
              <img src="${category.icon}" alt="${category.name}">
              <p>${category.name}</p>
          </a>
      `;
      categoriesContainer.appendChild(categoryDiv);
  });
}

// Run the function when the page has finished loading
document.addEventListener('DOMContentLoaded', renderCategories);