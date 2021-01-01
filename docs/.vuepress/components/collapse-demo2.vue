<template>
  <div>
    <migu-collapse :selected.sync="selectedTab" single>
      <migu-collapse-item title="标题1" name="1">content1</migu-collapse-item>
      <migu-collapse-item title="标题2" name="2">content2</migu-collapse-item>
      <migu-collapse-item title="标题3" name="3">content3</migu-collapse-item>
    </migu-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  name: "collapse-demo2.vue",
  components: {
    'migu-collapse': Collapse,
    'migu-collapse-item': CollapseItem
  },
  data(){
    return {
      selectedTab:['1']
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
