import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path:'map',
          name:'map',
          component: () => import('@/views/map')
        },
        {
          path:'/',
          name:'circle',
          component: () => import('@/views/circle')
        },
        {
          path:'radar',
          name:'radar',
          component: () => import('@/views/radar')
        }
      ]
    }
  ]
})
