import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/i/:inviteCode',
    name: 'RSVP',
    component: () => import('../views/Invite.vue'),
    meta: {
      requiresGuests: true
    }
  },
  {
    path: '/i/:inviteCode/q',
    name: 'Additional Information',
    component: () => import('../views/AdditionalInfo.vue'),
    meta: {
      requiresGuests: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresGuests)) {
    store.dispatch("fetchGuests", to.params.inviteCode);
  }
  next()
})
export default router
