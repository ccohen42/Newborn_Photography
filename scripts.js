document.addEventListener('DOMContentLoaded', () => {
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    // Select the lightbox and its image
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    // Select the close button
    const closeBtn = document.querySelector('.close');

    // Add click event to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Display the lightbox and set the image source
            lightbox.style.display = 'block';
            lightboxImg.src = item.src;
        });
    });

    // Add click event to the close button
    closeBtn.addEventListener('click', () => {
        // Hide the lightbox
        lightbox.style.display = 'none';
    });

    // Add click event to the lightbox (outside the image)
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            // Hide the lightbox if clicked outside the image
            lightbox.style.display = 'none';
        }
    });

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.mySlides');
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});