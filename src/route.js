import User from './components/componet/User.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path:'/user', component: User},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router