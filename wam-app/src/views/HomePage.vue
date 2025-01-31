<template>
  <div>
    <HeroSection />
    <ServiceSection />
    <FeaturedWork />
    <TestimonialSection />
    <ContactForm />
    <button v-show="showBackToTop" @click="scrollToTop" class="back-to-top">↑</button>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import FeaturedWork from '../components/FeaturedWork.vue'
import HeroSection from '../components/HeroSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    ServiceSection,
    FeaturedWork,
    TestimonialSection,
    ContactForm,
  },
  data() {
    return {
      showBackToTop: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
  background-color: #f9f9f9; /* Light background for contrast */
  padding: 2rem 0;
}

/* Hero section styles */
.hero-section {
  background: url('../assets/hero-bg.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 5rem 0;
  text-align: center;
}

/* Back to top button styles */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #333;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  display: none;
}

.back-to-top:hover {
  background-color: #555;
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0;
  }
}
</style>
