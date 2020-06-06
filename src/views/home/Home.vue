<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childcomps/HomeSwiper';
  import RecommendView from './childcomps/RecommendView'
  import {getHomeMultiData} from "network/home";


  export default {
    name:'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data () {
      return {
        banners: [],
        recommends: []
      }
    },
    created () {
      //1-请求多个数据
      getHomeMultiData().then(res => {   //这里的res是个局部变量执行完会被销毁，需要保存下来
        console.log(res);                 //函数调用，压入函数栈(保存函数调用中的所有变量)，函数调用结果，弹出函数栈(释放函数所有的变量)
        //this.result = res
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color:  var(--color-tint);
    color: #fff;
  }
</style>>

