<template>
  <section class="bg-light py-16">
    <h2 class="text-3xl font-semibold text-center text-dark mb-10">Get in Touch</h2>
    <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <!-- Name Field -->
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Name</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="w-full px-4 py-2 border rounded-md"
          placeholder="Your Name"
          :class="{ 'border-red-500': errors.name }"
        />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <!-- Email Field -->
      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="w-full px-4 py-2 border rounded-md"
          placeholder="Your Email"
          :class="{ 'border-red-500': errors.email }"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <!-- Message Field -->
      <div class="mb-4">
        <label for="message" class="block text-gray-700">Message</label>
        <textarea
          v-model="formData.message"
          id="message"
          class="w-full px-4 py-2 border rounded-md"
          rows="4"
          placeholder="Your Message"
        ></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-accent text-white py-2 rounded-md"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
    <p v-if="successMessage" class="text-green-500 text-center mt-4">{{ successMessage }}</p>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      errors: {},
      isSubmitting: false,
      successMessage: '',
    }
  },
  methods: {
    validateForm() {
      const errors = {}

      // Basic validation
      if (!this.formData.name) errors.name = 'Name is required'
      if (!this.formData.email) errors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(this.formData.email))
        errors.email = 'Enter a valid email address'
      if (!this.formData.message) errors.message = 'Message is required'

      this.errors = errors
      return Object.keys(errors).length === 0
    },
    async handleSubmit() {
      if (!this.validateForm()) return

      this.isSubmitting = true
      this.successMessage = ''

      try {
        // Simulate form submission (replace with actual submission logic)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        this.successMessage = 'Message sent successfully!'
        this.formData = { name: '', email: '', message: '' } // Clear form
      } catch (error) {
        console.error('Form submission failed', error)
      } finally {
        this.isSubmitting = false
      }
    },
  },
}
</script>

<style scoped>
/* Focus input fields */
input:focus,
textarea:focus {
  outline: none;
  border-color: #ff5a5f;
}

/* Success/Error Styles */
input.border-red-500,
textarea.border-red-500 {
  border-color: #f87171;
}

/* Success Message */
.text-green-500 {
  color: #10b981;
}
</style>
