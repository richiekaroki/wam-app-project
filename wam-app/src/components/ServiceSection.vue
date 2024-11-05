<template>
  <section class="py-16 text-center bg-light">
    <h2 class="text-3xl font-semibold text-dark mb-8">Our Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div v-for="(service, index) in services" :key="index" class="p-4 bg-white shadow rounded-lg">
        <h4 class="text-xl font-semibold mb-2">{{ service.name }}</h4>
        <p class="text-gray-600">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceSection',
  data() {
    return {
      services: [
        { name: 'Website Copy', description: 'Engaging website content that converts.' },
        {
          name: 'Email Marketing',
          description: 'Personalized email campaigns to boost engagement.',
        },
        {
          name: 'Social Media Strategy',
          description: 'Effective strategies to grow your audience.',
        },
        // Add more services as needed
      ],
    }
  },
}
</script>
