import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import  Login  from "./pages/Login.vue";

const routes: RouteRecordRaw[] = [{path: "/login", component: Login, name: "login"}]
const router = createRouter({history: createWebHistory(), routes})
createApp(App).use(router).mount('#app')
