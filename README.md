# 轱辘 一个vue ui框架

[![Build Status](https://travis-ci.com/aalldd/Migu-ui.svg?branch=master)](https://travis-ci.com/aalldd/Migu-ui)

## 介绍

这是我在学习vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1.添加css样式
  使用本框架前请在css中开启border-box
  ```
  *,*::before,*::after{
  box-sizing:border-box;
  }
  ```
  IE8及以上浏览器都支持此样式

  你还需要设置默认颜色等变量(后续会改为scss变量)
  ```
  html {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bg: #eee;
       --border-raidus: 4px;
       --color: #999;
       --border-color: #999;
       --border-color-hover: #6
  }
  ```
  IE15及以上浏览器支持此样式

2.安装 Migu
```
npm i -S Migu
```
3.引入Migu
```
import {Button ButtonGroup,Icon} from 'Migu'
import 'Migu-demo/dist/index.css'

export default {
   name:'app',
   components:{
     'migu-button':Button,
     'migu-icon':Icon
   }
}
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



