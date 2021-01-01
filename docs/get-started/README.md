---
title: '快速上手'
---
# 快速上手

## 引入资源
按需引入您需要的组件以及基本样式
```javascript
import {Button} from "Migu-ui-demo";
import "Migu-ui-demo/dist/index.css";
```

## 注册组件
```javascript
export default {
  components: {
    "migu-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <migu-button>默认按钮</migu-button>
  </div>
</template>
```
效果：
<ClientOnly>
  <getStarted/>
</ClientOnly>

