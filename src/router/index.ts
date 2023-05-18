import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Editor from '../views/Editor.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/editor/:saveName',
    name: 'editor',
    component: Editor,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
