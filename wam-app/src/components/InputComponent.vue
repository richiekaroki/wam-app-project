<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :class="computedClasses"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const computedClasses = computed(
      () =>
        'px-4 py-2 border rounded-md focus:outline-none focus:border-primary text-gray-800 w-full',
    )
    return { computedClasses }
  },
})
</script>

<style scoped>
input {
  transition: border-color 0.3s ease;
}
</style>
