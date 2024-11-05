<template>
  <div>
    <NavbarComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
}
</script>

<style></style>
