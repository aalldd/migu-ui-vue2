---
title: 'Collapse - 折叠面板'
---
# 折叠面板
通过折叠面板收纳内容区域

## 基础用法
可同时展开多个面板，面板之间不影响
&nbsp;
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>
## 基本用法代码展示
```vue
<template>
  <div>
        <migu-collapse :selected.sync="selected">
        <migu-collapse-item title="标题1" name="1">1</migu-collapse-item>
        <migu-collapse-item title="标题2" name="2">2</migu-collapse-item>
        <migu-collapse-item title="标题3" name="3">3</migu-collapse-item>
        </migu-collapse>
  </div>
</template>
```

## 手风琴效果
每次只能展开一个面板
&nbsp;
<ClientOnly>
  <collapse-demo2></collapse-demo2>
</ClientOnly>

## 手风琴效果代码展示
```vue
<template>
  <div>
        <migu-collapse :selected.sync="selected" single>
        <migu-collapse-item title="标题1" name="1">1</migu-collapse-item>
        <migu-collapse-item title="标题2" name="2">2</migu-collapse-item>
        <migu-collapse-item title="标题3" name="3">3</migu-collapse-item>
        </migu-collapse>
  </div>
</template>
```

## 选项

### Attribute
1. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> title </span>
   来改变标题
2. 双向绑定：Collapse 组件的双向绑定与 Vue 官方的类似，支持 .sync 修饰符 ```:selected.sync="selected"```
3. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> name </span>
   来指定选中的项，name为必选参数
4. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> single </span>
   来指定手风琴效果

属性|取值|取值类型|默认值|是否必须
--|:--:|:--:|:--:|:--:
title|标题名称|String|空|required
name|选项|String|空|required
single|true or false|Boolean|false|not-required
