import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    component: () => import('@/views/page1')
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('@/views/page2')
                },
                {
                    path: '/page3',
                    name: 'page3',
                    component: () => import('@/views/page3')
                },
                {
                    path: 'map',
                    name: 'map',
                    component: () => import('@/views/map')
                },
            ]
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to)
    if (to.path === '/') {
        router.push({
            name:'page1'
        })
    } else {
        next()
    }
})
export default router
