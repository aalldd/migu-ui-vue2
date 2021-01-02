<template>
  <div class="gutter-wrapper">
    <migu-row align="left">
      <migu-col span="8">left</migu-col>
      <migu-col span="8">left</migu-col>
    </migu-row>
    <migu-row align="center">
      <migu-col span="8">center</migu-col>
      <migu-col span="8">center</migu-col>
    </migu-row>
    <migu-row align="right">
      <migu-col span="8">right</migu-col>
      <migu-col span="8">right</migu-col>
    </migu-row>
  </div>
</template>

<script>
import Col from '../../../src/col'
import Row from '../../../src/row'

export default {
  components: {
    'migu-col': Col,
    'migu-row': Row
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.gutter-wrapper {
  padding-top: 10px;
  .col {
    text-align: center;
    color: white;
    margin-top: 10px;
    border-radius: 4px;
    margin-top: 10px!important;
  }
  .row{
    :first-child{
      background: #99A9BF;
    }
    :last-child{
      background-color: #D3DCE6;
    }
  }
}

</style>
