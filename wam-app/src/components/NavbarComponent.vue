<template>
  <nav class="w-full bg-secondary text-accent py-4 fixed top-0 left-0 z-50 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold text-primary">mr.wam</div>

      <!-- Centered Navigation Links for Desktop -->
      <ul class="hidden md:flex space-x-6 flex-1 justify-center">
        <li>
          <router-link to="/" class="hover:text-highlight accent-colors">Home</router-link>
        </li>
        <li>
          <router-link to="/services" class="hover:text-highlight transition-colors"
            >Services</router-link
          >
        </li>
        <li>
          <router-link to="/work" class="hover:text-highlight transition-colors">Work</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-highlight transition-colors"
            >About</router-link
          >
        </li>
      </ul>

      <!-- "Let's Talk" ButtonComponent -->
      <div class="hidden md:block">
        <router-link to="/contact">
          <ButtonComponent variant="primary">Let’s Talk</ButtonComponent>
        </router-link>
      </div>

      <!-- Hamburger Menu Icon for Mobile -->
      <div @click="toggleMenu" class="md:hidden cursor-pointer text-3xl text-primary">☰</div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="isMenuOpen" class="md:hidden bg-secondary shadow-md">
        <ul class="flex flex-col items-center space-y-4 py-4">
          <li>
            <router-link @click="toggleMenu" to="/" class="hover:text-highlight transition-colors"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMenu"
              to="/services"
              class="hover:text-highlight transition-colors"
              >Services</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMenu"
              to="/work"
              class="hover:text-highlight transition-colors"
              >Work</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMenu"
              to="/about"
              class="hover:text-highlight transition-colors"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMenu"
              to="/contact"
              class="hover:text-highlight transition-colors"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'NavbarComponent',
  components: { ButtonComponent },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style>
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
