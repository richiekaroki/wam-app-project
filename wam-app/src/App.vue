<template>
  <div id="app">
    <NavbarComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
}
</script>

<style scoped>
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  main {
    padding: 0.5rem;
  }
}
</style>
