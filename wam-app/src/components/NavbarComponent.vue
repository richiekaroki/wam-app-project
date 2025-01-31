<template>
  <nav class="navbar bg-white shadow-sm" aria-label="Main navigation">
    <div class="container mx-auto flex justify-between items-center px-6 py-4">
      <!-- Logo -->
      <router-link to="/" class="logo text-xl font-bold" aria-label="Homepage logo">
        mr.wam
      </router-link>

      <!-- Centered Navigation Links for Desktop -->
      <ul class="hidden md:flex space-x-8 flex-1 justify-center" aria-label="Primary navigation">
        <NavLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.path"
          :label="link.label"
          class="text-gray-600 hover:text-gray-900 transition-colors"
        />
      </ul>

      <!-- "Let's Talk" Button -->
      <div class="hidden md:block">
        <router-link to="/contact">
          <ButtonComponent
            variant="primary"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Let’s Talk
          </ButtonComponent>
        </router-link>
      </div>

      <!-- Hamburger Menu Icon for Mobile -->
      <div
        @click="toggleMenu"
        class="md:hidden cursor-pointer text-3xl text-gray-600"
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
        class="md:hidden bg-white shadow-md"
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
            class="text-gray-600 hover:text-gray-900"
            @click="toggleMenu"
          />
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: {
    NavLink,
  },
  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
.navbar {
  position: sticky; /* Changed from fixed to avoid layout issues */
  top: 0;
  background-color: white;
  z-index: 50;
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
.slide-down-enter-to,
.slide-down-leave {
  max-height: 300px;
}

/* Remove hover effect on navbar */
.navbar:hover {
  background-color: white;
}
</style>
