import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/pages/auth/Login.vue'), meta : { guestOnly : true } },
  {
    path: '/',
    name: 'admin',
    component: () => import('@/views/Admin.vue'),
    meta : { authOnly : true },
    children: [
      { path: '/dashboard', name: 'dashboard', component: () => import('@/views/pages/dashboard/Index'),meta : { authOnly : true }, },
      { path: '/tool', name: 'tool', component: () => import('@/views/pages/tool/Index'), meta : { authOnly : true }, },
      { path: '/user', name: 'user', component: () => import('@/views/pages/user/Index'), meta : { authOnly : true }, },
      { path: '/profile', name: 'profile', component: () => import('@/views/pages/profile/Index'), meta : { authOnly : true }, }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
function isLoggedIn() {
  return localStorage.getItem("token")
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        //query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    if (isLoggedIn()) {
      next({
        path: '/dashboard', 
        //query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router