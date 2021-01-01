---
title: 'Layout- 布局'
---
layout布局可以帮助您快速的实现一个基本的网页结构
# Layout- 布局

## 预览
&nbsp;
<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>

## 基本用法
```vue
<template>
  <div class="wrapper">
    <migu-layout>
      <migu-header> header </migu-header>
      <migu-layout>
        <migu-sider> sider </migu-sider>
        <migu-content> content </migu-content>
      </migu-layout>
      <migu-footer> footer </migu-footer>
    </migu-layout>
    <br>
    <migu-layout>
      <migu-header> header </migu-header>
      <migu-content> content </migu-content>
      <migu-footer> footer </migu-footer>
    </migu-layout>
    <br>
    <migu-layout>
      <migu-header> header </migu-header>
      <migu-layout>
        <migu-sider> sider </migu-sider>
        <migu-layout>
          <migu-content> content </migu-content>
          <migu-footer> footer </migu-footer>
        </migu-layout>
      </migu-layout>
    </migu-layout>
  </div>
</template>
<style lang="scss" scoped>
$background: #99A9BF;
$wrapper-top: 10px;
$font-color: white;
.wrapper {
  > .migu-layout { height: 30vh;
    > .migu-header { height: 3em; background: $background; }
    > .migu-content { background: lighten($background, 40%); }
    > .migu-layout { height: 6em;
      > .migu-sider { width: 3em; background: lighten($background, 15%); }
      > .migu-content { background: lighten($background, 40%); }
      > .migu-layout{
        > .migu-content{ background: lighten($background, 40%); }
        > .migu-footer { background: $background; }
      }
    }
    > .migu-footer { background: $background; }
  }
}
</style>
```

## 选项
提供基础布局，样式自定义
### Attribute
1. <span style='color:#3eaf7c;background-color:#F8F8F8'> migu-layout </span>:布局容器，可以嵌套header sider content footer 或者layout自己，可以放在任何父容器中
2. <span style='color:#3eaf7c;background-color:#F8F8F8'> migu-header </span>:顶部布局，其下可嵌套任何元素，只能放在 Layout 中。
3. <span style='color:#3eaf7c;background-color:#F8F8F8'> migu-sider </span>:侧边栏，其下可嵌套任何元素，只能放在 Layout 中。
4. <span style='color:#3eaf7c;background-color:#F8F8F8'> migu-content </span>:内容部分，其下可嵌套任何元素，只能放在 Layout 中。
5. <span style='color:#3eaf7c;background-color:#F8F8F8'> migu-footer </span>:底部布局，其下可嵌套任何元素，只能放在 Layout 中。

