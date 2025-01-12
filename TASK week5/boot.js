const priceSlider = document.getElementById('price-slider');
const locationFilter = document.getElementById('location-filter');
const popularityFilter = document.getElementById('popularity-filter');
const serviceList = document.getElementById('service-list');

function filterServices() {
  const maxPrice = parseInt(priceSlider.value, 10);
  const location = locationFilter.value;
  const popularity = popularityFilter.value;

  const services = serviceList.querySelectorAll('.service-item');

  services.forEach(service => {
    const servicePrice = parseInt(service.dataset.price, 10);
    const matchesPrice = servicePrice <= maxPrice;
    const matchesLocation = !location || service.dataset.location === location;
    const matchesPopularity = !popularity || service.dataset.popularity === popularity;

    if (matchesPrice && matchesLocation && matchesPopularity) {
      service.parentElement.style.display = '';
    } else {
      service.parentElement.style.display = 'none';
    }
  });
}

priceSlider.addEventListener('input', filterServices);
locationFilter.addEventListener('change', filterServices);
popularityFilter.addEventListener('change', filterServices);