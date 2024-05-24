import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NumberBaseballView from '../views/NumberBaseballView.vue'
import ModalTestView from '../views/ModalTestView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/game',
      name: 'game',
      component: NumberBaseballView
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalTestView
    }
  ]
})

export default router
