const locationFilter = document.getElementById('location-filter');
const priceRangeFilter = document.getElementById('price-range-filter');
const popularityFilter = document.getElementById('popularity-filter');
const serviceList = document.getElementById('service-list');

function filterServices() {
  const location = locationFilter.value;
  const price = priceRangeFilter.value;
  const popularity = popularityFilter.value;

  const services = serviceList.querySelectorAll('.service-item');

  services.forEach(service => {
    const matchesLocation = !location || service.dataset.location === location;
    const matchesPrice = !price || service.dataset.price === price;
    const matchesPopularity = !popularity || service.dataset.popularity === popularity;

    if (matchesLocation && matchesPrice && matchesPopularity) {
      service.classList.remove('hidden');
    } else {
      service.classList.add('hidden');
    }
  });
}

locationFilter.addEventListener('change', filterServices);
priceRangeFilter.addEventListener('change', filterServices);
popularityFilter.addEventListener('change', filterServices);