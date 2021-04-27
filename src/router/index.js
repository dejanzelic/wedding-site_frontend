import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import config from '../config.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/WeddingInfo.vue')
  }
]

if (!config.SAVE_THE_DATE_VIEW) {
  // Routes availible if not in Save the Date view
  routes.push({
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
    })
}

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
