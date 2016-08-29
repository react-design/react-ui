---
title: Fruit - ui
type: api
order: 0
---

## 介绍

Based on the react to maintain a set of ionic style of reusable component library

### 示例
![二维码扫一扫][1]
[在线demo][2]

### 特性
- 基于react维护的一套ionic风格的可复用组件库
- 组件简洁，易于组合

### 版本

- 开发版 [![npm version](https://img.shields.io/npm/v/fruit-ui.svg?style=flat)](https://www.npmjs.com/package/fruit-ui)

### 兼容性

- 谷歌浏览器
- Safari

### 链接

- Button 按钮
- Icon 图标
- Grid 栅格布局
- Switch 开关
- Dialog 对话
- Toast
- SearchBar 搜索框
- Carousel 轮播图
- ActionSheet

[1]: https://cloud.githubusercontent.com/assets/9276376/17802302/06531f8a-6622-11e6-8346-4de63e5ebb36.png
[2]: http://demo.react-d.com/



## 快速入门

### 使用npm安装
``` bash
npm install fruit-ui
```

### 使用组件
``` js
import {Button} from 'fruit-ui';
ReactDOM.render(<Button />, node);
```

### 浏览器引入
在index.html中，引入f-ui.css
``` js
import 'dist/fruit-ui.css'; 
```

## Button 按钮

### 默认（default）
<div class="comp-button" id="button_ex1"></div>
*源码*
``` js
<Button >default</Button>
<Button type="info">info</Button>
<Button type="primary">primary</Button>
<Button type="warn">warn</Button>
<Button type="danger">danger</Button>
```

### 空

<div class="comp-button" id="button_ex2"></div>
*源码*
``` js
<Button plain>default</Button>
<Button plain type="primary">primary</Button>]
```

### 图标
<div class="comp-button" id="button_ex3"></div>
*源码*
``` js
<Button icon="fi-left-open f-left">default</Button>
<Button icon="fi-right-open f-right">default</Button>
<Button icon="fi-spin animate-spin" type="primary">primary</Button>
<Button icon="fi-spin2 animate-spin" type="primary">primary</Button>
```

### 块
<div class="comp-button" id="button_ex4"></div>
*源码*

``` js
<Button block>default</Button>
<Button block type="primary">primary</Button>
```

### 禁用
<div class="comp-button" id="button_ex5"></div>
*源码*
``` js
<Button disabled="true">default</Button>
<Button disabled type="primary">primary</Button>
```

### 小尺寸
<div class="comp-button" id="button_ex6"></div>
*源码*
``` js
<Button small>default</Button>
<Button small type="primary">primary</Button>
```





## Icon 图标

### 如何使用

``` js
<Icon value="fi-ok"></Icon>
```

加入 animate-spin 可以使图标旋转

``` js
<Icon value="fi-spin animate-spin"></Icon>
```
例子：
<div class="comp-icon" id="icon_ex1"></div>



## Switch 开关

### 默认
<div class="comp-switch" id="switch_ex1"></div>
*源码*
``` html
<Switch/>
```

### 小尺寸（small）
<div class="comp-switch" id="switch_ex2"></div>
*源码*
``` html
<Switch size="small"/>
```
### 设置文字/图标
<div class="comp-switch" id="switch_ex3"></div>
*源码*
``` html
<Switch size="normal" checkedChildren="on" uncheckedChildren="off"/>
<Switch size="normal" defaultChecked="false" checkedChildren="开" uncheckedChildren="关"/>
<Switch size="normal" defaultChecked="false" checkedChildren=<Icon className="aa"/> uncheckedChildren=<Icon className="aa"/>/>
```

### 禁用（disabled）
<div class="comp-switch" id="switch_ex4"></div>
*源码*
``` html
<Switch size="normal" defaultChecked="false" disabled="true" checkedChildren="开" uncheckedChildren="关"/>
<Switch size="small" defaultChecked="false" disabled="true"/>
```

### onChange事件
<div class="comp-switch" id="switch_ex5"></div>
*源码*
``` html
<Switch size="normal" onChange={(e)=>this.handleChange(e)} defaultChecked="false"/>
```





