import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from "@/views/NotFoundPage.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "About",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
    {
    path: '/weather',
    name: 'Weather',
    meta: {
      title: "Weather-App",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Weather-App.vue')
  },
  {
    path: '/login',
    name: 'Login-Signup',
    meta: {
      title: "Login-Signup",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login-Signup.vue')
  },
    {
    path: '/projects',
    name: 'Projects',
    meta: {
      title: "Projects",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Projects.vue')
  },
  { path: "*", component: NotFound }
]

const router = new VueRouter({
  routes
})

export default router
