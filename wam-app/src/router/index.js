import { createRouter, createWebHistory } from 'vue-router'

// Import your components for routing
import HomePage from '../views/HomePage.vue'
import ServicePage from '../views/ServicePage.vue'
import WorkPage from '../views/WorkPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Component for the Home page
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicePage, // Component for the Services page
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage, // Component for the Work page
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage, // Component for the About page
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage, // Component for the Contact page
  },
]

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes, // Short for `routes: routes`
})

export default router
