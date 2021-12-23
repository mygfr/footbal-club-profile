import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Club from '../views/Club.vue'
import ClubDetail from '../views/ClubDetail.vue'
import Player from '../views/Player.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/club/:id',
    name: 'Club',
    component: Club
  },
  {
    path: '/club-detail/:id',
    name: 'ClubDetail',
    component: ClubDetail
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: Player
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
