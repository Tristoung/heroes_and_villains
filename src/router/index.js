import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/CurrentTeamView.vue')
  },
  {
    path: '/teamList',
    name: 'teamList',
    component: () => import('../views/TeamListView.vue')
  },
  {
    path: '/organisation',
    name: 'organisation',
    component: () => import('../views/CurrentOrganisationView.vue')
  },
  {
    path: '/organisationList',
    name: 'organisationList',
    component: () => import('../views/OrganisationListView.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
