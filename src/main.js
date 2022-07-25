import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './style.css';
import App from './App.vue';
import router from './router';

library.add(faCheck, faPencil);

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
