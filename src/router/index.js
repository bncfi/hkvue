import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import Works from '../views/Works.vue'
import Workinfo from '../components/Workinfo.vue'
import Imagegallery from '../components/Imagegallery.vue'

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
    component: Workinfo,
    props: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
