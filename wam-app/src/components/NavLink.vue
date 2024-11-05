<template>
  <li>
    <router-link :to="to" class="hover:text-highlight" aria-label="Navigate to {{ label }}">
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
      type: String,
      required: true,
    },
  },
};
</script>
