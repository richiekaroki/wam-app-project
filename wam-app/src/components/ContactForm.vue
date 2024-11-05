<template>
  <section class="bg-light py-16">
    <h2 class="text-3xl font-semibold text-center text-dark mb-10">Get in Touch</h2>
    <form class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <div class="mb-4">
        <label class="block text-gray-700">Name</label>
        <input type="text" class="w-full px-4 py-2 border rounded-md" placeholder="Your Name" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input type="email" class="w-full px-4 py-2 border rounded-md" placeholder="Your Email" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Message</label>
        <textarea
          class="w-full px-4 py-2 border rounded-md"
          rows="4"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button type="submit" class="w-full bg-accent text-white py-2 rounded-md">
        Send Message
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>
