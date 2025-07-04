import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue' // Import the new Home component
import Gallery from './components/Gallery.vue'

const routes = [
  { path: '/', component: Home }, // Use Home for the root path
  { path: '/gallery', component: Gallery }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
