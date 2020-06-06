<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    background: pink;
    box-shadow: 0 -1px 5px rgba(100,100,100,.2);
  }
</style>
