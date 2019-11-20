import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Index from "../components/Index";
import TodoList from "../components/TodoList";
import Element from "../components/Element";
import Page from "../components/Page";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: "/",
      component: Login
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: "/todo",
      component: TodoList
    },
    {
      path: "/element",
      component: Element
    },
    {
      path: "/page",
      component: Page
    }
  ]
})
