const lightboxContainer = document.querySelector('.lightbox-container');
const lightbox = document.querySelector('.lightbox');
const carouselImage = lightbox.querySelector('.carousel-image');
const thumbnails = document.querySelectorAll('.thumbnail img');

let currentImageIndex = 0;

// Array of image sources for the carousel
const carouselImages = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
  // Add more carousel image sources as needed
];

// Function to open the lightbox with a specific image index
function openLightbox(index) {
  currentImageIndex = index;
  const imageSrc = carouselImages[index];
  carouselImage.src = imageSrc;
  lightbox.style.display = 'block';
  // Show thumbnail prev and next buttons
  prevButton.style.display = 'block';
  nextButton.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
  // Hide thumbnail prev and next buttons
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
}

// Function to navigate to the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
  openLightbox(currentImageIndex);
}

// Function to navigate to the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  openLightbox(currentImageIndex);
}

// Initialize the lightbox with the first thumbnail image
openLightbox(0);

// Attach click event listeners to thumbnails
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    openLightbox(index);
  });
});

// Handle keyboard navigation for the lightbox
document.addEventListener('keydown', (event) => {
  if (lightbox.style.display === 'block') {
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  }
});
