import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import fullscreen from 'vue-fullscreen'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'swiper/dist/css/swiper.css'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUlQ2UnHRR6KdlQJPjUhglxigfHMGTjyI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
})

Vue.use(Vuetify)
Vue.use(fullscreen)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
