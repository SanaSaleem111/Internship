// Static data for businesses
const businesses = [
  { id: 1, name: 'Pizza', description: 'Best pizza', address: 'Bahria Town phase 6 Islamabad.', phone: '0312-1234567', services: ['Dine-in', 'Takeout'] },
  { id: 2, name: 'Burger', description: 'Yummiest burger', address: 'Bahria Town phase 8 Islamabad.', phone: '0313-9876543', services: ['Dine-in', 'Takeout'] },
  { id: 3, name: 'Sushi Bar', description: 'Fresh sushi', address: 'Bahria Town phase 2 Islamabad.', phone: '0314-1011234', services: ['Dine-in', 'Takeout'] },
  { id: 4, name: 'Fries', description: 'Crispy Fries', address: 'Bahria Town phase 3 Islamabad.', phone: '0333-5566432', services: ['Dine-in', 'Takeout'] },
  { id: 5, name: 'Pasta', description: 'Delicious Pasta', address: 'Bahria Town phase 4 Islamabad.', phone: '0342-6354327', services: ['Dine-in', 'Takeout'] },
  { id: 6, name: 'Health Clinic', description: 'Health checkups', address: 'Jinnah Hospital Lahore.', phone: '0310-3421670', services: ['Checkup', 'Vaccinations'] },
  { id: 7, name: 'Dentist Office', description: 'Dental care services', address: 'Jinnah Hospital Lahore.', phone: '0304-8765900', services: ['Fillings', 'Cleaning'] },
  { id: 8, name: 'Cardiologiest office', description: 'Heart specialist', address: 'Jinnah Hospital Lahore.', phone: '0322-6289867', services: ['Operate', 'Checking'] },
  { id: 9, name: 'Dermatologiest Office', description: 'Skin care services', address: 'Jinnah Hospital Lahore.', phone: '0312-1234567', services: ['Checking', 'Services'] },
  { id: 10, name: 'Neurologist Office', description: 'Brain specialist', address: 'Jinnah Hospital Lahore.', phone: '0313-9876543', services: ['Checing', 'Operate'] },
  { id: 11, name: 'Luxury', description: 'Comfortable and cozy rooms', address: 'Serena Hotel Islamabad.', phone: '0314-1011234', services: ['stay', 'Room Service'] },
  { id: 12, name: 'Beach Resort', description: 'Beachside relaxation', address: 'Serena Hotel Islamabad.', phone: '0333-5566432', services: ['Swimming', 'Dining'] },
  { id: 13, name: 'Business Hotels', description: 'Best for Meetings', address: 'Serena Hotel Islamabad.', phone: '0342-6354327', services: ['Stay', 'Meeting'] },
  { id: 14, name: 'Independent Hotels', description: 'Provide local services', address: 'Marriot Hotel Islamabad.', phone: '0310-3421670', services: ['Chilling', 'Stay'] },
  { id: 15, name: 'Chain Hotels', description: 'Set their values', address: 'Serena Hotel Islamabad.', phone: '0304-8765900', services: ['Check in', 'check out'] },
  { id: 16, name: 'Coding Academy', description: 'Learn programming skills', address: 'UOG Gujrat.', phone: '0322-6289867', services: ['Physical', 'Online'] },
  { id: 17, name: 'Language School', description: 'Master a new language', address: 'UOG Gujrat.', phone: '0312-1234567', services: ['Physical', 'Online'] },
  { id: 18, name: 'Hacker Place', description: 'Hacking expert trainer', address: 'UOG Gujrat.', phone: '0313-9876543', services: ['Physical', 'Online'] },
  { id: 19, name: 'OOP Languages', description: 'Learn different languages', address: 'UOG Gujrat.', phone: '0314-1011234', services: ['Physical', 'Online'] },
  { id: 20, name: 'Scripted Language', description: 'Learn for future', address: 'UOG Gujrat.', phone: '0333-5566432', services: ['Physical', 'Online'] }
];

// Extract business ID from URL
const urlParams = new URLSearchParams(window.location.search);
const businessId = parseInt(urlParams.get('id')) || '1';

// Display business details
function renderBusinessDetails() {
  const business = businesses.find((b) => b.id === businessId);
  const detailsContainer = document.getElementById('business-details');

  if (!business) {
    detailsContainer.innerHTML = '<p>Business not found</p>';
    return;
  }

  detailsContainer.innerHTML = `
    <h2>${business.name}</h2>
    <p>${business.description}</p>
    <p><strong>Address:</strong> ${business.address}</p>
    <p><strong>Phone:</strong> ${business.phone}</p>
    <h3>Services:</h3>
    <ul>
      ${business.services.map((service) => `<li>${service}</li>`).join('')}
    </ul>
  `;
}

// Render on page load
document.addEventListener('DOMContentLoaded', renderBusinessDetails);
