<template>
  <div class="toastWrapper">
    <migu-button @click="showToast1">top</migu-button>
    <migu-button @click="showToast2">middle</migu-button>
    <migu-button @click="showToast3">bottom</migu-button>
    <migu-button @click="showToast4">设置zIndex</migu-button>
    <migu-button @click="showToast5">会自动关闭</migu-button>
    <migu-button @click="showToast6">点击按钮关闭</migu-button>
    <migu-button @click="showToast7">支持html</migu-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'

Vue.use( plugin )
export default {
  name: "toast-demo",
  components: {
    'migu-toast': Toast,
    'migu-button': Button
  },
  methods: {
    showToast1() {
      this.$toast( '你的智商需要充值', {
        position: 'top'
      } )
    },
    showToast2() {
      this.$toast( '你的智商需要充值', {
        position: 'middle'
      } )
    },
    showToast3() {
      this.$toast( '你的智商需要充值', {
        position: 'bottom'
      } )
    },
    showToast4() {
      this.$toast( '你的智商需要充值', {
        zIndex: 30
      } )
    },
    showToast5() {
      this.$toast( '你的智商需要充值', {
        autoClose: 5
      } )
    },
    showToast6() {
      this.$toast( '你的智商需要充值', {
        closeButton: {
          text: '已充值',
          callback() {
            alert( '他说已经充值智商了' )
          }
        }
      } )
    },
    showToast7() {
      this.$toast( '<strong>你的智商需要充值</strong>', {
        enableHtml: true
      } )
    }
  }
}
</script>

<style scoped lang='scss'>
.toastWrapper{
  .migu-button{
    margin: 10px!important;
  }
}
</style>
