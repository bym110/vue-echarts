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
          name:'mobileMaket',
          component: () => import('@/views/mobileMaket')
        },
        {
          path:'soldierMood',
          name:'soldierMood',
          component: () => import('@/views/soldierMood')
        },
        {
          path:'easternAirline',
          name:'easternAirline',
          component: () => import('@/views/easternAirline')
        }
      ]
    }
  ]
})
