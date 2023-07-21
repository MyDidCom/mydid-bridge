import { createApp } from 'vue';

import './styles.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueCookies from 'vue-cookies';
import QrCodeVue from 'qrcode.vue';
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

import router from './router.js';
import utils from './plugins/utils';
import api from './plugins/api.js';

import App from './App.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const app = createApp(App);

app.use(router);
app.use(utils);
app.use(api);

app.component('the-header', Header);
app.component('the-footer', Footer);
app.component('qrcode-vue', QrCodeVue);
app.component('custom-loader', BounceLoader);

app.provide('cookies', VueCookies);

app.mount('#app');
