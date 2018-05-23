import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ZohoVerify from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/zohoverify/verifyforzoho.html',
      name: 'ZohoVerify',
      component: ZohoVerify
    }
  ]
})
