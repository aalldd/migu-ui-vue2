<template>
  <div>
    <migu-button-group>
      <migu-button icon="left">上一页</migu-button>
      <migu-button icon="setting">上一页</migu-button>
      <migu-button icon="right" icon-position="right">下一页</migu-button>
    </migu-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'
export default {
  name: "buttonGroup-demo",
  components:{
    'migu-button-group':ButtonGroup,
    'migu-button':Button
  }
}
</script>

<style scoped lang='scss'>

</style>
