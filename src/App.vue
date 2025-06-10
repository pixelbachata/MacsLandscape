<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
// Carousel and AboutMe will be handled by the Home.vue route
</script>

<template>
  <NavBar />
  <router-view /> 
  <Footer />
</template>

<style scoped></style>
