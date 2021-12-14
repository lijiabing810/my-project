const home = () => import('@/views/home/home')
const login = () => import( '@/views/login/login')


export default [
  {
    path: '/',
    redirect: {
      path: '/login',
    
    },
  },
  {
    path: '/home',
    name:'home',
    component: home,

  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },]
      
