// import { createApp } from "vue";
// import Vue from "vue"
// import App from "./App.vue";
// import {createRouter,createWebHistory} from "vue-router"
// // import VueRouter from 'vue-router'
// import {routes} from './route'

// // Vue.use(VueRouter)
// // const router = new VueRouter({
// //   routes
// // })
// // const app = createApp(App);
// // app.mount("#app");
// const router = createRouter({
//   history:createWebHistory(),
//   routes
// })
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import route from './route'

const app  = createApp(App)
app.use(route)
app.mount('#app')