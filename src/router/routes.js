const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('@/views/userinfo/index.vue'),
      }
    ]
  }
]
export default routes