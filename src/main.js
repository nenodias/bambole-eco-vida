import Vue from 'vue'
import VueRouter from 'vue-router'
import {MediaQueries, CommonBands} from 'vue-media-queries';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
import './assets/css/style.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(VueRouter)
const mediaQueries = new MediaQueries({
  bands: CommonBands.Bulma
})
Vue.use(mediaQueries)
Vue.use(VueAxios, axios)
Vue.use(Buefy)

import routes from './routes'
import Layout from './Layout.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  routes 
})

new Vue({
  router,
  mediaQueries,
  mixins: [CommonBands.Bulma.mixin],
  render: h => h(Layout),
}).$mount('#app')
