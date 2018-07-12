import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const HomeView = () => import('./Home.vue')
const CartView = () => import('./Cart.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomeView },
      { path: '/cart', component: CartView }
    ]
  })
}