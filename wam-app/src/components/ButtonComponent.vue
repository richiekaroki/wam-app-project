<template>
  <button :class="computedClasses" @click="onClick">
    <slot />
  </button>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const computedClasses = computed(() => {
      const baseClasses = 'px-4 py-2 rounded-md transition-colors'
      const variants = {
        primary: 'bg-primary text-accent hover:bg-primaryDark',
        secondary: 'bg-secondary text-accent hover:bg-gray-700',
      }
      return `${baseClasses} ${variants[props.variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`
    })

    const onClick = (event) => {
      if (!props.disabled) emit('click', event)
    }

    return {
      computedClasses,
      onClick,
    }
  },
})
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
