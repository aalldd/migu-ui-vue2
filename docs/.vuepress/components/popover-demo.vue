<template>
  <div class="popoverWrapper">
    <migu-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>默认popover</migu-button>
      </template>
    </migu-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'

export default {
  name: "popover-demo",
  components: {
    'migu-popover': Popover,
    'migu-button': Button
  }
}
</script>

<style scoped lang='scss'>

</style>
