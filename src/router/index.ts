import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  // {
  //   // path: '/about',
  //   // name: 'About',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
