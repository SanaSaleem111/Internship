// script.js

const data = [
    { id: 1, name: 'iPhone 12', location: 'Gujrat', category: 'electronics', subCategory: 'phones', popularity: 'high' },
    { id: 2, name: 'MacBook Pro', location: 'Gujrat', category: 'electronics', subCategory: 'laptops', popularity: 'medium' },
    { id: 3, name: 'Leather Jacket', location: 'Islamabad', category: 'clothing', subCategory: 'clothing', popularity: 'low' },
    { id: 4, name: 'Sofa Set', location: 'Gujrat', category: 'home-goods', subCategory: 'furniture', popularity: 'high' },
    { id: 5, name: 'Washing Machine', location: 'Lahore', category: 'home-goods', subCategory: 'furniture', popularity: 'medium' },
    { id: 6, name: 'AirPods', location: 'Gujrat', category: 'electronics', subCategory: 'phones', popularity: 'low' },
    { id: 7, name: 'iPhone 13', location: 'Islamabad', category: 'electronics', subCategory: 'phones', popularity: 'high' },
    { id: 8, name: 'MacBook', location: 'Lahore', category: 'electronics', subCategory: 'laptops', popularity: 'medium' },
    { id: 9, name: 'Leather Jacket', location: 'Lahore', category: 'clothing', subCategory: 'clothing', popularity: 'low' },
    { id: 10, name: 'Sofa Set', location: 'Lahore', category: 'home-goods', subCategory: 'furniture', popularity: 'high' },
    { id: 11, name: 'Washing Machine', location: 'Lahore', category: 'home-goods', subCategory: 'furniture', popularity: 'medium' },
    { id: 12, name: 'AirPods', location: 'Islamabad', category: 'electronics', subCategory: 'phones', popularity: 'low' },
  ];
  
  function filterResults() {
    const locationFilter = document.getElementById('location').value;
    const categoryFilter = document.getElementById('category').value;
    const subCategoryFilter = document.getElementById('sub-category').value;
    const popularityFilter = document.getElementById('popularity').value;
  
    const filteredData = data.filter(item => {
      return (locationFilter === 'any' || item.location === locationFilter) &&
             (categoryFilter === 'any' || item.category === categoryFilter) &&
             (subCategoryFilter === 'any' || item.subCategory === subCategoryFilter) &&
             (popularityFilter === 'any' || item.popularity === popularityFilter);
    });
  
    displayResults(filteredData);
  }
  
  function displayResults(results) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear previous results
  
    if (results.length > 0) {
      results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.location} - ${item.category} - ${item.popularity}`;
        resultsList.appendChild(li);
      });
    } else {
      resultsList.innerHTML = '<li>No results found.</li>';
    }
  }
  
  document.querySelectorAll('.filter').forEach(filter => {
    filter.addEventListener('change', filterResults);
  });
  
  filterResults(); // Initial load of all results  