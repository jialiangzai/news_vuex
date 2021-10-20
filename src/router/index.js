import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/list/index.vue'
import Detail from '../views/detail/index.vue'
import Not from '../views/Not/not.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    component: List

  },
  {
    path: '/detail/:id',
    component: Detail

  },
  {
    path: '*',
    component: Not

  }]

const router = new VueRouter({
  routes
})

export default router
