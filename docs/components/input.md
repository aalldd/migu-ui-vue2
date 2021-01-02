---
title: 'Input - 输入框'
---
# Input - 输入框
通过鼠标或键盘输入字符
## 预览
&nbsp;
<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

## 使用方法
注意xxx为变量，需要在data中声明
```vue
<template>
  <div>
        <migu-input></migu-input>
        <migu-input disabled></migu-input>
        <migu-input readonly></migu-input>
        <migu-input error="error message"></migu-input>
        <br>
        <migu-input v-model="xxx"></migu-input>
        <br>
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
```

## 选项

### Attribute
1. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>
   来设置是否为**禁用**输入框
2. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> readonly </span>
   来设置是否为**只读**输入框
3. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> error </span>
   来设置警告的文字
4. migu-input同样支持使用v-model进行双向数据绑定

属性|取值|取值类型|默认值|是否必须
--|:--:|:--:|:--:|:--:
disabled|true or false|Boolean|false|not-required
readonly|true or false|Boolean|false|not-required
error|错误信息|String|空|not-required


