const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/all',
        name: 'all',
        component: () => import('@/views/allLibrary/index.vue'),
      },
      {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('@/views/userinfo/index.vue'),
      }
    ]
  }
]
export default routes