const destinations = [
    { flag: "Australia", image: "assets/Australia_dest.svg" },
    { flag: "Canada", image: "assets/canada_dest.svg" },
    { flag: "Malaysia", image: "assets/Malaysia_dest.svg" },
    { flag: "New Zealand", image: "assets/newzeland_dest.svg" },
    { flag: "Sweden", image: "assets/sweden_dest.svg" },
    { flag: "UK", image: "assets/uk_dest.svg" },
];

let currentIndex = 0;
let cardWidth = 320; // Must match CSS .card width
let cardMarginRight = 32; // Must match CSS .card margin-right
let autoSlideInterval;

const track = document.getElementById('carousel-track');
const viewport = document.getElementById('carousel-viewport');
const indicatorsContainer = document.getElementById('indicators');

// --- Core Functions ---

/**
 * Renders all cards and indicators based on the destinations array.
 */
function renderCarousel() {
    track.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    // Re-calculate dimensions for responsiveness
    if (window.innerWidth < 768) {
        cardWidth = 250;
        cardMarginRight = 24;
    } else {
        cardWidth =250;
        cardMarginRight = 32;
    }

    destinations.forEach((dest, index) => {
        // 1. Create Card Element
        const cardDiv = document.createElement('div');
        cardDiv.className = `card relative group cursor-pointer active:scale-90 duration-300`;
        cardDiv.dataset.index = index;
        // Set the width based on the JS variable for responsiveness
        cardDiv.style.width = `${cardWidth}px`;
        cardDiv.style.height = `${cardWidth + 50}px`; // Maintain aspect ratio if needed, or stick to CSS height

        // Set content
        cardDiv.innerHTML = `
                    <!-- Background Image with Fallback -->
                    <img src="${dest.image}" alt="${dest.name}" 
                         class="absolute inset-0 w-full h-full object-cover">
                    
                    <!-- Content Overlay -->
                    <div class="absolute inset-0 flex flex-col  justify-end p-6">
                        <div class="flag-overlay py-2 px-4 rounded-lg flex  bg-white/80 backdrop-blur-xl flex-col items-center justify-center">
                            <a href="${dest.link}"><h3 class="text-white text-lg font-black text-center"> ${dest.flag}</h3></a>
                        </div>
                    </div>
                `;

        cardDiv.onclick = () => {
            setCurrentIndex(index);
            resetAutoSlide();
        };
        track.appendChild(cardDiv);

        // 2. Create Indicator Button
        const indicatorButton = document.createElement('button');
        indicatorButton.className = 'w-3 h-3 rounded-full transition-colors duration-300 bg-gray-300';
        indicatorButton.dataset.index = index;
        indicatorButton.onclick = () => {
            setCurrentIndex(index);
            resetAutoSlide();
        };
        indicatorsContainer.appendChild(indicatorButton);
    });
}

/**
 * Updates the carousel position and the visual style of all cards.
 */
function updateCarousel() {
    const viewportWidth = viewport.offsetWidth;
    const fullCardWidth = cardWidth + cardMarginRight;

    // 1. Calculate the necessary translation to center the current card (currentIndex)
    // Total distance moved up to the start of the current card:
    const targetPosition = currentIndex * fullCardWidth;

    // Offset needed to center the card within the viewport:
    const centerOffset = (viewportWidth / 2) - (cardWidth / 2);

    // Final transform: move left by the target position, then shift right by the center offset.
    const transformValue = centerOffset - targetPosition;

    track.style.transform = `translateX(${transformValue}px)`;

    // 2. Update Card Visuals (Scale and Opacity)
    const cards = track.querySelectorAll('.card');
    const indicators = indicatorsContainer.querySelectorAll('button');

    cards.forEach((card, index) => {
        const isCurrent = index === currentIndex;
        const isAdjacent = Math.abs(index - currentIndex) === 1;

        // Apply Active State
        if (isCurrent) {
            card.style.transform = 'scale(1)'; // Fully active/original size
            card.style.opacity = 1;
            card.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
        }
        // Apply Side Card State
        else if (isAdjacent || Math.abs(index - currentIndex) === 2) {
            // Slight scale and opacity reduction for adjacent cards
            card.style.transform = 'scale(0.85)';
            card.style.opacity = 0.7;
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
        }
        // Apply Far Card State (even smaller/fainter)
        else {
            card.style.transform = 'scale(0.8)';
            card.style.opacity = 0.5;
            card.style.boxShadow = 'none';
        }
    });

    // 3. Update Indicators
    indicators.forEach((btn, index) => {
        btn.classList.toggle('bg-purple-700', index === currentIndex);
        btn.classList.toggle('bg-gray-300', index !== currentIndex);
    });
}

/**
 * Sets the current index and triggers the visual update.
 * @param {number} newIndex 
 */
function setCurrentIndex(newIndex) {
    if (newIndex < 0) {
        currentIndex = destinations.length - 1;
    } else if (newIndex >= destinations.length) {
        currentIndex = 0;
    } else {
        currentIndex = newIndex;
    }
    updateCarousel();
}

// --- Navigation Logic ---

function nextSlide() {
    setCurrentIndex(currentIndex + 1);
}

function prevSlide() {
    setCurrentIndex(currentIndex - 1);
}

// --- Auto-Sliding Logic ---

/**
 * Starts the auto-sliding timer.
 */
function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000); // Slide every 4 seconds
}

/**
 * Resets the auto-sliding timer (used when a user manually interacts).
 */
function resetAutoSlide() {
    startAutoSlide(); // Simply restart the timer
}

// --- Initialization ---

function init() {
    renderCarousel();
    updateCarousel(); // Initial rendering
    startAutoSlide(); // Start the automatic slide show

    // Event Listeners for buttons
    document.getElementById('next-btn').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    document.getElementById('prev-btn').addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    // Re-align on window resize
    window.addEventListener('resize', () => {
        // Re-calculate card sizes and margins on resize
        renderCarousel();
        // Then update the carousel position
        updateCarousel();
    });
}

window.onload = init;