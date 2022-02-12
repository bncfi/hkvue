import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Works from '../views/Works.vue'
import Workinfo from '../components/Workinfo.vue'
//import Workinfo from '../views/Workinfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/CV.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
    props: true,
  },
  {
    path: '/works/:id',
    name: 'Workinfo',
    component: Workinfo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
