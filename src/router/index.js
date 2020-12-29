import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestingApi from '../views/TestingApi.vue'
import CategoriesApi from '../views/CategoriesApi.vue'
import SubcategoriesApi from '../views/SubcategoriesApi.vue'
import ItemsApi from '../views/ItemsApi.vue'
import OrdersApi from '../views/OrdersApi.vue'
import BrandsApi from '../views/BrandsApi.vue'
import ItemCardApi from '../views/ItemCardApi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/testingapi',
    name: 'TestingApi',
    component: TestingApi
  },
  {
    path: '/categories',
    name: 'CategoriesApi',
    component: CategoriesApi
  },
  {
    path: '/subcategories',
    name: 'SubcategoriesApi',
    component: SubcategoriesApi
  },
  {
    path: '/items',
    name: 'ItemsApi',
    component: ItemsApi
  },
  {
    path: '/orders',
    name: 'OrdersApi',
    component: OrdersApi
  },
  {
    path: '/brands',
    name: 'BrandsApi',
    component: BrandsApi
  },
  {
    path: '/itemcard',
    name: 'ItemCardApi',
    component: ItemCardApi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
