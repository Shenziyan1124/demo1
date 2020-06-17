import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/index', // 风险清单
      name: 'index',
      meta: {
        title: '构件详情'
      },
      component: () => import('../pages/index'),
      children: [
        {
          path: 'mine', // 风险清单
          name: 'mine',
          meta: {
            title: 'mine'
          },
          component: () => import('../pages/mine')
        },
        {
          path: 'shouye',
          name: 'shouye',
          meta: {
            title: 'shouye'
          },
          component: () => import('../pages/shouye')
        },
        {
          path: 'order', // 风险清单
          name: 'order',
          meta: {
            title: 'order'
          },
          component: () => import('../pages/order')
        },
        {
          path: '',
          redirect: 'shouye'
        }
      ]
    },
    {
      path: '/movies',
      name: 'dianying',
      component: () => import('../pages/dianying')
    },

    {
      path: '*',
      redirect: '/index'
    }
  ]
})

export default router
