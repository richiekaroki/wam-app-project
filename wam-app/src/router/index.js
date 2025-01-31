import { createRouter, createWebHistory } from 'vue-router'

// Import your components for routing
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import HomePage from '../views/HomePage.vue'
import ServicePage from '../views/ServicePage.vue'
import WorkPage from '../views/WorkPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicePage,
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
