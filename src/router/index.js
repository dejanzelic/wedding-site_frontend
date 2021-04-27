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
    component: Home,
    meta: {
      title: 'Home Page',
    }
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/WeddingInfo.vue'),
    meta: {
      title: 'When and Where',
    }
  },
  {
    path: '/ourstory',
    name: 'OurStory',
    component: () => import('../views/OurStory.vue'),
    meta: {
      title: 'Our Story',
    }
  }
]

if (!config.SAVE_THE_DATE_VIEW) {
  // Routes availible if not in Save the Date view
  routes.push({
    path: '/i/:inviteCode',
    name: 'RSVP',
    component: () => import('../views/Invite.vue'),
    meta: {
      requiresGuests: true,
      title: 'RSVP'
    }
  },
    {
      path: '/i/:inviteCode/q',
      name: 'Additional Information',
      component: () => import('../views/AdditionalInfo.vue'),
      meta: {
        requiresGuests: true,
        title: 'Questions'
      }
    })
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title + " - " + config.SITE_TITLE;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title + " - " + config.SITE_TITLE;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresGuests)) {
    store.dispatch("fetchGuests", to.params.inviteCode);
  }
  next()
})
export default router
