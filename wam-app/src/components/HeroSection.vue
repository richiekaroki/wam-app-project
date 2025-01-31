<template>
  <section class="flex flex-col md:flex-row items-center py-16 bg-light">
    <!-- Left Side: CTA and Button -->
    <div
      class="flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left md:pr-8"
    >
      <h2 class="text-4xl md:text-5xl font-semibold text-dark mb-4">
        Connecting brands with the people they love.
      </h2>
      <p class="text-lg md:text-xl text-gray-600 mb-6">
        Engaging, memorable, and impactful copywriting that drives conversions.
      </p>
      <router-link to="/services">
        <button
          class="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition duration-200"
        >
          See Our Services
        </button>
      </router-link>
    </div>

    <!-- Right Side: Image -->
    <div class="md:w-1/2">
      <img
        src="../assets/images/hero-image.webp"
        alt="A representation of our services"
        class="rounded-md w-full h-auto max-h-[100vh] object-cover"
      />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection',
})
</script>

<style scoped>
/* Optional: Add responsive styles */
@media (max-width: 640px) {
  h2 {
    font-size: 2xl; /* Smaller font size on mobile */
  }

  p {
    font-size: base; /* Adjust paragraph size on mobile */
  }
}
</style>
