<template>
  <section class="bg-light py-16">
    <h3 class="text-3xl font-semibold text-center text-dark mb-10">Featured Work</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div
        v-for="(work, index) in featuredWorks"
        :key="index"
        class="p-4 bg-white shadow rounded-lg"
      >
        <img :src="work.image" :alt="work.title" class="rounded-md mb-4" />
        <h4 class="text-xl font-semibold mb-2">{{ work.title }}</h4>
        <p class="text-gray-600">{{ work.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedWork',
  data() {
    return {
      featuredWorks: [
        {
          title: 'Old Soul',
          description: 'Interior Design & Consultation',
          image: '/assets/old-soul.jpg',
        },
        {
          title: 'Mastin Labs',
          description: 'Photo Projects & Launch Lists',
          image: '/assets/mastin-labs.jpg',
        },
        {
          title: 'Boundless Bits',
          description: 'SaaS Product Design',
          image: '/assets/boundless-bits.jpg',
        },
      ],
    }
  },
}
</script>
