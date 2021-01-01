<template>
  <transition name="slide">
    <div class="migu-sider">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name:'MiguSider'
}
</script>
<style lang="scss" scoped>
.migu-sider{
  position: relative;
}
.slide-enter-active,.slide-leave-active{
  transition:all 1s
}
.slide-enter,.slide-leave-to{
  margin-left: -200px;
}
</style>
