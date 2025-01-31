<template>
  <div>
    <h1>My Projects</h1>
    <p>Showcase of past work.</p>
    <section class="bg-light py-16">
      <h3 class="text-3xl font-semibold text-center text-dark mb-10">Featured Work</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div v-for="work in featuredWorks" :key="work.title" class="p-4 bg-white shadow rounded-lg">
          <img :src="work.image" :alt="work.title" class="rounded-md mb-4" />
          <h4 class="text-xl font-semibold mb-2">{{ work.title }}</h4>
          <p class="text-gray-600">{{ work.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import work1 from '../assets/images/work-1.png'
import work2 from '../assets/images/work-2.png'
import work3 from '../assets/images/work-3.png'

export default {
  name: 'WorkPage',
  data() {
    return {
      featuredWorks: [
        { title: 'Old Soul', description: 'Interior Design & Consultation', image: work1 },
        { title: 'Mastin Labs', description: 'Photo Projects & Launch Lists', image: work2 },
        { title: 'Boundless Bits', description: 'SaaS Product Design', image: work3 },
      ],
    }
  },
}
</script>

<style scoped>
.bg-light {
  background-color: #f9fafb;
}
.text-dark {
  color: #1f2937;
}
</style>
