<template>
  <section class="bg-primary text-center py-16 text-light">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="testimonial-card p-6 bg-secondary rounded-lg shadow-lg">
        <blockquote class="italic text-lg mb-4">
          <p class="mb-4">
            "Working with Mr. Wam was a dream! They truly understood our brand and connected us with
            our audience in a meaningful way."
          </p>
          <footer class="font-semibold">
            - Sarah Peterson, <span class="text-highlight">Amazon</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialSection',
}
</script>

<style scoped>
.bg-primary {
  background-color: #1a202c; /* Example primary color */
}
.text-light {
  color: #f7fafc; /* Example light text color */
}
.text-highlight {
  color: #ed64a6; /* Example highlight color */
}
.bg-secondary {
  background-color: #2d3748; /* Example secondary background color */
}
.testimonial-card {
  background-color: #2d3748; /* Example card background color */
  color: #f7fafc; /* Example card text color */
}
</style>
