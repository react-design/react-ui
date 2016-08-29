---
title: Button 按钮
type: api
order: 2
---
{% raw %} <script type="text/javascript"> pageName = 'button'; </script> {% endraw %}

## 默认（default）
<div class="comp-button" id="button_ex1"></div>
*源码*
``` js
<Button >default</Button>
<Button type="info">info</Button>
<Button type="primary">primary</Button>
<Button type="warn">warn</Button>
<Button type="danger">danger</Button>
```

## 空
<div class="comp-button" id="button_ex2"></div>
*源码*
``` js
<Button plain>default</Button>
<Button plain type="primary">primary</Button>]
```

## 图标
<div class="comp-button" id="button_ex3"></div>
*源码*
``` js
<Button icon="fi-left-open f-left">default</Button>
<Button icon="fi-right-open f-right">default</Button>
<Button icon="fi-spin animate-spin" type="primary">primary</Button>
<Button icon="fi-spin2 animate-spin" type="primary">primary</Button>
```

## 块
<div class="comp-button" id="button_ex4"></div>
*源码*

``` js
<Button block>default</Button>
<Button block type="primary">primary</Button>
```

## 禁用
<div class="comp-button" id="button_ex5"></div>
*源码*
``` js
<Button disabled="true">default</Button>
<Button disabled type="primary">primary</Button>
```

## 小尺寸
<div class="comp-button" id="button_ex6"></div>
*源码*
``` js
<Button small>default</Button>
<Button small type="primary">primary</Button>
```

## API
通过设置 Button 的属性来产生不同的按钮样式
属性如下：

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| type | 可选值为：default、info、primary、warn、danger | string | default（不填也为default）|
| icon | 设置按钮的图标 | string | - |
| block、disabled、small、plain | 设置按钮是否为块级、禁用、小按钮 | string或空 | 增加属性时有效 |

