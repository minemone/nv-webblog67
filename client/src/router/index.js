import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIndex from '@/components/user/Index'
import UserCreate from '@/components/user/CreateUser'
import UserEdit from '@/components/user/EditUser'
import UserShow from '@/components/user/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },

    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },

    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },

    {
      path: '/user',
      name: 'user',
      component: UserShow
    }
  ]
})
