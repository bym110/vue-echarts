import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';
import soldierMood from '@/views/soldierMood/soldierMood';

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
          path:'/mobileMaket',
          name:'mobileMaket',
          component: () => import('@/views/mobileMaket')
        },
        {
          path:'easternAirline',
          name:'easternAirline',
          component: () => import('@/views/easternAirline')
        }
      ]
    },
    {
      path: '/soldierMood',
      name: 'soldierMood',
      component: soldierMood,
      children:[
        {
          path:'index',
          name:'index',
          component: () => import('@/views/soldierMood/index')
        }
      ]
    }
  ]
})
