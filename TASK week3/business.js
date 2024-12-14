// Array to store businesses temporarily
let businesses = [];

// Handle form submission
document.getElementById('business-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const services = document.getElementById('services').value;
  const image = document.getElementById('image').files[0];

  // Simple validation
  if (!name || !address || !services) {
    alert('Please fill in all fields!');
    return;
  }

  // Create a business object
  const newBusiness = {
    name,
    address,
    services,
    image: image ? URL.createObjectURL(image) : ''
  };

  // Save to array
  businesses.push(newBusiness);

  // Clear form fields
  document.getElementById('business-form').reset();

  // Display updated list
  renderBusinesses();
});

// Render businesses on the page
function renderBusinesses() {
  const listContainer = document.getElementById('businesses-list');
  listContainer.innerHTML = ''; // Clear existing list

  businesses.forEach((business, index) => {
    const businessItem = document.createElement('div');
    businessItem.classList.add('business-item');
    businessItem.innerHTML = `
      <h3>${business.name}</h3>
      <p><strong>Address:</strong> ${business.address}</p>
      <p><strong>Services:</strong> ${business.services}</p>
      ${business.image ? `<img src="${business.image}" alt="Business Image" width="100">` : ''}
    `;
    listContainer.appendChild(businessItem);
  });
}
