<template>
  <nav class="navbar" aria-label="Main navigation">
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo -->
      <div
        class="text-2xl font-bold text-primary hover:text-highlight cursor-pointer"
        aria-label="Homepage logo"
      >
        mr.wam
      </div>

      <!-- Centered Navigation Links for Desktop -->
      <ul class="hidden md:flex space-x-6 flex-1 justify-center" aria-label="Primary navigation">
        <NavLink v-for="link in navLinks" :key="link.label" :to="link.path" :label="link.label" />
      </ul>

      <!-- "Let's Talk" ButtonComponent -->
      <div class="hidden md:block">
        <router-link to="/contact">
          <ButtonComponent variant="primary">Let’s Talk</ButtonComponent>
        </router-link>
      </div>

      <!-- Hamburger Menu Icon for Mobile -->
      <div
        @click="toggleMenu"
        class="md:hidden cursor-pointer text-3xl text-primary"
        aria-label="Toggle mobile menu"
        aria-expanded="isMenuOpen"
      >
        ☰
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-secondary shadow-md"
        aria-label="Mobile navigation menu"
        role="menu"
      >
        <ul
          class="flex flex-col items-center space-y-4 py-4"
          aria-label="Mobile primary navigation"
        >
          <NavLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.path"
            :label="link.label"
            @click="toggleMenu"
          />
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import NavLink from '@/components/NavLink.vue'

export default {
  name: 'NavbarComponent',
  components: { ButtonComponent, NavLink },
  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        { label: 'Home', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Work', path: '/work' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
  watch: {
    // Close mobile menu when navigating to a new route
    $route() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure it's on top of other elements */
  background-color: #333; /* Add a background color to avoid transparency issues */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for emphasis */
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease;
}
.slide-down-enter,
.slide-down-leave-to {
  max-height: 0;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-active {
  max-height: 300px; /* Adjust as needed */
}
</style>
