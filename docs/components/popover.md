---
title: 'Popover- 弹出层'
---

# Popover- 弹出层
常用于展示鼠标 hover,click 时的提示信息。
## 基本用法
&nbsp;
<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>
>注意popover中的内容与按钮需要用具名插槽包裹起来使用
## 基本用法
```vue
<template>
  <migu-popover>
    <template slot="content">
      <div>popover内容</div>
    </template>
    <template slot="trigger">
      <migu-button>默认popover</migu-button>
    </template>
  </migu-popover>
</template>
```

## 展示弹出层的位置以及可手动关闭的弹出层
&nbsp;
<ClientOnly>
  <popover-demo2></popover-demo2>
</ClientOnly>
>我们将close方法暴露了出来，用户使用具名插槽中的slot-scope可以获取到关闭的方法
popover提供了position属性用户指定出现弹出框的位置
## 弹出层位置用法
```vue
<template>
  <div class="popoverWrapper">
    <migu-popover position="top">
      <template slot="content" slot-scope="{close}">
        <div>popover内容</div>
        <migu-button @click="close">关闭</migu-button>
      </template>
      <template slot="trigger">
        <migu-button>上方显示带关闭按钮的内容</migu-button>
      </template>
    </migu-popover>
    <migu-popover position="bottom">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>下方显示内容</migu-button>
      </template>
    </migu-popover>
    <migu-popover position="left">
      <template slot="content">
        <div>popover超长内容:popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>左边显示超长内容</migu-button>
      </template>
    </migu-popover>
    <migu-popover position="right">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template slot="trigger">
        <migu-button>右边显示内容</migu-button>
      </template>
    </migu-popover>
  </div>
</template>
```

## 鼠标悬浮展示弹出层
&nbsp;
<ClientOnly>
  <popover-demo3></popover-demo3>
</ClientOnly>
>使用trigger属性可以指定弹出框的触发条件
## 触发方式用法
```vue
<template>
  <div class="popoverWrapper">
    <migu-popover position="top" trigger="hover">
      <template slot="content">
        <div>popover内容 <strong>粗字体</strong></div>
      </template>
      <template slot="trigger">
        <migu-button>hover显示粗字体</migu-button>
      </template>
    </migu-popover>
  </div>
</template>
```

## 选项
### Attributes
1. <span style='color:#3eaf7c;background-color:#F8F8F8'> slot中的content和trigger</span>:具名插槽中必须指定这样的插槽名称，要不然组件是无法读取到popover部分与button部分的
2. <span style='color:#3eaf7c;background-color:#F8F8F8'> position </span>:弹出层的方向，有上下左右四个方向
3. <span style='color:#3eaf7c;background-color:#F8F8F8'> trigger </span>:弹出层的触发条件，目前支持click和hover两种触发条件
4. 其他注意事项：migu-popover的关闭条件，1.可以通过点击其他位置关闭，body。2.可以通过点击自身按钮关闭。3. 可以自己在弹出层上加按钮，绑定事件进行关闭

属性值|取值|取值类型|默认值
--|:--:|:--:|:--:
position|弹出层的方向|String|top
trigger|click or hover|String|click
