export default [
    {
      path: '/',
      redirect: {
        path: '/login',
      
      },
    },
    {
      path: '/home',
      component: home,
      children,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },]