<template>
    <div class="slideshow-wrapper">
        <div class="fade-carousel-container" ref="carouselContainer">
            <div v-for="(image, index) in images" :key="image.id" :id="image.id" class="fade-carousel-item"
                :class="{ 'active': index === currentImageIndex }">
                <img :src="image.src" :alt="image.alt" class="carousel-image" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import img1 from '../assets/iStock-1277398194.jpg'
import img2 from '../assets/iStock-1463062081.jpg'
import img3 from '../assets/iStock-875190458.jpg'

const images = ref([
    { id: 'carouselImg3', src: img3},
    { id: 'carouselImg2', src: img2},
    { id: 'carouselImg1', src: img1 }
]);

const currentImageIndex = ref(0);
const carouselContainer = ref(null); // Kept for potential future use, though not for scrolling in fade
let intervalId = null;
const intervalTime = 3000; // Time image is visible
const transitionTime = 500; // CSS transition time in ms for the fade

function startSlideshow() {
    clearInterval(intervalId);
    // Slideshow starts if there's more than one image
    if (images.value.length > 1) {
        intervalId = setInterval(showNextImage, intervalTime + transitionTime);
    }
}

function stopSlideshow() {
    clearInterval(intervalId);
}

function showNextImage() {
    if (images.value.length === 0) {
        console.warn("No images to display.");
        return;
    }
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
}

onMounted(async () => {
    await nextTick(); // Ensure DOM is ready

    if (images.value.length > 0) {
        // Initial slide is already set by currentImageIndex = 0 and CSS
        if (images.value.length > 1) {
            startSlideshow();
        }
        // Resize listener is removed as per request to not pause on resize
    } else {
        console.warn("No images found to start slideshow.");
    }
});

onBeforeUnmount(() => {
    stopSlideshow();
    // Resize listener removal is also removed as it's no longer added
});
</script>

<style scoped>
.slideshow-wrapper {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    /* Needed for absolute positioning of slides */
    height: 50vh;
    /* Match .carousel-image height or make it dynamic */
}

.fade-carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.fade-carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity v-bind(transitionTime + 'ms') ease-in-out;
}

.fade-carousel-item.active {
    opacity: 1;
    z-index: 1;
    /* Ensure active slide is on top */
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>
