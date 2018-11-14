import Vue from 'vue'
import Router from 'vue-router'
// import Rank from 'components/rank/rank'
// import Recommend from 'components/recommend/recommend'
// import Search from 'components/search/search'
// import Singer from 'components/singer/singer'


// 路由懒加载
const Index = (resolve) => {
  import ('components/index/index').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import ('components/index/login').then((module) => {
    resolve(module)
  })
}
const yindao = (resolve) => {
  import ('components/index/yindao').then((module) => {
    resolve(module)
  })
}
const Xiaoxi = (resolve) => {
  import ('components/xiaoxi/xiaoxi').then((module) => {
    resolve(module)
  })
}
const Mine = (resolve) => {
  import ('components/mine/mine').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', //默认目录
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: Xiaoxi
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/yindao',
      name: 'yindao',
      component: yindao
    },
    
   
  ]
})
