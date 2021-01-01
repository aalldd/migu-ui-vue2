<template>
  <div>
    <migu-button @click="showToast1">top</migu-button>
    <migu-button @click="showToast2">middle</migu-button>
    <migu-button @click="showToast3">bottom</migu-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  name: "toast-demo",
  components: {
    'migu-toast': Toast,
    'migu-button': Button
  },
  methods:{
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast('<strong>你的智商需要充值</strong>', {
        enableHtml: true,
        closeButton: {
          text: '已充值',
          callback() {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: 2,
        position: position.trim()
      })
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
