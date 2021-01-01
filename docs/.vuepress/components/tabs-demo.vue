<template>
  <div class="tabsWrapper">
    <migu-tabs :selected.sync="selectedType">
      <migu-tabs-head>
        <migu-tabs-item name="cars" disabled>
          <migu-icon name="setting"></migu-icon>
          汽车
        </migu-tabs-item>
        <migu-tabs-item name="finance">
          财经
        </migu-tabs-item>
        <migu-tabs-item name="sports">
          体育
        </migu-tabs-item>
      </migu-tabs-head>
      <migu-tabs-body>
        <migu-tabs-pane name="cars">
          汽车相关资讯
        </migu-tabs-pane>
        <migu-tabs-pane name="finance">
          财经相关资讯
        </migu-tabs-pane>
        <migu-tabs-pane name="sports">
          体育相关资讯
        </migu-tabs-pane>
      </migu-tabs-body>
    </migu-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs'
import TabsBody from '../../../src/tabs-body'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
import Icon from '../../../src/icon'

export default {
  name: "tabs-demo",
  components: {
    'migu-tabs': Tabs, 'migu-tabs-head': TabsHead, 'migu-tabs-body': TabsBody, 'migu-tabs-item': TabsItem,
    'migu-tabs-pane': TabsPane, 'migu-icon': Icon
  },
  data() {
    return {
      selectedType: 'sports'
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
