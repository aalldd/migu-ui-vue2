<template>
  <div class="gutter-wrapper">
    <migu-row>
      <migu-col class="demo" :span="24" :ipad="{span:12}" :narrow-Pc="{span:8}" :pc="{span:6}" :wide-pc="{span:4}">
      </migu-col>
      <migu-col class="demo" :span="24" :ipad="{span:12}" :narrow-Pc="{span:8}" :pc="{span:6}" :wide-pc="{span:4}">
      </migu-col>
      <migu-col class="demo" :span="24" :ipad="{span:12}" :narrow-Pc="{span:8}" :pc="{span:6}" :wide-pc="{span:4}">
      </migu-col>
      <migu-col class="demo" :span="24" :ipad="{span:12}" :narrow-Pc="{span:8}" :pc="{span:6}" :wide-pc="{span:4}">
      </migu-col>
      <migu-col class="demo" :span="24" :ipad="{span:12}" :narrow-Pc="{span:8}" :pc="{span:6}" :wide-pc="{span:4}">
      </migu-col>
      <migu-col class="demo" :span="24" :ipad="{span:12}" :narrow-Pc="{span:8}" :pc="{span:6}" :wide-pc="{span:4}">
      </migu-col>
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
.gutter-wrapper {
  padding-top: 10px;
  .col {
    text-align: center;
    color: white;
    margin-top: 10px;
    border-radius: 4px;
    min-height: 27px;
  }
  .row{
    :nth-child(odd){
      background-color: #99A9BF
    }
    :nth-child(even){
      background-color: #D3DCE6;
    }
  }
}

</style>
