import { createRouter, createWebHistory } from 'vue-router'
import Pipeline from '../views/SetupPipeline.vue'

const routes = [
  {
    path: '/',
    name: 'Set Up Pipeline',
    component: Pipeline
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
