import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enter',
    name: 'Enter',
    component: () => import('../views/enter.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('../views/join.vue')
  },
  {
    path: '/create-profile',
    name: 'CreateProfile',
    component: () => import('../views/createprofile.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/index.vue'),
    children: [
      {
        path: 'available-hrs',
        component: () => import('../views/user/hr-profiles.vue'),
      },
      {
        path: 'calendar',
        component: () => import('../views/user/calendar.vue'),
      },
      {
        path: 'profile',
        component: () => import('../views/user/profile.vue'),
      },
      {
        path: 'hr-profile',
        component: () => import('../views/user/hr-profile.vue'),
      },
      {
        path: 'meeting',
        component: () => import('../views/user/meeting.vue'),
      },
    ]
  },
  {
    path: '/hr',
    name: 'hr',
    component: () => import('../views/hr/index.vue'),
    children: [
      {
        path: 'commission',
        component: () => import('../views/hr/commission.vue'),
      },
      {
        path: 'calendar',
        component: () => import('../views/hr/calendar.vue'),
      },
      {
        path: 'profile',
        component: () => import('../views/hr/profile.vue'),
      },
      {
        path: 'meeting',
        component: () => import('../views/hr/meeting.vue'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/index.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/admin/dashboard.vue'),
      },
      {
        path: 'commission',
        component: () => import('../views/admin/commission.vue'),
      },
      {
        path: 'users',
        component: () => import('../views/admin/users.vue'),
      },
      {
        path: 'hrs',
        component: () => import('../views/admin/hrs.vue'),
      },
      {
        path: 'settings',
        component: () => import('../views/admin/settings.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
