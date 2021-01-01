---
title: 'Grid-栅格'
---
通过基础的 24 分栏，迅速简便地创建布局。
# Grid-栅格
这个组件只是提供了一种布局，具体的css还是需要用户自己编写的哦
## 基本使用预览
使用单一分栏创建基础的栅格布局。
&nbsp;
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

## 基本使用方法
```vue
<template>
  <div class="grid-wrapper">
    <migu-row>
      <migu-col span="24">col-24</migu-col>
    </migu-row>
    <migu-row>
      <migu-col span="12">col-12</migu-col>
      <migu-col span="12">col-12</migu-col>
    </migu-row>
    <migu-row class="row">
      <migu-col span="8">col-8</migu-col>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="8">col-8</migu-col>
    </migu-row>
    <migu-row class="row">
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6">col-6</migu-col>
    </migu-row>
  </div>
</template>
<style lang="scss" scoped>
.grid-wrapper {
  text-align: center;
  color: white;
  > .row {
    padding: .2em;
    > .col {
      &:nth-child(odd) {
        background: #99A9BF;
      }
      &:nth-child(even) {
        background: lighten(#99A9BF, 20%);
        color: white;
      }
    }
  }
}
</style>
```
## 分栏间隔
分栏之间存在间隔。。
Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
&nbsp;
<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>
## 分栏间隔使用方法
```vue
<template>
  <div class="grid-wrapper">
    <migu-row gutter="30">
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
    </migu-row>
    <migu-row gutter="30">
      <migu-col span="12"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="12"><span> col-8; gutter-30;</span></migu-col>
    </migu-row>
    <migu-row gutter="30">
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-30;</span></migu-col>
    </migu-row>
  </div>
</template>
```

## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
&nbsp;
<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>
## 混合布局使用方法
```vue
<template>
  <div class="grid-wrapper">
    <migu-row gutter="20">
      <migu-col span="16"><span> col-16; gutter-20;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-20;</span></migu-col>
    </migu-row>
    <migu-row gutter="20">
      <migu-col span="8"><span> col-8; gutter-20;</span></migu-col>
      <migu-col span="8"><span> col-8; gutter-20;</span></migu-col>
      <migu-col span="4"><span> col-4; gutter-20;</span></migu-col>
      <migu-col span="4"><span> col-4; gutter-20;</span></migu-col>
    </migu-row>
    <migu-row gutter="20">
      <migu-col span="4"><span> col-4; gutter-20;</span></migu-col>
      <migu-col span="16"><span> col-16; gutter-20;</span></migu-col>
      <migu-col span="4"><span> col-4; gutter-20;</span></migu-col>
    </migu-row>
  </div>
</template>
```

## 对齐方式
通过 align 来对分栏进行灵活的对齐。
&nbsp;
<ClientOnly>
  <grid-demo4></grid-demo4>
</ClientOnly>
## align使用方法
```vue
<template>
  <div class="grid-wrapper">
    <migu-row align="left">
      <migu-col span="8"><span>left</span></migu-col>
      <migu-col span="8"><span>left</span></migu-col>
    </migu-row>
    <migu-row align="center">
      <migu-col span="8"><span>center</span></migu-col>
      <migu-col span="8"><span>center</span></migu-col>
    </migu-row>
    <migu-row align="right">
      <migu-col span="8"><span>right</span></migu-col>
      <migu-col span="8"><span>right</span></migu-col>
    </migu-row>
  </div>
</template>
```

## 分栏偏移
通过 offset 来设置分栏的偏移量。
&nbsp;
<ClientOnly>
  <grid-demo5></grid-demo5>
</ClientOnly>
## 分栏偏移使用方法
```vue
<template>
  <div class="gutter-wrapper">
    <migu-row>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="4" offset="4">col-4;offset-4</migu-col>
    </migu-row>
    <migu-row>
      <migu-col span="8">col-8</migu-col>
      <migu-col span="5" offset="3">col-5;offset-3</migu-col>
      <migu-col span="4" offset="4">col-4;offset-4</migu-col>
    </migu-row>
    <migu-row>
      <migu-col span="6">col-6</migu-col>
      <migu-col span="6" offset="6">col-6;offset-6</migu-col>
    </migu-row>
  </div>
</template>
```

## 支持响应式
支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。
若不给 Col 这四个属性，默认为 手机端响应，span值为24。
&nbsp;
<ClientOnly>
  <grid-demo6></grid-demo6>
</ClientOnly>
## 响应式使用方法
```vue
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
```

## 选项

### Row Attributes
1. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>
   来设置分栏之间的间隔
2. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> align </span>
   来设置分栏的对齐方式

属性|取值|取值类型|默认值|是否必须
--|:--:|:--:|:--:|:--:
gutter|分栏间隔|Number|空|not-required
align|分栏的对齐方式|String|left or center or right|not-required

### Col Attributes
1. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>
   来设置栅格占据的列数
2. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>
   来设置栅格左侧的间隔格数
3. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> ipad </span>
   来设置577px-768px 响应式栅格数
4. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> narrow-pc </span>
   来设置769px-992px 响应式栅格数
5. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> pc </span>
   来设置993px-1200px 响应式栅格数
6. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> wide-pc </span>
   来设置1200px以上 响应式栅格数   
   
属性|取值|取值类型|默认值|是否必须
--|:--:|:--:|:--:|:--:
span|栅格占据的列数|Number或者string|24|not-required
offset|栅格左侧的间隔格数|Number或者string|空|not-required
ipad|响应式栅格数|Object|空|not-required
narrow-pc|响应式栅格数|Object|空|not-required
pc|响应式栅格数|Object|空|not-required
wide-pc|响应式栅格数|Object|空|not-required

