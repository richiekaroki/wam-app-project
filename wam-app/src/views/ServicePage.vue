<template>
  <section class="py-16 text-center bg-light" id="services">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8">Our Services</h2>
      <p class="text-muted mb-12 max-w-lg mx-auto">
        Explore the wide range of services we offer to enhance your experience.
      </p>
      <!-- Loading State -->
      <template v-if="loading">
        <div class="spinner-container">
          <div class="spinner">Loading...</div>
        </div>
      </template>

      <!-- Services Grid -->
      <template v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="p-6 bg-white shadow-md rounded-lg service-card"
          >
            <font-awesome-icon
              :icon="service.icon"
              class="text-primary text-4xl mb-4"
              aria-label="Service icon"
            />
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-muted mb-4">{{ service.description }}</p>
            <router-link :to="service.link">
              <button class="btn-primary" aria-label="Learn more about {{ service.title }}">
                Learn More
              </button>
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine, faCode, faLifeRing } from '@fortawesome/free-solid-svg-icons'

library.add(faChartLine, faCode, faLifeRing)

export default {
  name: 'ServicePage',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      loading: true,
      services: [],
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
      this.services = [
        {
          title: 'Consulting',
          description: 'Expert consulting to guide your projects successfully.',
          icon: ['fas', 'chart-line'],
          link: '/services/consulting',
        },
        {
          title: 'Development',
          description: 'Custom development tailored to your needs.',
          icon: ['fas', 'code'],
          link: '/services/development',
        },
        {
          title: 'Support',
          description: 'Comprehensive support for all your solutions.',
          icon: ['fas', 'life-ring'],
          link: '/services/support',
        },
      ]
    }, 2000)
  },
}
</script>

<style scoped>
.bg-light {
  background-color: #f9f9f9;
}
.text-muted {
  color: #777;
}
.btn-primary {
  background-color: #c2a666;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
}
.btn-primary:hover {
  background-color: #a88a4d;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
.service-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #c2a666;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
