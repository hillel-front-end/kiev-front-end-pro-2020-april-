import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Foo from '../views/Foo.vue'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {roles:['admin', 'user']},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {roles:['admin']},
    component: About
  },
  {
    path: '/foo',
    name: 'Foo',
    meta: {roles:['admin', 'user']},
    component: Foo,
    
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
// router.beforeEach((to, from, next) => {
//   console.log('TO route', to);

//   const role = store.getters.getRole;

//   if(to.meta.roles.indexOf(role) >= 0) {
//     next()
//   } else {
//     console.log('go home');
//   }
// })

export default router
