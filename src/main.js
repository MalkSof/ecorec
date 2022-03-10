import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: '/producto/:slug', component: require("./pages/Product").default },
  { path: '/', component: require("./pages/Home").default  },
  { path: '/contacto', component: require("./pages/contact").default  },
  { path: '/nosotros', component: require("./pages/Nosotros").default  }
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
