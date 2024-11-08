<template>
  <div>
    <HeroSection />
    <ServiceSection />
    <FeaturedWork />
    <TestimonialSection />
    <ContactForm />
  </div>
</template>

<script>
import FeaturedWork from '../components/FeaturedWork.vue'
import HeroSection from '../components/HeroSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    ServiceSection,
    FeaturedWork,
    TestimonialSection,
    ContactForm,
  },
}
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Additional styles for the homepage */
.other-sections {
  background-color: accent; /* Light background for contrast */
}
</style>
