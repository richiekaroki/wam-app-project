// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Tailwind CSS
import './assets/main.css'

// Import Font Awesome core and icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific Font Awesome icons
import { faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Add Font Awesome icons to the library
library.add(faTwitter, faLinkedin, faWhatsapp, faEnvelope)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon) // Register Font Awesome globally
  .use(router)
  .mount('#app')
