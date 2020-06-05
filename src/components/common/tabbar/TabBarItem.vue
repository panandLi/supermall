<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div v-bind:style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data () {
    return {
      //isActive: true //状态已经写死了
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {} //三目运算符，如果isActive活跃就执行大括号，反之执行空括号
    }
  },
  methods: {
    itemClick(){
      //console.log('itemClick')
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    text-align: center;
    width: 30px;
    height: 49px;
    font-size: 14px;
    border: black solid 1px;
  }
  .tab-bar-item img{
    width: 22px;
    height: 21px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>
