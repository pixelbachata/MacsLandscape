<template>
    <section class="max-w-4xl mx-auto my-12 p-8 bg-base-200 rounded-box shadow">
        <h2 class="text-2xl font-bold mb-6">Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img v-for="(img, i) in images" :key="i" :src="img" class="rounded shadow object-cover w-full h-48" />
        </div>
    </section>
</template>

<script setup>
import img1 from '../assets/view1.jpeg'
import img2 from '../assets/view2.jpg'
import img3 from '../assets/view3.jpg'

const images = [img1, img2, img3]
</script>
