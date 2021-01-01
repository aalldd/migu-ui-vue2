<template>
  <div class="iconWrapper">
    <migu-icon name="setting"></migu-icon>
    <migu-icon name="cat"></migu-icon>
    <migu-icon name="left"></migu-icon>
    <migu-icon name="loading"></migu-icon>
    <migu-icon name="right"></migu-icon>
    <migu-icon name="zan"></migu-icon>
    <migu-icon name="xiazai1"></migu-icon>
    <migu-icon name="error"></migu-icon>
    <migu-icon name="xia"></migu-icon>
    <migu-icon name="info"></migu-icon>
  </div>

</template>

<script>
import icon from '../../../src/icon.vue'

export default {
  name: "icon-demo",
  components: {
    'migu-icon': icon
  }
}
</script>

<style scoped lang="scss">
.iconWrapper{
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  .migu-icon{
    transform: scale(1.5);
  }
}
</style>
