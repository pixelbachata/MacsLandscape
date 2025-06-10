<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div :class="['dropdown', { 'dropdown-open': dropdownOpen }]" ref="dropdownRef">
                <button type="button" class="btn btn-ghost lg:hidden" @click.stop="toggleDropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
                <ul v-if="dropdownOpen"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a @click="scrollToAbout">About Me</a></li>
                    <li><router-link to="/gallery" class="link link-hover">Gallery</router-link></li>
                </ul>
            </div>
            <router-link to="/" class="flex items-center gap-2 cursor-pointer">
                <MenuIcon />
                <span class="text-base font-medium">Mac's Landscape</span>
            </router-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><a @click="scrollToAbout">About Me</a></li>
                <li><router-link to="/gallery">Gallery</router-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn" href="tel:+19105995647">Contact Us</a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuIcon from './MenuIcon.vue'

const dropdownOpen = ref(false)
const dropdownRef = ref(null)
const router = useRouter()
const route = useRoute()

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value
    console.log('dropdownOpen:', dropdownOpen.value);
}

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

function handleClickOutside(event) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        dropdownOpen.value = false
    }
}

// Watch for large screen and close dropdown
let mediaQuery
function handleMediaQuery(e) {
    if (e.matches) {
        dropdownOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    mediaQuery = window.matchMedia('(min-width: 1024px)')
    mediaQuery.addEventListener('change', handleMediaQuery)
    // Close dropdown if already on large screen
    if (mediaQuery.matches) dropdownOpen.value = false
})
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
    if (mediaQuery) mediaQuery.removeEventListener('change', handleMediaQuery)
})
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
