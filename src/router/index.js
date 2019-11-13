import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/createList.vue')
  },
  // {
  //   path: '/view/:id',
  //   name: 'view-List',
  //   component: () => import('../views/ViewList.vue')
  // },
  {
    path: '/edit/:id',
    name: 'edit-List',
    component: () => import('../views/EditList.vue')
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

export default router
