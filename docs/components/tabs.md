---
title: 'Tabs- 标签'
---

# Tabs- 标签
分隔内容上有关联但属于不同类别的数据集合。
## 基本用法
&nbsp;
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

## 基本用法
```vue
<template>
  <div class="tabsWrapper">
    <migu-tabs :selected.sync="selectedType">
      <migu-tabs-head>
        <migu-tabs-item name="cars" disabled>
          <migu-icon name="setting"></migu-icon>
          汽车
        </migu-tabs-item>
        <migu-tabs-item name="finance">
          财经
        </migu-tabs-item>
        <migu-tabs-item name="sports">
          体育
        </migu-tabs-item>
      </migu-tabs-head>
      <migu-tabs-body>
        <migu-tabs-pane name="woman">
          美女相关资讯
        </migu-tabs-pane>
        <migu-tabs-pane name="finance">
          财经相关资讯
        </migu-tabs-pane>
        <migu-tabs-pane name="sports">
          体育相关资讯
        </migu-tabs-pane>
      </migu-tabs-body>
    </migu-tabs>
  </div>
</template>
```

## 方向
&nbsp;
<ClientOnly>
  <tabs-demo2></tabs-demo2>
</ClientOnly>
可以通过 direction 设置标签的方向
标签一共有两个方向horizontal和vertical

## 方向用法
```vue
<template>
  <div class="tabsWrapper">
    <migu-tabs :selected.sync="selectedType" direction="vertical">
      <migu-tabs-head>
        <migu-tabs-item name="cars">
          <migu-icon name="setting"></migu-icon>
          汽车
        </migu-tabs-item>
        <migu-tabs-item name="finance">
          财经
        </migu-tabs-item>
        <migu-tabs-item name="sports">
          体育
        </migu-tabs-item>
      </migu-tabs-head>
      <migu-tabs-body>
        <migu-tabs-pane name="cars">
          汽车相关资讯
        </migu-tabs-pane>
        <migu-tabs-pane name="finance">
          财经相关资讯
        </migu-tabs-pane>
        <migu-tabs-pane name="sports">
          体育相关资讯
        </migu-tabs-pane>
      </migu-tabs-body>
    </migu-tabs>
  </div>
</template>
```

## 选项
>tabs组件包含了migu-tabs migu-head migu-item migu-body migu-pane 一个根组件五个子组件,虽然使用起来需要很多的组件，但是结构非常的清晰
- **migu-head** :是tabs的头部，也就是示例中的’汽车，财经，体育‘它们的容器
- **migu-item** :是tabs头部中的每一个元素，也就是’汽车，财经‘这一个个具体的项
- **migu-body** :是tabs内容的总和，也就是示例中‘汽车相关资讯，财经相关资讯’的容器
- **migu-pane** :是tabs内容的每一项，也就是’汽车相关资讯‘等这些具体的内容项
### migu-tabs Attribute
1. <span style='color:#3eaf7c;background-color:#F8F8F8'> :selected.sync</span>:默认高亮状态，需要设置selected属性来确定，注意设置的selected属性与migu-item中设置的name属性值一一对应
2. <span style='color:#3eaf7c;background-color:#F8F8F8'> direction </span>:tabs的方向，默认是横向，也可以改为纵向

属性值|取值|取值类型|默认值
--|:--:|:--:|:--:
selected|默认选中的属性|String|空
direction|horizontal or vertical|String|horizontal

### migu-item Attribute
1. <span style='color:#3eaf7c;background-color:#F8F8F8'> name</span> item的唯一标识，必须属性，pane上也要设置name，要不然无法和item一一对应
2. <span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>改选项栏是否可用

属性值|取值|取值类型|默认值
--|:--:|:--:|:--:
name|item的唯一标识，必须属性|String or Number|空
disabled|true or false|Boolean|false
