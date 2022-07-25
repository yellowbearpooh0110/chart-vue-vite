import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './style.css';
import App from './App.vue';
import router from './router';

library.add(faCheck, faPencil);

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(router)
  .use(VueSweetalert2)
  .mount('#app');
