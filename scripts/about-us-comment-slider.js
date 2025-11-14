 document.addEventListener('DOMContentLoaded', () => {
            const wrapper = document.querySelector('.comments-wrapper');
            const rightArrow = document.querySelector('.right-arrow');
            const leftArrow = document.querySelector('.left-arrow');
            const card = document.querySelector('.testimonial-card');

            // Calculate the exact distance to slide, including card width and margin
            // This ensures perfect alignment regardless of screen size (though fixed width is better for sliders)
            const cardWidth = card.offsetWidth;
            const cardStyle = window.getComputedStyle(card);
            const cardMarginRight = parseFloat(cardStyle.marginRight);
            const cardMarginLeft = parseFloat(cardStyle.marginLeft);
            
            // The distance needed to slide one card to the left, which is card width + one gap's worth of margin
            const slideDistance = cardWidth + cardMarginLeft + cardMarginRight; 

            let currentSlideIndex = 0; // Tracks the index of the first visible comment (0, 2, 4, 6, 8, 10)
            const commentsPerView = 2;
            const totalComments = 12; 
            // The maximum index the first visible comment can be (12 - 2 = 10)
            const maxSlideIndex = totalComments - commentsPerView; 

            /**
             * Updates the CSS transform property to move the slider.
             */
            function updateSliderPosition() {
                // The wrapper is moved by the cumulative distance needed
                const translateXValue = -currentSlideIndex * slideDistance; 
                wrapper.style.transform = `translateX(${translateXValue}px)`;
                
                // Update arrow states (enable/disable)
                leftArrow.disabled = currentSlideIndex === 0;
                rightArrow.disabled = currentSlideIndex >= maxSlideIndex;
            }

            /**
             * Handles the Right Arrow click.
             */
            rightArrow.addEventListener('click', () => {
                if (currentSlideIndex < maxSlideIndex) {
                    // Move by 2 comments (the number visible at one time)
                    currentSlideIndex += commentsPerView; 
                    updateSliderPosition();
                }
            });

            /**
             * Handles the Left Arrow click.
             */
            leftArrow.addEventListener('click', () => {
                if (currentSlideIndex > 0) {
                    // Move back by 2 comments
                    currentSlideIndex -= commentsPerView; 
                    updateSliderPosition();
                }
            });

            // Initial call to set the arrow states correctly (left arrow disabled)
            updateSliderPosition();
        });