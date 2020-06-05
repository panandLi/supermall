<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="white">
          <img slot="item-icon" src="~assets/img/tabbar/index.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/index_act.png" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="white">
          <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/category_act.png" alt="">
          <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping" activeColor="white">
          <img slot="item-icon" src="~assets/img/tabbar/shopping.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/shopping_act.png" alt="">
          <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="white">
          <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/profile_act.png" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
