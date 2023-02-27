import Vue from 'vue'
import VueRouter from 'vue-router'
import promise from '../views/promise.vue'
import Verticalcenter from '../views/Verticalcenter.vue'
import BoxModel from '../views/Boxmodel.vue'
import input from '../views/input.vue'
import password from '../views/password.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'promise',
    component: promise
  },
  {
    path: '/Verticalcenter',
    name: 'Verticalcenter',
    component: Verticalcenter
  },
  {
    path: '/BoxModel',
    name: 'BoxModel',
    component: BoxModel
  },
  {
    path: '/input',
    name: 'input',
    component: input
  },
  {
    path: '/password',
    name: 'password',
    component: password
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
