<template>
  <div>
    <HeroSection />
    
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';

export default {
  name: 'HomePage',
  components: {
    HeroSection,
  },
};
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Additional styles for the homepage */
.other-sections {
  background-color: #f7f7f7; /* Light background for contrast */
}
</style>
