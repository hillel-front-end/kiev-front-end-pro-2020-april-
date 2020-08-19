import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import NotFound from '../views/NotFound.vue'
import store from '@/store/index'


Vue.use(VueRouter)

// /foo

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// to - куда идем
// from -- откуда
// next()

router.beforeEach(async (to, from, next) => {
  const isAuthRoute = to.name && to.name.toLowerCase() == 'auth';

  if(isAuthRoute) {
    next();
    return;
  }
  const isExistUserInfo = store.getters['GET_USER_INFO'];

  if(!isExistUserInfo) {
    try {
      await store.dispatch('asyncSignIn');
      next();
      return;
    } catch (e) {
      next('/auth');
    }
  }

  next();
})

export default router
