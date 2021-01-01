---
title: 'Toast - 弹出提示框'
---

# Toast - 弹出提示框
主要用于手机端，点击可以在不同方向弹出信息
## 基本用法
&nbsp;
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>

>注意事项:migu-toast的用法和前面的组件有些不同，首先，我们需要引入migu库中的plugin插件，
>这个插件用于生成toast组件，其次，我们建议将toast组件的参数写在一个对象里面，按照示例中的写法
## 基本用法
```vue
<template>
  <div>
    <migu-button @click="showToast1">top</migu-button>
    <migu-button @click="showToast2">middle</migu-button>
    <migu-button @click="showToast3">bottom</migu-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from 'migu-ui'
import Button from 'migu-ui'
import plugin from 'migu-ui'
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
```
## 每一个参数的具体用法
&nbsp;
<ClientOnly>
  <toast-demo2></toast-demo2>
</ClientOnly>

## 展示每个参数的用法
```vue
<template>
  <div>
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
```

## 选项
- <span style='color:#3eaf7c;background-color:#F8F8F8'> position</span> 可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。
```
this.$toast( '你的智商需要充值', {
        position: 'middle'
      } )
```
- <span style='color:#3eaf7c;background-color:#F8F8F8'> zIndex</span> 此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。
 ```
  this.$toast( '你的智商需要充值', {
          zIndex: 30
        } )
  ```
- <span style='color:#3eaf7c;background-color:#F8F8F8'> autoClose</span> 此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭
 ```
  this.$toast( '你的智商需要充值', {
          autoClose: 5
        } )
  ```
- <span style='color:#3eaf7c;background-color:#F8F8F8'> closeButton</span> closeButton支持对弹出的文本进行编辑，并且接收一个回调函数，您可以在回调里面写弹出框之后要触发的函数
 ```
  this.$toast( '你的智商需要充值', {
          closeButton: {
            text: '已充值',
            callback() {
              alert( '他说已经充值智商了' )
            }
          }
        } )
  ```
- <span style='color:#3eaf7c;background-color:#F8F8F8'> enableHtml</span> enableHtml属性用于控制组件是否支持html
 ```
  this.$toast( '<strong>你的智商需要充值</strong>', {
          enableHtml: true
        } )
  ```
### Attributes

属性值|取值|取值类型|默认值
--|:--:|:--:|:--:
position|Toast 弹出的位置|String|top
zIndex|组件的z-index|Number|20
autoClose|组件自动关闭的延时(秒)|Boolean,Number|true,5
closeButton|组件关闭的按钮|Object|空
enableHtml|是否支持html标签|Boolean|false

