<template>
    <div class="bg-base-200 py-16 sm:py-20">
        <!-- Added max-w-screen-xl for Tailwind-driven max width -->
        <div class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold tracking-tight text-base-content sm:text-4xl mb-12">
                Our Landscaping Services
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
                <div v-for="service in services" :key="service.name"
                    class="flex flex-col items-center p-6 bg-base-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div class="flex-shrink-0">
                        <!-- Using <i> tag for Bootstrap Icons. Added inline-block and align-middle -->
                        <i :class="[service.iconClass, 'inline-block align-middle h-12 w-12 text-primary text-[2.5rem]']"
                            aria-hidden="true"></i>
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-semibold text-base-content">
                            {{ service.name }}
                        </h3>
                    </div>
                </div>
            </div>
            <p class="mt-12 text-lg text-base-content/80">
                And a lot more, just ask! We're here to help with all your landscaping needs.
            </p>
        </div>
    </div>
</template>

<script setup>
import { shallowRef } from 'vue';

// Note: Bootstrap Icons are typically included via a CSS link in your main HTML or imported globally in your project.
// Example: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
// Or install via npm: npm install bootstrap-icons and import 'bootstrap-icons/font/bootstrap-icons.css';

// shallowRef is used for components to optimize performance if they don't need deep reactivity
const services = shallowRef([
    { name: 'Lawn Mowing', iconClass: 'bi bi-scissors' },
    { name: 'Lawn Care', iconClass: 'bi bi-shield-check' }, // Fallback to a shield-check icon
    { name: 'Planting Services', iconClass: 'bi bi-flower1' },
    { name: 'Trimming Work', iconClass: 'bi bi-tree-fill' },
    { name: 'Mulch & Bed Care', iconClass: 'bi bi-layers-fill' },
    { name: 'Seasonal Cleanups', iconClass: 'bi bi-trash3-fill' },
    { name: 'Sod Installation', iconClass: 'bi bi-grid-fill' },
    { name: 'Irrigation', iconClass: 'bi bi-water' },
    { name: 'Power Washing', iconClass: 'bi bi-droplet-fill' },
])
</script>

<style scoped>
/* You can add any additional component-specific styles here if needed */
/* DaisyUI and Tailwind classes should handle most styling */
/* Custom .container and .bi styles have been replaced by Tailwind utility classes in the template. */
</style>
