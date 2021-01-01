---
title: 'Button - 按钮'
---
migu ui为您准备了五种功能不一的按钮
# 按钮

## 预览
&nbsp;
<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

## 基本用法
```vue
<template>
  <div>
        <migu-button>默认按钮</migu-button>
        <migu-button :loading="true">等待按钮</migu-button>
        <migu-button icon="setting">图标按钮</migu-button>
        <migu-button icon="setting" icon-position="right">图标按钮</migu-button>
        <migu-button disabled>禁用按钮</migu-button>
  </div>
</template>
```
## 支持不同主题的按钮
>说明：theme属性可以和其他属性共用,如icon，但是special不行，用了special加其他的属性都是无效的
>speical是不一样的烟火
## 预览
&nbsp;
<ClientOnly>
  <button-demo-theme></button-demo-theme>
</ClientOnly>

## 用法
```vue
<template>
  <div>
        <migu-button theme="primary" icon="setting">支持theme</migu-button>
        <migu-button theme="success">支持theme</migu-button>
        <migu-button theme="info">支持theme</migu-button>
        <migu-button theme="warning">支持theme</migu-button>
        <migu-button theme="danger">支持theme</migu-button>
        <migu-button theme="kawiyi">支持theme</migu-button>
        <migu-button speical>支持theme</migu-button>
  </div>
</template>
```

## 选项

### Attribute
1. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon </span>
   来改变图标的类型
2. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> loading </span>
   来显示是否为等待状态的按钮
3. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>
   设置按钮是否可用
4. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> theme </span>
   设置按钮的主题
5. 通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> speical </span>
   来获得一个特别的按钮

属性|取值|取值类型|默认值
--|:--:|:--:|:--:
loading|true or false|Boolean|false
icon|图标名称|String|空
icon-position|left or right 只能设置左右|String|left
disabled|true or false|Boolean|false
theme|6种主题|String|空，也就是白色的那种
speical|false|Boolean|false




# 按钮组
按钮组可以看作是一个button的容器，当你需要一组button的时候，可以使用它

## 预览
&nbsp;
<ClientOnly>
  <buttonGroup-demo></buttonGroup-demo>
</ClientOnly>

## 基本用法
```vue
<template>
  <div>
        <migu-button-group>
        <migu-button icon="left">上一页</migu-button>
        <migu-button icon="setting">上一页</migu-button>
        <migu-button icon="right" icon-position="right">下一页</migu-button>
        </migu-button-group>
  </div>
</template>
```
