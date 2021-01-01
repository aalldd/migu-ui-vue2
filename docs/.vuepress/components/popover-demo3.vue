<template>
  <div class="popoverWrapper">
    <migu-popover position="top" trigger="hover">
      <template slot="content">
        <div>popover内容 <strong>粗字体</strong></div>
      </template>
      <template slot="trigger">
        <migu-button>hover显示粗字体</migu-button>
      </template>
    </migu-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  name: "popover-demo3",
  components:{
    'migu-popover':Popover,
    'migu-button':Button
  }
}
</script>

<style scoped lang='scss'>

</style>
