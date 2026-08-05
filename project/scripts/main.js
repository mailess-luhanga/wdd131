// Movie Review Hub - W06 Project

// Navigation menu
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.textContent = navigation.classList.contains('open') ? '✕' : '☰';
    });
}

// Default movie reviews (array of objects)
const defaultReviews = [
    {
        title: 'Dune: Part Two',
        rating: 5,
        review: 'An epic science fiction film with stunning visuals and excellent performances.'
    },
    {
        title: 'Oppenheimer',
        rating: 5,
        review: 'A powerful historical drama with brilliant storytelling and acting.'
    },
    {
        title: 'Spider-Man: Across the Spider-Verse',
        rating: 4.5,
        review: 'Creative animation and emotional storytelling make it unforgettable.'
    }
];

// Get reviews from localStorage
function getStoredReviews() {
    return JSON.parse(localStorage.getItem('movieReviews')) || [];
}

// Save reviews to localStorage
function saveReviews(reviews) {
    localStorage.setItem('movieReviews', JSON.stringify(reviews));
}

// Display reviews on reviews.html
function displayUserReviews(reviews) {
    const container = document.querySelector('#user-reviews');

    if (!container) return;

    if (reviews.length === 0) {
        container.innerHTML = '<p>No community reviews have been submitted yet.</p>';
        return;
    }

    container.innerHTML = reviews.map(review => `
        <article class="movie-card">
            <h3>${review.title}</h3>
            <p class="rating">Rating: ${review.rating}/5</p>
            <p>${review.review}</p>
            <p><strong>Reviewer:</strong> ${review.name}</p>
        </article>
    `).join('');
}

// Update review count on home page
function updateReviewCount() {
    const countElement = document.querySelector('#review-count');

    if (!countElement) return;

    const stored = getStoredReviews();
    countElement.textContent = defaultReviews.length + stored.length;
}

// Search reviews
function setupSearch() {
    const searchInput = document.querySelector('#search-input');
    const reviewCards = document.querySelectorAll('#reviews-container .movie-card');

    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();

        reviewCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();

            // Conditional branching
            if (title.includes(term)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Handle form submission
function setupForm() {
    const form = document.querySelector('#review-form');
    const message = document.querySelector('#form-message');

    if (!form) return;

    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const title = document.querySelector('#title').value.trim();
        const reviewText = document.querySelector('#review').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!rating) {
            message.textContent = 'Please select a rating.';
            return;
        }

        // Object creation
        const review = {
            name,
            title,
            review: reviewText,
            rating: Number(rating.value)
        };

        const reviews = getStoredReviews();
        reviews.push(review);
        saveReviews(reviews);

        message.textContent = `Thank you, ${name}! Your review has been saved.`;

        form.reset();

        setTimeout(() => {
            window.location.href = 'reviews.html';
        }, 1500);
    });
}

// Initialize page
function initialize() {
    updateReviewCount();
    displayUserReviews(getStoredReviews());
    setupSearch();
    setupForm();
}

initialize();