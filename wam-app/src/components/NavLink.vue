<template>
  <li>
    <router-link :to="to" class="hover:text-highlight" :aria-label="ariaLabel">
      {{ label }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    ariaLabel() {
      return `Navigate to ${this.label}`;
    },
  },
};
</script>

<style scoped>
.hover\:text-highlight:hover {
  color: var(--highlight-color);
}
</style>
