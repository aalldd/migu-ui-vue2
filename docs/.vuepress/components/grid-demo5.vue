<template>
  <div class="gutter-wrapper">
    <migu-row>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="4" offset="4">col-4;offset-4</migu-col>
    </migu-row>
    <migu-row>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="5" offset="3">col-5;offset-3</migu-col>
      <migu-col span="4" offset="4">col-4;offset-4</migu-col>
    </migu-row>
    <migu-row>
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6" offset="4">col-6;offset-4</migu-col>
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
    margin-top: 10px!important;
    border-radius: 4px;
    background: #99A9BF;
    max-height: 27px;
  }
}

</style>
