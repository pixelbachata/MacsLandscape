<template>
    <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav class="grid grid-flow-col gap-4">
            <a class="link link-hover" @click.prevent="scrollToAbout">About Me</a>
            <router-link to="/gallery" class="link link-hover">Gallery</router-link>
            <a class="btn" href="tel:+19105995647">Contact Us</a>
        </nav>
        <aside>
            <p>Copyright © {{ year }} - All right reserved by Mac's landscaping</p>
        </aside>
    </footer>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const year = new Date().getFullYear()
const router = useRouter()
const route = useRoute()

function scrollToAbout() {
    if (route.path !== '/') {
        router.push('/').then(() => {
            setTimeout(() => {
                const aboutSection = document.getElementById('about-me-section')
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' })
                }
            }, 300)
        })
    } else {
        const aboutSection = document.getElementById('about-me-section')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
