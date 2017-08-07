import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Index'
import Profile from '@/views/Profile/Index'
import Profiles from '@/views/Profile/Profiles'
import ProfileNoomerzx from '@/views/Profile/Noomerzx/Index'
import ProfileWhite from '@/views/Profile/White/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/profile',
      component: Profile,
      children: [
        {
          path: '',
          name: 'profiles',
          component: Profiles
        },
        {
          path: 'noomerzx',
          name: 'profile-noomerzx',
          component: ProfileNoomerzx
        },
        {
          path: 'white',
          name: 'profile-white',
          component: ProfileWhite
        }
      ]
    },
    {path: '*', redirect: {name: 'main'}}
  ]
})
