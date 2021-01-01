<template>
  <div class="buttonWrapper">
    <migu-button>默认按钮</migu-button>
    <migu-button :loading="true">等待按钮</migu-button>
    <migu-button icon="setting">图标按钮</migu-button>
    <migu-button icon="setting" icon-position="right">图标按钮</migu-button>
    <migu-button disabled>禁用按钮</migu-button>
  </div>
</template>

<script>
import Button from '../../../src/button'

export default {
  name: "button-demo",
  components: {
    'migu-button': Button
  }
}
</script>

<style scoped lang='scss'>
  .buttonWrapper{
    display: flex;
    justify-content: space-around;
  }
</style>
