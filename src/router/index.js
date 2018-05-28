import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainDisplay from '@/components/MainDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        hello: HelloWorld,
        mainDisplay: MainDisplay
      }
    }
  ]
})
