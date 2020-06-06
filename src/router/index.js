import Vue from 'vue'
import VueRouter from 'vue-router'

//0.对路由组件进行懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopping = () => import('../views/shopping/Shopping')
const Profile = () => import('../views/profile/Profile')

//1.安装插件
Vue.use(VueRouter)

//2.映射组件
const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/profile',
    component: Profile
  }
]

//3配置路由和组件之间的关系
const router = new VueRouter({
  routes,
  mode:'history',//URL转换成HTML5的模式，默认是hash模式(带有#号)
})

//4将router对象传入到Vue实例
export default router
