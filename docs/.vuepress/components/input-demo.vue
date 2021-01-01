<template>
  <div class="inputWrapper">
    <migu-input></migu-input>
    <migu-input disabled></migu-input>
    <migu-input readonly></migu-input>
    <migu-input error="error message"></migu-input>
    <br>
    <migu-input v-model="xxx"></migu-input>
    <span>value:{{xxx}}</span>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  name: "input-demo",
  components: {
    'migu-input': Input
  },
  data() {
    return {
      xxx: '双向绑定'
    }
  }
}
</script>

<style scoped lang='scss'>
  .inputWrapper{
    .migu-input{
      margin: 10px;
    }
  }
</style>
