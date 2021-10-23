import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueSimpleAlert from "vue-simple-alert"

// import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueSimpleAlert);
// import VueRouter from "vue-router"

// Vue.use(VueRouter);

// import ProductList from "./components/ProductList.vue"
// import ProductAdd from "./components/ProductAdd.vue"
// import ProductUpdate from './components/ProductUpdate.vue'
// import Home from './components/Home.vue'

// import { component } from 'vue/types/umd';

// const router = new VueRouter({
//   routes:[
//     {path:'/',component:Home},
//     // {path: '/home', component: Home},
//     {path: '/productlist', component: ProductList},
//     {path: '/productadd', component:ProductAdd},
//     {path: '/productupdate', component: ProductUpdate}


//   ],
//   mode:'history'
// })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router
}).$mount('#app')
