<template>
  <div class="buttonWrapper">
    <migu-button theme="primary" icon="setting">支持theme</migu-button>
    <migu-button theme="success">支持theme</migu-button>
    <migu-button theme="info" >支持theme</migu-button>
    <migu-button theme="warning" disabled>支持theme</migu-button>
    <migu-button theme="danger">支持theme</migu-button>
    <migu-button theme="kawiyi">支持theme</migu-button>
    <migu-button speical>支持theme</migu-button>
  </div>
</template>

<script>
import Button from '../../../src/button'

export default {
  name: "button-demo-theme",
  components: {
    'migu-button': Button
  }
}
</script>

<style scoped lang='scss'>
  .buttonWrapper{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .migu-button{
      margin: 10px;
    }
  }
</style>
