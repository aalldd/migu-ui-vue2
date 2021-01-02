# Migu 一个vue ui框架

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

2.安装 Migu
```
npm i -S Migu
```
3.引入Migu
```
import {Button, ButtonGroup, Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
                 , Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin} from 'Migu-ui'
import 'Migu-ui/dist/index.css'

export default {
   name:'app',
   components:{
     'migu-button':Button,
     'migu-icon':Icon,
     'migu-button-group':ButtonGroup,
     'migu-col':Col,
     'migu-collapse':Collapse,
     'migu-collapse-item':CollapseItem,
     'migu-content': Content,
     'migu-footer': Footer,
     'migu-header': Header,
     'migu-input': Input,
     'migu-layout': Layout,
     'migu-popover': Popover,
     'migu-row': Row,
     'migu-sider': Sider,
     'migu-tabs': Tabs,
     'migu-tabs-head': TabsHead,
     'migu-tabs-body': TabsBody,
     'migu-tabs-item': TabsItem,
     'migu-tabs-pane': TabsPane,
     'migu-toast': Toast
   }
}
```
## 文档
[Migu ui官网](https://aalldd.github.io/migu-ui-vue2/)
## 提问

## 变更记录

## 联系方式

## 贡献代码



