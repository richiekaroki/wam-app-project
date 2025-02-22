<template>
  <div class="bg-footer-gradient text-accent">
    <footer
      class="grid grid-cols-1 md:grid-cols-12 py-16 max-w-[1200px] mx-auto gap-8 px-6 border-t border-gray-600"
    >
      <!-- Brand Logo & Email Subscription (Left) -->
      <div class="flex flex-col gap-6 md:col-span-4 md:justify-start">
        <h4 class="text-2xl font-bold text-primary">mr.wam</h4>
        <p class="text-muted">
          Sign up to receive updates, news, and special offers directly in your inbox.
        </p>
        <form @submit.prevent="handleSubscribe" class="flex space-x-2">
          <InputComponent
            type="email"
            placeholder="Enter your email"
            v-model="email"
            required
            :class="{ 'border-red-500': emailError }"
          />
          <ButtonComponent variant="primary">Subscribe</ButtonComponent>
        </form>
        <p v-if="emailError" class="text-red-500">{{ emailError }}</p>
        <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
      </div>

      <!-- Quick Links (Center) -->
      <div class="md:col-span-4 md:flex md:flex-col md:items-center">
        <h5 class="font-semibold mb-4 text-lg">Quick Links</h5>
        <ul class="space-y-2 text-center md:text-left">
          <li v-for="(link, index) in quickLinks" :key="index">
            <router-link :to="link.path" class="hover:text-highlight transition-colors">{{
              link.label
            }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Social Media Links (Right) -->
      <div class="md:col-span-4 flex flex-col gap-6 md:items-end">
        <h5 class="font-semibold mb-4 text-lg">Follow Us</h5>
        <div class="flex space-x-4 text-2xl">
          <a
            v-for="(social, index) in socialMediaLinks"
            :key="index"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="hover:text-highlight transition-colors"
          >
            <font-awesome-icon :icon="social.icon" />
          </a>
        </div>
      </div>
    </footer>

    <!-- Copyright Notice -->
    <div class="text-center py-4 text-muted">
      &copy; {{ currentYear }} mr.wam. All rights reserved.
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import InputComponent from '@/components/InputComponent.vue'

export default {
  name: 'FooterComponent',
  components: { InputComponent, ButtonComponent },
  data() {
    return {
      email: '',
      successMessage: '',
      quickLinks: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
      ],
      socialMediaLinks: [
        { label: 'Facebook', url: 'https://facebook.com', icon: ['fab', 'facebook'] },
        { label: 'Twitter', url: 'https://twitter.com', icon: ['fab', 'twitter'] },
        { label: 'Instagram', url: 'https://instagram.com', icon: ['fab', 'instagram'] },
      ],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    emailError() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return this.email && !emailPattern.test(this.email)
        ? 'Please enter a valid email address.'
        : ''
    },
  },
  methods: {
    handleSubscribe() {
      if (this.emailError) return

      // Simulate subscription logic (e.g., API call)
      this.successMessage = `Subscribed with email: ${this.email}`
      this.email = '' // Clear the input field after submission
    },
  },
}
</script>

<style scoped>
.bg-footer-gradient {
  background: linear-gradient(to bottom, #1a1a1a, #333);
}
.text-muted {
  color: #999;
}
.text-highlight {
  color: #ff5a5f;
}
</style>
