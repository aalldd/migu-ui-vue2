<template>
  <div class="gutter-wrapper">
    <migu-row gutter="30">
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
    </migu-row>
    <migu-row gutter="30">
      <migu-col span="12"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="12"><span> col-8; gutter-30;</span></migu-col>
    </migu-row>
    <migu-row gutter="30">
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
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

    > span {
      display: block;
      background: #99A9BF;
      border-radius: 4px;
    }
  }
}

</style>
