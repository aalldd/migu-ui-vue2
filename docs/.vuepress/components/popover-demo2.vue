<template>
  <div class="popoverWrapper">
    <migu-popover position="top">
      <template slot="content" slot-scope="{close}">
        <div>popover内容</div>
        <migu-button @click="close">关闭</migu-button>
      </template>
      <template slot="trigger">
        <migu-button>上方显示带关闭按钮的内容</migu-button>
      </template>
    </migu-popover>
    <migu-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>下方显示内容</migu-button>
      </template>
    </migu-popover>
    <migu-popover position="left">
      <template slot="content">
        <div>popover超长内容:popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>左边显示超长内容</migu-button>
      </template>
    </migu-popover>
    <migu-popover position="right">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>右边显示内容</migu-button>
      </template>
    </migu-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  name: "popover-demo2",
  components:{
    'migu-popover':Popover,
    'migu-button':Button
  }
}
</script>

<style scoped lang='scss'>
.popoverWrapper{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .migu-popover{
    margin: 10px;
  }
}
</style>
