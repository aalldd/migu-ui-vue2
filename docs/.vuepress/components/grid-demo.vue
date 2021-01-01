<template>
  <div class="grid-wrapper">
    <migu-row class="row">
      <migu-col span="24">col-24</migu-col>
    </migu-row>
    <migu-row>
      <migu-col span="12">col-12</migu-col>
      <migu-col span="12">col-12</migu-col>
    </migu-row>
    <migu-row class="row">
      <migu-col span="8">col-8</migu-col>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="8">col-8</migu-col>
    </migu-row>
    <migu-row class="row">
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6">col-6</migu-col>
    </migu-row>
    <migu-row class="row">
      <migu-col span="4">col-4</migu-col>
      <migu-col span="4">col-4</migu-col>
      <migu-col span="4">col-4</migu-col>
      <migu-col span="4">col-4</migu-col>
      <migu-col span="4">col-4</migu-col>
      <migu-col span="4">col-4</migu-col>
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
  }
}
</script>

<style lang="scss" scoped>
$background: #99A9BF;
$wrapper-top: 10px;
$font-color: white;
.grid-wrapper {
  text-align: center;
  color: $font-color;
  > .row {
    padding: .4em;
    > .col {
      border-radius: 4px;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: $font-color;
      }
    }
  }
}
</style>


