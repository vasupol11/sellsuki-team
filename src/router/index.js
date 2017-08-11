import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Index'
import Profile from '@/views/Profile/Index'
import Profiles from '@/views/Profile/Profiles'
import ProfileNoomerzx from '@/views/Profile/Noomerzx/Index'
import ProfileWhite from '@/views/Profile/White/Index'
import ProfileNics from '@/views/Profile/NICs/Index'
import ProfileTak from '@/views/Profile/Tak/Index'
import ProfileFang from '@/views/Profile/Fang/Index'
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
        },
        {
          path: 'NICs',
          name: 'profile-nic',
          component: ProfileNics
        },
        {
          path: 'tak',
          name: 'profile-tak',
          component: ProfileTak
        },
        {
          path: 'fang',
          name: 'profile-fang',
          component: ProfileFang
        }
      ]
    },
    {path: '*', redirect: {name: 'main'}}
  ]
})
