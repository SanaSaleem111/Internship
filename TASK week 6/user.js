// Script for handling review filters and user preferences
document.addEventListener("DOMContentLoaded", () => {
    const ratingFilter = document.getElementById("rating-filter");
    const sortReviews = document.getElementById("sort-reviews");
    const displayCategories = document.getElementById("display-categories");
    const displayBudget = document.getElementById("display-budget");
    const profileForm = document.querySelector(".profile-form");

    // Filter reviews by rating
    ratingFilter.addEventListener("change", () => {
        const selectedRating = ratingFilter.value;
        const reviews = document.querySelectorAll(".review");

        reviews.forEach((review) => {
            const rating = parseInt(review.dataset.rating);

            if (selectedRating === "all" || rating >= parseInt(selectedRating)) {
                review.style.display = "block";
            } else {
                review.style.display = "none";
            }
        });
    });

    // Sort reviews
    sortReviews.addEventListener("change", () => {
        const reviewsContainer = document.querySelector(".reviews");
        const reviews = Array.from(reviewsContainer.children);
        const sortBy = sortReviews.value;

        reviews.sort((a, b) => {
            if (sortBy === "recent") {
                return b.dataset.rating - a.dataset.rating; // Example sorting by rating
            } else if (sortBy === "helpful") {
                return b.dataset.helpful - a.dataset.helpful || 0; // Example sorting by helpfulness
            }
        });

        reviews.forEach(review => reviewsContainer.appendChild(review));
    });

    // Save user preferences
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const categories = document.getElementById("fav-categories").value;
        const budget = document.getElementById("budget").value;

        displayCategories.textContent = categories || "None";
        displayBudget.textContent = budget || "None";

        alert("Preferences saved successfully!");
    });
});