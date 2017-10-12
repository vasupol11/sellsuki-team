import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main/Index'
import Profile from '@/views/Profile/Index'
import Profiles from '@/views/Profile/Profiles'
import ProfileNoomerzx from '@/views/Profile/Noomerzx/Index'
import ProfileWhite from '@/views/Profile/White/Index'
import ProfileNics from '@/views/Profile/NICs/Index'
import ProfileWan from '@/views/Profile/Wan/Index'
import ProfileBiiG from '@/views/Profile/BiiG/Index'
import ProfileTak from '@/views/Profile/Tak/Index'
import ProfileFang from '@/views/Profile/Fang/Index'
import ProfilePang from '@/views/Profile/Pang/Index'
import ProfileWorld from '@/views/Profile/World/Index'

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
          path: 'wan',
          name: 'profile-wan',
          component: ProfileWan
        },
        {
          path: 'BiiG',
          name: 'profile-biig',
          component: ProfileBiiG
        },
        {
          path: 'tak',
          name: 'profile-tak',
          component: ProfileTak
        },
        {
          path: 'world',
          name: 'profile-world',
          component: ProfileWorld
        },
        {
          path: 'fang',
          name: 'profile-fang',
          component: ProfileFang
        },
        {
          path: 'pang',
          name: 'profile-pang',
          component: ProfilePang
        }
      ]
    },
    {path: '*', redirect: {name: 'main'}}
  ]
})
